<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Service and blog content live as typed data in src/lib/site.ts and src/lib/blog.ts, rendered by dynamic routes (/services/$slug, /blog/$slug) — one place to edit copy.
- Contact form has no backend: it validates then hands off to WhatsApp/email with prefilled text — never claim server delivery unless a backend is added.
