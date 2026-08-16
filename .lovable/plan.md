# Resume link: open in new tab

## What the user wants
- Restore the Resume nav button so it opens the PDF in a new tab instead of forcing a download.
- Understand exactly what blocked the new-tab behavior and how to fix it.
- Confirm whether it will work on other people's devices.

## Current state
- `src/components/portfolio/Nav.tsx` currently links to the uploaded resume asset but uses `download="PranayKarakoti-Resume.pdf"`, which tells the browser to save the file rather than open it.
- The asset URL is `/__l5e/assets-v1/.../PranayKarakoti-Resume.pdf` and is served by the Lovable asset CDN with `content_type: application/pdf`.
- The previous `ERR_BLOCKED_BY_CLIENT` error was caused by a browser extension (ad/tracker blocker) intercepting the new-tab navigation inside the Lovable preview iframe. It is not a site bug and does not affect real visitors on the published domain.

## Plan
1. Update the resume link in `src/components/portfolio/Nav.tsx`:
   - Remove the `download` attribute.
   - Add `target="_blank"` and keep `rel="noopener noreferrer"`.
2. Keep the same asset URL and button styling.
3. Verify the link renders correctly and points to the PDF URL.

## Technical details
- Browsers treat `application/pdf` differently:
  - With `target="_blank"` and no `download` attribute, most browsers open the PDF in a new tab using their built-in PDF viewer.
  - With `download="..."`, the browser initiates a file download instead.
- The `ERR_BLOCKED_BY_CLIENT` seen earlier is a client-side preview issue, not a server or code issue. On the published site (`pranay846portfolio.lovable.app`), `target="_blank"` will work normally for visitors without aggressive popup blockers.
- Some browsers/extensions may still block new tabs; this is unavoidable, but the standard behavior works for the vast majority of users. Adding a small secondary "Download" option is optional if the user wants a guaranteed fallback.

## Outcome
- Resume opens in a new browser tab showing the PDF.
- Works on the live site for nearly all visitors.
- Preview iframe may still be affected by local extensions, which is expected.
