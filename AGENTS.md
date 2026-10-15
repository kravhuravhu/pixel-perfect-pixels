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

## Frontend architecture
- Keep the reference interface in shared NKS shell, common presentational components, and individual TanStack content routes so navigation and styling remain consistent.
- Define reference styling and semantic colors in src/styles.css, using the shared Button variants for controls to preserve a single design system.
- Treat employee data and form actions as frontend-only mock-up state until a connected service is explicitly requested; never imply these actions persist remotely.
