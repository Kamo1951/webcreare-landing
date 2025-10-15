import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import Logo from "@/app/components/navbar/imgs/webcreare-logo-white.webp";

export type AcknowledgementEmailProps = {
  firstName: string;
  lastName: string;
};

const backgroundColor = "#11151C";
const cardBackground = "#1B2028";
const accentColor = "#3F5AF3";
const textColor = "#F5F7FA";
const paragraphColor = "#D4DAE4";

export const AcknowledgementEmail = ({
  firstName,
  lastName,
}: AcknowledgementEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Vielen Dank für Ihre Nachricht – wir melden uns schnellstmöglich.
    </Preview>
    <Body style={styles.body}>
      <Section style={styles.wrapper}>
        <Container style={styles.card}>
          <Img src={Logo.src} width={120} alt="Webcreare" style={styles.logo} />
          <Text style={styles.heading}>Danke für Ihre Nachricht</Text>
          <Text style={styles.paragraph}>
            Hallo {firstName} {lastName},
          </Text>
          <Text style={styles.paragraph}>
            wir haben Ihre Anfrage erhalten und melden uns so schnell wie
            möglich bei Ihnen. In der Zwischenzeit können Sie sich gerne auf
            unserer Website umschauen oder uns telefonisch erreichen.
          </Text>
          <Section style={styles.infoBox}>
            <Text style={styles.infoHeading}>Ihre Kontaktmöglichkeiten</Text>
            <Text style={styles.infoLine}>E-Mail: info@webcreare.de</Text>
            <Text style={styles.infoLine}>Telefon: (+49) 151 56065802</Text>
            <Text style={styles.infoLine}>Web: https://webcreare.de</Text>
          </Section>
          <Hr style={styles.hr} />
          <Text style={styles.signature}>Liebe Grüße – Ihr Webcreare-Team</Text>
        </Container>
      </Section>
    </Body>
  </Html>
);

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor,
    fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
    margin: 0,
  },
  wrapper: {
    width: "100%",
    padding: "32px 16px",
  },
  card: {
    backgroundColor: cardBackground,
    borderRadius: 18,
    padding: "32px 28px",
    maxWidth: 520,
    color: textColor,
    boxShadow: "0 18px 45px rgba(8, 10, 16, 0.55)",
  },
  logo: {
    display: "block",
    margin: "0 auto 24px",
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    margin: "0 0 18px",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: "24px",
    color: paragraphColor,
    margin: "0 0 16px",
  },
  infoBox: {
    backgroundColor: "rgba(63, 90, 243, 0.08)",
    borderRadius: 12,
    padding: "18px 20px",
    margin: "12px 0 24px",
  },
  infoHeading: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: accentColor,
    margin: "0 0 12px",
  },
  infoLine: {
    fontSize: 14,
    lineHeight: "22px",
    color: paragraphColor,
    margin: 0,
  },
  hr: {
    border: 0,
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    margin: "24px 0",
  },
  signature: {
    fontSize: 14,
    textAlign: "center",
    color: paragraphColor,
    margin: 0,
  },
};

export default AcknowledgementEmail;
