import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "jprasadvishweshnani@gmail.com";
const PHONE_DISPLAY = "+91 6305413841";
const PHONE_HREF = "tel:+916305413841";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limits mirror the validation in the send-contact-email edge function.
const LIMITS = { name: 100, email: 255, message: 5000 };

type FieldName = "name" | "email" | "message";
type FormData = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;
type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "success" } | { kind: "error"; message: string };

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Please write a message.";
  return errors;
};

const details = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { label: "Location", value: "Greater Noida, India" },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  // Honeypot field to catch bots - if filled, the submission is silently dropped
  const [honeypot, setHoneypot] = useState("");

  const isSubmitting = status.kind === "submitting";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status.kind === "success" || status.kind === "error") setStatus({ kind: "idle" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const first = (["name", "email", "message"] as FieldName[]).find((field) => nextErrors[field]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    // Bot detected: pretend it worked.
    if (honeypot) {
      setStatus({ kind: "success" });
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      setFormData({ name: "", email: "", message: "" });
      setStatus({ kind: "success" });
    } catch (error: unknown) {
      // Only log detailed errors in development
      if (import.meta.env.DEV) {
        console.error("Error sending message:", error);
      }
      const httpStatus = (error as { context?: { status?: number } } | null)?.context?.status;
      setStatus({
        kind: "error",
        message:
          httpStatus === 429
            ? "Too many messages in a short time. Please wait a few minutes and try again."
            : "Your message could not be sent. Please try again, or email me directly.",
      });
    }
  };

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's work together"
      description="Interested in AI collaboration or have a project in mind? Let's connect."
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <dl className="space-y-5">
          {details.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 break-words text-sm">
                {item.href ? (
                  <a href={item.href} className="text-foreground underline-offset-4 hover:text-primary hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <form onSubmit={handleSubmit} noValidate className="relative space-y-5" aria-label="Contact form">
          {/* Honeypot field - hidden from users, catches bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <Input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={LIMITS.name}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p id="contact-name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={LIMITS.email}
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p id="contact-email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              maxLength={LIMITS.message}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity"
              rows={6}
              className="resize-y"
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send />
                </>
              )}
            </Button>

            <div role="status" aria-live="polite" className="text-sm">
              {status.kind === "success" && (
                <p className="flex items-start gap-2 text-primary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Message sent. Thank you for reaching out, I'll get back to you soon.
                </p>
              )}
              {status.kind === "error" && (
                <p className="flex items-start gap-2 text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
