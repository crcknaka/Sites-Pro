# Open Graph Image for Sites Pro

## Image Requirements
- **Size**: 1200x630 pixels (Facebook/Twitter recommended size)
- **Format**: JPG or PNG
- **File name**: og-image.jpg
- **Location**: /public/og-image.jpg

## Design Recommendations

### Content to Include:
1. **Sites Pro Logo** (centered or top-left)
2. **Main Headline**: "Digital Done Right"
3. **Tagline**: "Websites • Applications • AI & Automations"
4. **Website**: sitespro.org
5. **Background**: Use brand colors (blue #0066FF and green #00D4AA gradient)

### Style Guidelines:
- Clean, modern design
- High contrast for readability
- Brand colors: 
  - Primary (Blue): #0066FF
  - Secondary (Green): #00D4AA
- Typography: Bold, sans-serif fonts
- Leave safe margins (60px on all sides)

## Quick Creation Options:

### Option 1: Use Figma/Canva
1. Create 1200x630px canvas
2. Add gradient background (blue to green)
3. Add logo (centered, large)
4. Add text: "Digital Done Right"
5. Add tagline below
6. Export as JPG

### Option 2: Use Online OG Image Generator
- https://ogimage.gallery/
- https://www.opengraph.xyz/
- https://og-playground.vercel.app/

### Option 3: AI Generation
Use AI image generators like:
- Midjourney
- DALL-E
- Stable Diffusion

Prompt: "Modern minimalist web design agency banner, gradient from blue #0066FF to green #00D4AA, text 'Digital Done Right', professional, clean, 1200x630"

## Testing Your OG Image

After creating the image:

1. Place it in `/public/og-image.jpg`
2. Deploy to Vercel
3. Test with:
   - https://www.opengraph.xyz/url/https://sitespro.org
   - https://cards-dev.twitter.com/validator
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

## Example Layout:

```
┌──────────────────────────────────────────────┐
│                                              │
│            [SITES PRO LOGO]                  │
│                                              │
│         Digital Done Right                   │
│                                              │
│   Websites • Applications • AI & Automations │
│                                              │
│              sitespro.org                    │
│                                              │
└──────────────────────────────────────────────┘
```

