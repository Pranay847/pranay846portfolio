# Contact form → Outlook inbox via EmailJS

Replace the current `mailto:` behavior so submissions are emailed directly to pranay846@outlook.com without opening an email client.

## What you'll need to do (one-time, ~5 min)

1. Create a free account at emailjs.com.
2. Add an **Email Service** → choose Outlook, connect your account. Note the **Service ID**.
3. Create an **Email Template** with variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, and set Reply-To to `{{email}}`. Note the **Template ID**.
4. Copy your **Public Key** from Account → General.

Give me those three values and I'll wire them in. They are publishable browser keys (safe in frontend code); enable EmailJS's domain allowlist in their dashboard to prevent abuse.

## What I'll build

- Install the `@emailjs/browser` SDK.
- Update the contact form submit handler: validate with the existing Zod schema, then send via EmailJS instead of `mailto:`.
- Submit states: button shows "Sending..." and is disabled while in flight; success shows a confirmation message and clears the form; failure shows an error with a fallback mailto link.
- Replace the helper text "Opens your email client with the message pre-filled" with a neutral note.
- Toast notifications via sonner (mounting `<Toaster />` in the root route if it isn't already).

## Technical notes

- IDs stored as `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` env vars, read with `import.meta.env`.
- Send happens client-side only, inside the submit handler — no server function, no SSR impact.
- Free tier: 200 emails/month.
