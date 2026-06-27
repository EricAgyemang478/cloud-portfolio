# Deployment — first-time setup

One-time wiring to get the pipeline live. After this, every push to `main`
deploys to production and every PR gets a preview URL — you never touch a
dashboard again.

Total cost: **$0**. No credit card required anywhere.

---

## 1. Create the GitHub repo (clean, real-name account)

```bash
# from inside cloud-portfolio/
gh auth login                       # log into your NEW professional account
gh repo create cloud-portfolio --public --source=. --remote=origin --push
```

Or manually: create an empty `cloud-portfolio` repo on GitHub, then:

```bash
git remote add origin https://github.com/<EricAgyemang478>/cloud-portfolio.git
git push -u origin main
```

The first push will trigger the workflow — it will **build successfully but the
deploy step will fail** until the two secrets below exist. That's expected.

## 2. Create a free Cloudflare account

Sign up at <https://dash.cloudflare.com/sign-up>. No card needed for Pages.

## 3. Create the Pages project

Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.

- **Project name:** `cloud-portfolio`
  ⚠️ This must match `--project-name` in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
  (If you want a different name, change it in both places.)
- You can upload the local `dist/` folder once to initialize it, or just create
  the empty project — the pipeline will populate it on the next push.
- Make sure the **production branch** is set to `main`
  (Project → Settings → Builds & deployments).

## 4. Get your two secrets

**Account ID:** Workers & Pages → right-hand sidebar → **Account ID** → copy.

**API token:** My Profile → **API Tokens** → **Create Token** →
use the **"Edit Cloudflare Workers"** template, or create a custom token with:

- Permissions: **Account → Cloudflare Pages → Edit**
- Account Resources: your account

Copy the token now — you can't see it again.

## 5. Add the secrets to GitHub

Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Name                    | Value             |
| ----------------------- | ----------------- |
| `CLOUDFLARE_API_TOKEN`  | the token from §4 |
| `CLOUDFLARE_ACCOUNT_ID` | the account ID    |

Or from the CLI:

```bash
gh secret set CLOUDFLARE_API_TOKEN
gh secret set CLOUDFLARE_ACCOUNT_ID
```

## 6. Ship it

```bash
git commit --allow-empty -m "ci: trigger first deploy"
git push
```

Watch **Actions** → the run goes green → your site is live at
`https://cloud-portfolio.pages.dev`.

## 7. (Optional) Custom domain

Pages project → **Custom domains** → add your domain. Cloudflare provisions the
TLS cert automatically. A `.dev`/`.com` runs ~$10/yr — the only money this
project can cost, and entirely optional.

---

### After it's live — update these placeholders

- `src/data/site.ts` — real email (use a dedicated alias), GitHub + LinkedIn URLs
- `astro.config.mjs` — `site:` → your real URL
- `public/robots.txt` and `README.md` — swap the `.pages.dev` URL and `EricAgyemang478`
