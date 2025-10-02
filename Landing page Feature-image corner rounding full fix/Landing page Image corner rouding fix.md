# Feature Card Image Styling Rules

## Overview
This document outlines the styling rules for feature card images in both single and multi-image (carousel) views, across mobile and desktop breakpoints.

## Mobile View (< 768px)

### Common Container Structure
Both single and multi-image views share the same mobile container structure:
```jsx
<div className="md:hidden">
  <div className="relative w-full max-w-[280px] mx-auto">
    <div className="overflow-hidden rounded-2xl">
      {/* Image goes here */}
    </div>
  </div>
</div>
```

### Mobile Image Properties
- Width: 280px
- Height: 560px
- Classes: `w-full h-auto object-contain`
- Container rounding: `rounded-2xl`
- Max width constraint: `max-w-[280px]`
- Centering: `mx-auto`

### Mobile-Specific Implementation

#### Single Image
```jsx
<div className="md:hidden">
  <div className="relative w-full max-w-[280px] mx-auto">
    <div className="overflow-hidden rounded-2xl">
      <Image
        src={feature.expandedContent.images[0]}
        alt={`${feature.title} screenshot`}
        width={280}
        height={560}
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</div>
```

#### Carousel Images
```jsx
<div className="md:hidden">
  <div className="relative w-full max-w-[280px] mx-auto">
    <div className="overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, imgIndex) => (
          <div key={imgIndex} className="w-full flex-shrink-0">
            <Image
              src={img}
              alt={`${feature.title} screenshot ${imgIndex + 1}`}
              width={280}
              height={560}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
```

## Desktop View (≥ 768px)

### Common Properties
- Image dimensions: 240x480 pixels
- Fixed display height: 480px
- Border radius: 24px
- Aspect ratio preservation: `object-contain`

### Desktop-Specific Implementation

#### Single Image
```jsx
<div className="hidden md:flex justify-center">
  <Image
    src={feature.expandedContent.images[0]}
    alt={`${feature.title} screenshot`}
    width={240}
    height={480}
    className="w-auto h-[480px] object-contain rounded-[24px]"
  />
</div>
```

#### Carousel Images
```jsx
<div className="hidden md:block">
  <div className="flex transition-transform duration-500 ease-in-out">
    {images.map((img, imgIndex) => (
      <div key={imgIndex} className="min-w-full flex-shrink-0">
        <div className="overflow-hidden flex justify-center">
          <Image
            src={img}
            alt={`${feature.title} screenshot ${imgIndex + 1}`}
            width={240}
            height={480}
            className="w-auto h-[480px] object-contain rounded-[24px]"
          />
        </div>
      </div>
    ))}
  </div>
</div>
```

## Key Implementation Notes

1. **Mobile-Desktop Switching**
   - Mobile view: `md:hidden`
   - Desktop view: `hidden md:block` or `hidden md:flex`

2. **Rounding Strategy**
   - Mobile: Rounding applied to container (`rounded-2xl`)
   - Desktop: Rounding applied directly to image (`rounded-[24px]`)

3. **Image Sizing Strategy**
   - Mobile: Full width within container
   - Desktop: Fixed height with auto-width

4. **Centering Approach**
   - Mobile: Container-based (`mx-auto`)
   - Desktop: Flex-based (`justify-center`)

5. **Overflow Handling**
   - Mobile: Managed by container
   - Desktop: Managed by image component

## Important Considerations

1. **Responsive Breakpoint**
   - All mobile/desktop switches occur at the `md` breakpoint (768px)

2. **Image Quality**
   - Uses Next.js Image component for optimal loading
   - Maintains aspect ratio using `object-contain`

3. **Performance**
   - Separate mobile/desktop views prevent unnecessary style calculations
   - Efficient carousel transitions using transform

4. **Accessibility**
   - All images include descriptive alt text
   - Maintains proper aspect ratios across all views 