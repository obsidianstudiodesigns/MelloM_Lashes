# MelloM Lashes & Beauty Studio — Web Presence

A bespoke, luxury web application engineered for **Mamello Molise** (MelloM Lashes & Beauty) by **Obsidian Studio Designs**.

## Live Deployment to GitHub Pages

The repository has been configured with `base: './'` in `vite.config.ts`, making it completely ready for GitHub Pages hosting at `https://obsidianstudiodesigns.github.io/MelloM_Lashes/`.

### Quick Auto-Build & Deploy Steps:

1. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/obsidianstudiodesigns/MelloM_Lashes.git
   git push -u origin main
   ```

2. **Enable GitHub Actions Auto-Build in GitHub Settings:**
   - On GitHub, go to your repository: `https://github.com/obsidianstudiodesigns/MelloM_Lashes`
   - Click **Settings** (top right tab) &gt; **Pages** (in the left sidebar)
   - Under **Build and deployment** &gt; **Source**, change from *"Deploy from a branch"* to **"GitHub Actions"**
   - That's it! GitHub Actions will immediately detect `.github/workflows/deploy.yml`, trigger the automated build, and publish the site live at `https://obsidianstudiodesigns.github.io/MelloM_Lashes/`.
   - Any future `git push` to `main` will automatically build and re-deploy the site!

## Features Included:
- **Responsive Dual-Hero**: Renders vertical 9:16 mobile composition on phones and wide 16:9 cinematic beauty canvas on desktops.
- **Interactive 3D Tilt Cards & Before/After Slider**: High-fashion tactile interactions.
- **Weekly Wig Drop-Off Logistics Notice**: Direct callout for Monday-Wednesday drop-offs, treatments, and Saturday installs.
- **House Call Estimator**: Automatic transparent distance fees for Town (+R120) and Locations/Townships (+R180).
- **1-Click WhatsApp Booking Dispatcher**: Pre-populates all client details, selected glam services, travel fees, and required 50% deposit directly to `067 641 0352`.
- **Client Pitch Mode**: Explains why a dedicated website saves 10+ hours/week and captures high-paying bridal bookings.
