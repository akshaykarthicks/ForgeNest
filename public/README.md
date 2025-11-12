# Public Assets

This folder contains static assets for the ForgeNest documentation site.

## Adding Images

To add images to the documentation:

1. Place your image files in this `public` folder
2. Reference them in your MDX or TSX files using `/filename.png`

Example:
```tsx
<Image src="/image.png" alt="Description" width={800} height={600} />
```

## Recommended Images

- `hero-image.png` - Main hero section image
- `feature-1.png` - Feature showcase image
- `feature-2.png` - Challenge friends feature
- `feature-3.png` - Analytics dashboard
- `logo.png` - Site logo

## Image Guidelines

- Use optimized images (WebP format recommended)
- Keep file sizes under 500KB for better performance
- Use descriptive filenames
- Include alt text for accessibility
