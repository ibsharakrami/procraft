# Video Optimization Guide for ProCraft

## Current Status

**Hero Video**: `/public/bg-video-herosection-homepage.mp4`
- **Current Size**: ~9.6 MB (estimated)
- **Target Size**: <2 MB
- **Priority**: **CRITICAL** for Core Web Vitals (LCP - Largest Contentful Paint)

## Why Video Compression Matters for SEO

### Impact on Core Web Vitals
- **LCP (Largest Contentful Paint)**: Large video files delay page rendering
- **Target**: LCP < 2.5 seconds for good user experience
- **Current Impact**: 9.6MB video on 4G = ~6-8 seconds load time
- **After Compression**: <2MB video on 4G = ~1-2 seconds load time

### SEO Benefits
- Faster page load = better Google rankings
- Lower bounce rates
- Better mobile experience (critical for Dubai market)
- Reduced bandwidth costs
- Improved Core Web Vitals score

## Compression Methods

### Method 1: Online Tools (Easiest - No Installation)

#### Option A: CloudConvert
1. Visit: https://cloudconvert.com/mp4-converter
2. Upload your video
3. Click "Settings" gear icon
4. Configure:
   - **Video Codec**: H.264
   - **Quality**: 23-28 (higher = smaller file)
   - **Resolution**: 1920x1080 (or 1280x720 for even smaller)
   - **Frame Rate**: 24 fps
   - **Audio**: Remove (video is muted anyway)
5. Convert and download
6. **Target**: Achieve ~1.5-2MB file size

#### Option B: FreeConvert
1. Visit: https://www.freeconvert.com/video-compressor
2. Upload video
3. Select compression level: "High Compression"
4. Advanced settings:
   - Remove audio track
   - Set quality: 23-28 CRF
   - Resolution: 1920x1080 or 1280x720
5. Compress and download

### Method 2: FFmpeg (Best Quality/Size Ratio - Requires Installation)

#### Installation

**macOS:**
```bash
brew install ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install ffmpeg
```

**Windows:**
1. Download from: https://ffmpeg.org/download.html
2. Extract and add to PATH

#### Compression Commands

**Option 1: High Quality, Smaller Size (~2MB)**
```bash
ffmpeg -i bg-video-herosection-homepage.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1920:1080" \
  -an \
  -movflags +faststart \
  bg-video-herosection-homepage-compressed.mp4
```

**Option 2: Ultra Compressed (<1.5MB)**
```bash
ffmpeg -i bg-video-herosection-homepage.mp4 \
  -vcodec libx264 \
  -crf 32 \
  -preset slow \
  -vf "scale=1280:720" \
  -r 24 \
  -an \
  -movflags +faststart \
  bg-video-herosection-homepage-compressed.mp4
```

**Option 3: 720p with H.265 (Best Compression)**
```bash
ffmpeg -i bg-video-herosection-homepage.mp4 \
  -vcodec libx265 \
  -crf 28 \
  -preset medium \
  -vf "scale=1280:720" \
  -r 24 \
  -an \
  -movflags +faststart \
  -tag:v hvc1 \
  bg-video-herosection-homepage-compressed.mp4
```

#### Parameter Explanations

- **-vcodec libx264**: Modern video codec (H.264)
- **-vcodec libx265**: Even better compression (H.265/HEVC)
- **-crf 23-32**: Quality (lower = better quality, larger file)
  - 23 = high quality (~3MB)
  - 28 = balanced (~2MB)
  - 32 = aggressive compression (~1MB)
- **-preset slow**: Better compression (takes longer)
- **-vf "scale=1920:1080"**: Set resolution
- **-r 24**: Frame rate (24 fps = cinematic, smaller file)
- **-an**: Remove audio (not needed for background video)
- **-movflags +faststart**: Enable progressive download
- **-tag:v hvc1**: Apple compatibility for H.265

### Method 3: HandBrake (GUI Tool - User-Friendly)

1. Download: https://handbrake.fr/
2. Install and open HandBrake
3. Load your video
4. **Preset**: Select "Web/Email" → "Gmail Large 3 Minutes 720p30"
5. **Video Settings**:
   - Video Codec: H.264 (x264)
   - Quality (RF): 26-30
   - Framerate: 24 fps constant
6. **Dimensions**: 1920x1080 or 1280x720
7. **Audio**: Remove all audio tracks
8. **Optimize**: Check "Web Optimized"
9. Start encoding

## Implementation Steps

### Step 1: Compress the Video

Choose one method above and compress your video to <2MB.

### Step 2: Create Poster Image

Extract a frame for instant preview while video loads:

```bash
ffmpeg -i bg-video-herosection-homepage-compressed.mp4 \
  -ss 00:00:01 \
  -vframes 1 \
  -q:v 2 \
  hero-video-poster.jpg
```

Then optimize the JPG:
```bash
# macOS/Linux
convert hero-video-poster.jpg -quality 75 -resize 1920x1080 hero-video-poster.jpg

# Or use online: https://tinyjpg.com
```

### Step 3: Replace Files

```bash
# Backup original
mv public/bg-video-herosection-homepage.mp4 public/bg-video-herosection-homepage-original.mp4

# Add compressed version
mv bg-video-herosection-homepage-compressed.mp4 public/bg-video-herosection-homepage.mp4

# Add poster image
mv hero-video-poster.jpg public/images/hero-video-poster.jpg
```

### Step 4: Verify Implementation

The video tag in `app/page.js` is already optimized:

```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  poster="/images/hero-video-poster.jpg"  // ✅ Already configured
  className="absolute inset-0 w-full h-full object-cover"
  aria-label="ProCraft creative digital agency showreel"
  style={{ contentVisibility: 'auto' }}
>
  <source src="/bg-video-herosection-homepage.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Advanced Optimizations

### Option 1: Adaptive Streaming (Future Enhancement)

Create multiple quality versions for different connection speeds:

```bash
# Mobile (360p, ~500KB)
ffmpeg -i original.mp4 -vf scale=640:360 -crf 30 -r 24 -an -movflags +faststart video-360p.mp4

# Tablet (720p, ~1.5MB)
ffmpeg -i original.mp4 -vf scale=1280:720 -crf 28 -r 24 -an -movflags +faststart video-720p.mp4

# Desktop (1080p, ~2MB)
ffmpeg -i original.mp4 -vf scale=1920:1080 -crf 26 -r 24 -an -movflags +faststart video-1080p.mp4
```

Then implement JavaScript detection:
```jsx
const videoSrc = window.innerWidth < 768
  ? '/video-360p.mp4'
  : window.innerWidth < 1280
    ? '/video-720p.mp4'
    : '/video-1080p.mp4';
```

### Option 2: WebM Format (Better Compression)

```bash
ffmpeg -i bg-video-herosection-homepage.mp4 \
  -c:v libvpx-vp9 \
  -crf 32 \
  -b:v 0 \
  -vf scale=1920:1080 \
  -r 24 \
  -an \
  bg-video-herosection-homepage.webm
```

Update video tag:
```jsx
<video ...>
  <source src="/bg-video-herosection-homepage.webm" type="video/webm" />
  <source src="/bg-video-herosection-homepage.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Option 3: Lazy Load Video (Mobile-First)

Only load video on desktop, show static image on mobile:

```jsx
{typeof window !== 'undefined' && window.innerWidth > 768 ? (
  <video autoPlay loop muted playsInline ... />
) : (
  <img src="/images/hero-static-bg.jpg" alt="ProCraft hero background" />
)}
```

## Quality Testing Checklist

After compression, verify:

- [ ] **File Size**: <2MB (ideally 1-1.5MB)
- [ ] **Visual Quality**: No obvious artifacts or pixelation
- [ ] **Smooth Playback**: No stuttering on mobile
- [ ] **Colors**: Maintain brand colors (#10367D blue)
- [ ] **Load Time**: Test on 3G/4G connection
- [ ] **Poster Image**: Loads instantly, matches first frame
- [ ] **Core Web Vitals**: LCP < 2.5s (test with PageSpeed Insights)

## Testing Tools

### Performance Testing
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **WebPageTest**: https://www.webpagetest.org/
3. **Chrome DevTools**: Network tab → Throttle to "Slow 3G"

### Expected Results After Compression

**Before (9.6MB):**
- LCP: 6-8 seconds (3G), 3-4 seconds (4G)
- Performance Score: 40-60/100
- User Experience: Poor

**After (<2MB):**
- LCP: 1.5-2.5 seconds (3G), <1.5 seconds (4G)
- Performance Score: 85-95/100
- User Experience: Excellent

## Troubleshooting

### Video Looks Too Blurry

- Reduce CRF value (28 → 26 → 24)
- Increase resolution (720p → 1080p)
- Use H.265 codec for better quality at same size

### File Still Too Large

- Increase CRF value (28 → 30 → 32)
- Reduce resolution (1080p → 720p)
- Lower frame rate (30fps → 24fps)
- Consider WebM format
- Shorten video duration

### Video Won't Play on iOS

- Ensure `-tag:v hvc1` for H.265
- Use H.264 instead of H.265
- Add `-pix_fmt yuv420p` for compatibility

### Compression Taking Too Long

- Change preset from "slow" to "medium" or "fast"
- Use online tools instead of FFmpeg
- Reduce resolution before compressing

## Recommended Workflow

**Quick Win (5 minutes):**
1. Use CloudConvert or FreeConvert
2. Select "High Compression"
3. Remove audio
4. Download and replace

**Best Quality (15 minutes):**
1. Install FFmpeg
2. Run Option 1 command above (CRF 28, 1080p)
3. Extract poster frame
4. Test file size and quality
5. Adjust CRF if needed

**Production-Ready (30 minutes):**
1. Create multiple quality versions (360p, 720p, 1080p)
2. Generate WebM versions
3. Create optimized poster images
4. Implement adaptive loading
5. Test on multiple devices/connections

## Priority Action Items

✅ **Immediate** (Week 1):
- Compress video to <2MB using any method
- Add to production

🔄 **Short-term** (Month 1):
- Create adaptive versions for mobile/desktop
- Test Core Web Vitals improvement

📅 **Long-term** (Quarter 1):
- Implement WebM format
- Add lazy loading for mobile
- Consider replacing with animated CSS gradient (0 KB!)

## Additional Resources

- **FFmpeg Documentation**: https://ffmpeg.org/documentation.html
- **Video Compression Guide**: https://trac.ffmpeg.org/wiki/Encode/H.264
- **Core Web Vitals**: https://web.dev/vitals/
- **Video Optimization**: https://web.dev/fast/#optimize-your-videos

## Questions?

If video compression impacts visual quality too much, consider:
1. Using a shorter loop (reduces file size)
2. Replacing with animated CSS gradient background
3. Using Lottie animation instead
4. Static image with subtle CSS parallax effect

All of these alternatives would result in **0 MB** video file while maintaining visual appeal!
