# Deploying ForgeNest Documentation to Vercel

This guide will help you deploy the ForgeNest documentation site to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Git repository with your code (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the `forgedocs` folder as the root directory

3. **Configure Project**
   - Framework Preset: **Next.js**
   - Root Directory: `forgedocs`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the forgedocs directory**
   ```bash
   cd forgedocs
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - What's your project's name? `forgenest-docs`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and pull requests

## Build Configuration

The project uses these settings (configured in `package.json`):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Troubleshooting

### Build Fails

1. **Check Node version**: Vercel uses Node 18.x by default
2. **Clear cache**: In project settings, go to "General" → "Clear Cache"
3. **Check build logs**: Review the deployment logs for errors

### Images Not Loading

1. Make sure images are in the `public` folder
2. Use relative paths: `/image.png` not `./image.png`
3. Check image file names match exactly (case-sensitive)

### 404 Errors

1. Ensure all MDX files are in `content/docs/`
2. Check `meta.json` configuration
3. Verify file names match the routes

## Post-Deployment

After successful deployment:

1. ✅ Test all pages and links
2. ✅ Verify images load correctly
3. ✅ Check mobile responsiveness
4. ✅ Test dark/light theme switching
5. ✅ Verify search functionality

## Monitoring

Monitor your deployment:
- **Analytics**: Enable in Vercel dashboard
- **Performance**: Check Web Vitals in Vercel
- **Logs**: View real-time logs in the dashboard

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Fumadocs Deployment](https://fumadocs.dev/docs/headless/deployment)

## Quick Commands

```bash
# Development
npm run dev

# Build locally (test before deploying)
npm run build

# Start production server locally
npm run start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

Your ForgeNest documentation will be live at: `https://your-project.vercel.app` 🚀
