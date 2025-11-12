# Adding Images to ForgeNest Documentation

## Required Images

Add these 3 images to the `public` folder:

```
forgedocs/
  public/
    hero-image.png           ← Welcome screen (dark background with ForgeNest logo)
    features-section.png     ← "Everything You Need" section
    challenge-friends.png    ← "Challenge Friends & Build Together" section
```

## Image Specifications

Based on your design mockups:

1. **hero-image.png** (1200x675px recommended)
   - The welcome screen with dark starry background
   - Shows "Welcome To ForgeNest" text
   - Includes avatar icon and call-to-action buttons

2. **features-section.png** (1200x675px recommended)
   - Shows "Everything You Need" heading
   - Displays habit growth calendar visualization
   - Shows feature cards: Goal Setting, Streak Challenges, Analytics Dashboard

3. **challenge-friends.png** (1200x675px recommended)
   - Shows habit challenge cards (meditation, self-love)
   - Displays streak counters and completion badges
   - Shows social features section

### 2. Use Images in Pages

#### In MDX Files (Documentation)

```mdx
![Alt text](/image.png)
```

Or with Next.js Image component:

```mdx
import Image from 'next/image';

<Image src="/image.png" alt="Description" width={800} height={600} />
```

#### In TSX Files (React Components)

```tsx
import Image from 'next/image';

<Image 
  src="/image.png" 
  alt="Description" 
  width={800} 
  height={600}
  className="rounded-lg shadow-lg"
/>
```

### 3. Example: Update Homepage with Your Image

Edit `src/app/(home)/page.tsx`:

```tsx
// Add this in the hero section
<div className="mb-8 flex justify-center">
  <Image 
    src="/image.png" 
    alt="ForgeNest Hero" 
    width={600} 
    height={400}
    className="rounded-2xl shadow-2xl"
  />
</div>
```

### 4. Recommended Image Sizes

- **Hero Image**: 1200x600px
- **Feature Screenshots**: 800x500px
- **Icons/Logos**: 200x200px
- **Thumbnails**: 400x300px

### 5. Image Optimization Tips

- Use WebP format for better compression
- Keep file sizes under 500KB
- Use descriptive filenames (e.g., `habit-tracker-dashboard.png`)
- Always include alt text for accessibility

## Current Theme

The site uses a modern gradient theme with:
- Primary colors: Blue (#667eea) to Purple (#764ba2)
- Dark mode support
- Smooth animations and transitions
- Card-based layouts with hover effects

## Example: Adding a Feature Image

1. Save your image as `public/feature-dashboard.png`

2. Add to documentation:

```mdx
---
title: Dashboard Features
---

# Analytics Dashboard

See your progress at a glance with our comprehensive dashboard.

![Dashboard Screenshot](/feature-dashboard.png)

The dashboard shows:
- Current streaks for all habits
- Completion calendar
- Challenge status
- Achievement badges
```

## Need Help?

- Check `src/app/(home)/page.tsx` for homepage examples
- See `content/docs/*.mdx` for documentation examples
- Visit https://fumadocs.dev/docs/ui/theme for theme customization
