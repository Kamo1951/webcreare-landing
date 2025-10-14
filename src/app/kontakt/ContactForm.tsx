"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export default function ContactForm({
  action,
}: {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
}) {
  const initialState: FormState = { status: "idle" };
  const [state, formAction] = useActionState(action, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const FieldError = ({ name }: { name: string }) => {
    const msg = state.fieldErrors?.[name];
    if (!msg) return null;
    return <p className="mt-1 text-sm text-red-600">{msg}</p>;
  };

  return (
    <form ref={formRef} action={formAction} className="w-full" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            id="your-first-name"
            name="your-first-name"
            placeholder="Vorname*"
            required
            aria-invalid={!!state.fieldErrors?.["your-first-name"]}
            className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)]"
          />
          <FieldError name="your-first-name" />
        </div>
        <div className="flex-1">
          <input
            type="text"
            id="your-last-name"
            name="your-last-name"
            placeholder="Nachname*"
            required
            aria-invalid={!!state.fieldErrors?.["your-last-name"]}
            className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)]"
          />
          <FieldError name="your-last-name" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <input
            type="email"
            id="your-email"
            name="your-email"
            placeholder="Email-Adresse*"
            required
            aria-invalid={!!state.fieldErrors?.["your-email"]}
            className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)]"
          />
          <FieldError name="your-email" />
        </div>
        <div className="flex-1">
          <input
            type="tel"
            id="your-phone"
            name="your-phone"
            placeholder="Telefonnummer*"
            required
            aria-invalid={!!state.fieldErrors?.["your-phone"]}
            className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)]"
          />
          <FieldError name="your-phone" />
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          id="unternehmen"
          name="unternehmen"
          placeholder="Firma / Organisation*"
          required
          aria-invalid={!!state.fieldErrors?.["unternehmen"]}
          className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)]"
        />
        <FieldError name="unternehmen" />
      </div>

      <div className="mb-4">
        <textarea
          id="your-message"
          name="your-message"
          placeholder="Ihre Nachricht*"
          required
          rows={6}
          aria-invalid={!!state.fieldErrors?.["your-message"]}
          className="w-full px-4 py-3 bg-[var(--background-color)] border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] resize-none"
        />
        <FieldError name="your-message" />
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="checkbox-datenschutz"
            required
            aria-invalid={!!state.fieldErrors?.["checkbox-datenschutz"]}
            className="w-4 h-4"
          />
          <span className="text-sm text-[var(--paragraph-text-color)]">
            Ich akzeptiere die{" "}
            <Link
              href="/datenschutzerklaerung"
              className="text-[var(--accent-color)] hover:text-[var(--accent-color-hover)] hover:underline"
            >
              Datenschutzerklärung*
            </Link>
          </span>
        </label>
        <FieldError name="checkbox-datenschutz" />
      </div>

      {/* Globale Meldung */}
      {state.status !== "idle" && state.message && (
        <div
          className={`mb-4 text-sm px-3 py-2 border ${
            state.status === "success"
              ? "border-green-300 text-green-800 bg-green-50"
              : "border-red-300 text-red-800 bg-red-50"
          }`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      id="submit"
      disabled={pending}
      className="group cursor-pointer relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden bg-[var(--accent-color)] text-white font-semibold transition-colors duration-300 hover:bg-[var(--accent-color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 disabled:opacity-70"
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-white/10"></span>
      <span className="relative z-10 text-sm sm:text-base md:text-lg">
        {pending ? "Wird gesendet…" : "Anfrage Absenden"}
      </span>
    </button>
  );
}
