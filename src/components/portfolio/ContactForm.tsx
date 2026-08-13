import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().nonempty("Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email is too long"),
  subject: z.string().trim().nonempty("Subject is required").max(150, "Subject is too long"),
  message: z.string().trim().nonempty("Message is required").max(2000, "Message is too long"),
});

type Field = keyof z.infer<typeof schema>;

const fields: { id: Field; label: string; type: "input" | "textarea"; placeholder: string }[] = [
  { id: "name", label: "Name", type: "input", placeholder: "John Doe" },
  { id: "email", label: "Email", type: "input", placeholder: "you@email.com" },
  { id: "subject", label: "Subject", type: "input", placeholder: "" },
  { id: "message", label: "Message", type: "textarea", placeholder: "" },
];

const inputCls =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 font-mono text-[13px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";

export function ContactForm() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as Field] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:pranay846@outlook.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-5 md:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="label-mono text-accent">08</span>
        <h3 className="font-mono text-sm tracking-[0.14em] uppercase">Send a message</h3>
      </div>

      <div className="space-y-4">
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="label-mono mb-1.5 block normal-case">
              {f.label}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.id}
                rows={5}
                maxLength={2000}
                placeholder={f.placeholder}
                value={values[f.id]}
                onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                className={`${inputCls} resize-y`}
              />
            ) : (
              <input
                id={f.id}
                type={f.id === "email" ? "email" : "text"}
                maxLength={255}
                placeholder={f.placeholder}
                value={values[f.id]}
                onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                className={inputCls}
              />
            )}
            {errors[f.id] && (
              <p className="mt-1.5 font-mono text-[11px] text-term-red">{errors[f.id]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-mono text-xs text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Send className="size-4" aria-hidden="true" /> Send Message
      </button>
      <p className="mt-3 font-mono text-[11px] text-muted-foreground">
        Opens your email client with the message pre-filled.
      </p>
    </form>
  );
}
