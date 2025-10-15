import { headers } from "next/headers";
import { Resend } from "resend";
import { render as renderEmail } from "@react-email/render";
import Navbar from "@/app/components/navbar/Navbar";
import { SubAndMainHeader } from "@/app/components/headers/SubAndMainHeader";
import ContactForm from "./ContactForm";
import AcknowledgementEmail from "@/app/components/emails/AcknowledgementEmail";

export const runtime = "nodejs";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  "use server";

  // --- Meta
  const h = headers();
  const ip = (await h).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const ua = (await h).get("user-agent") ?? "";

  // --- Daten
  const firstName = (formData.get("your-first-name") || "").toString().trim();
  const lastName = (formData.get("your-last-name") || "").toString().trim();
  const email = (formData.get("your-email") || "").toString().trim();
  const phone = (formData.get("your-phone") || "").toString().trim();
  const company = (formData.get("unternehmen") || "").toString().trim();
  const message = (formData.get("your-message") || "").toString().trim();
  const gdprChecked = !!formData.get("checkbox-datenschutz");
  const honeypot = (formData.get("website") || "").toString().trim();

  // --- Bots direkt "erfolgreich" quittieren
  if (honeypot) return { status: "success", message: "Danke!" };

  // --- Validation (leichtgewichtig)
  const fieldErrors: Record<string, string> = {};
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName) fieldErrors["your-first-name"] = "Bitte ausfüllen.";
  if (!lastName) fieldErrors["your-last-name"] = "Bitte ausfüllen.";
  if (!email || !emailRe.test(email))
    fieldErrors["your-email"] = "Gültige E-Mail angeben.";
  if (!phone) fieldErrors["your-phone"] = "Bitte ausfüllen.";
  if (!company) fieldErrors["unternehmen"] = "Bitte ausfüllen.";
  if (!message) fieldErrors["your-message"] = "Bitte ausfüllen.";
  if (!gdprChecked) fieldErrors["checkbox-datenschutz"] = "Erforderlich.";

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Bitte prüfe die markierten Felder.",
      fieldErrors,
    };
  }

  // --- Mail senden (Resend)
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.RESEND_FROM || "Kontakt <noreply@your-domain.tld>";

  if (!apiKey || !to) {
    return {
      status: "error",
      message: "Server nicht korrekt konfiguriert (ENV fehlen).",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const internalMail = resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Kontaktanfrage: ${firstName} ${lastName} – ${company}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone}`,
        `Firma: ${company}`,
        ``,
        message,
        ``,
        `—`,
        `IP: ${ip}`,
        `User-Agent: ${ua}`,
      ].join("\n"),
    });

    const acknowledgementHtml = await renderEmail(
      <AcknowledgementEmail firstName={firstName} lastName={lastName} />
    );
    const acknowledgementMail = resend.emails.send({
      from,
      to: email,
      subject: "Vielen Dank für Ihre Nachricht",
      text: [
        `Hallo ${firstName} ${lastName},`,
        ``,
        `danke für Ihre Nachricht. Diese wird schnellstmöglich von uns bearbeitet.`,
        ``,
        `Liebe Grüße`,
        `Ihr Webcreare-Team`,
      ].join("\n"),
      html: acknowledgementHtml,
    });

    await Promise.all([internalMail, acknowledgementMail]);

    return {
      status: "success",
      message: "Danke! Deine Nachricht ist bei uns eingegangen.",
    };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      status: "error",
      message: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
    };
  }
}

export default function Kontakt() {
  const infoItems = [
    {
      id: "Telfon",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--accent-color)"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      header: "Telefonnummer",
      subheaderTop: "(+49) 151 56065802",
      subheaderBottom: "info@webcreare.de",
    },
    {
      id: "Öffnungszeiten",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--accent-color)"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      header: "Öffnungszeiten",
      subheaderTop: "Montag - Freitag: 9:00 - 21:00",
      subheaderBottom: "Samstag - Sonntag: 10:00 - 19:00",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center my-10 lg:my-20 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        {/* Linke Infobox */}
        <div className="w-full lg:w-110 border border-[var(--border-color)] h-fit">
          <div className="px-6 sm:px-10 py-6 bg-[var(--background-box-color)] border-[var(--border-color)]">
            <SubAndMainHeader
              subheader="Unverbindlich anfragen"
              header="Kontakt zu Uns"
              widthSize="w-md"
              direction="left"
            />
            <div className="-mt-10 mb-5">
              <p className="text-[var(--paragraph-text-color)]">
                Wir verwirklichen Ihre digitale Vision! Ob Fragen,
                Projektplanung oder ein unverbindliches Angebot – wir sind für
                Sie da.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {infoItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex place-items-center gap-4">
                    <div className="bg-[var(--background-input-color)] p-2 sm:p-5">
                      {item.svg}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl sm:text-2xl">{item.header}</div>
                      <div className="text-sm sm:text-base text-[var(--paragraph-text-color)]">
                        <p>{item.subheaderTop}</p>
                        <p>{item.subheaderBottom}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rechte Box: Formular */}
        <div className="p-6 sm:p-10 bg-[var(--background-box-color)] border border-[var(--border-color)] h-fit w-full lg:w-auto">
          <ContactForm action={submitContact} />
        </div>
      </div>
    </>
  );
}
