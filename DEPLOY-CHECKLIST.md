# 🚀 Vercel Deployment Checklist

## Pre-Deployment

- [ ] All images are in `public/` folder
  - [ ] `hero-image.png`
  - [ ] `features-section.png`
  - [ ] `challenge-friends.png`

- [ ] Test build locally
  ```bash
  cd forgedocs
  npm run build
  npm run start
  ```

- [ ] Check all pages load correctly
  - [ ] Homepage (/)
  - [ ] Docs index (/docs)
  - [ ] Getting Started (/docs/getting-started)
  - [ ] API Reference (/docs/api-reference)
  - [ ] Challenges (/docs/challenges)
  - [ ] Models (/docs/models)

- [ ] Verify all links work
  - [ ] Internal navigation
  - [ ] External links (Live App)
  - [ ] Card links

## Deployment

### Quick Deploy (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Set root directory to `forgedocs`
   - Click Deploy

### Alternative: CLI Deploy

```bash
cd forgedocs
npm install -g vercel
vercel login
vercel --prod
```

## Post-Deployment

- [ ] Visit your deployed site
- [ ] Test all pages
- [ ] Check images load
- [ ] Test dark/light mode
- [ ] Test mobile view
- [ ] Verify search works
- [ ] Test external links

## Custom Domain (Optional)

- [ ] Add domain in Vercel settings
- [ ] Configure DNS records
- [ ] Wait for SSL certificate

## Environment Variables

No environment variables needed for this project! ✅

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Run `npm run build` locally to test
- Clear Vercel cache and redeploy

**Images not showing?**
- Ensure images are in `public/` folder
- Check file names match exactly (case-sensitive)
- Use `/image.png` not `./image.png`

**404 errors?**
- Check MDX files are in `content/docs/`
- Verify `meta.json` is correct
- Ensure file names match routes

## Success! 🎉

Your ForgeNest documentation is now live!

Share your deployment URL:
- Documentation: `https://your-project.vercel.app`
- Live App: `https://forgenest.vercel.app`
