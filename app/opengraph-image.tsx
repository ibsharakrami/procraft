import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ProCraft - Creative Digital Growth Agency in Dubai'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #10367D 0%, #0a1f4a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Brand name */}
          <h1
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            ProCraft
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 36,
              color: '#74B4D9',
              marginBottom: 40,
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Crafting Growth Through Strategy & Design
          </p>

          {/* Location badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(116, 180, 217, 0.15)',
              borderRadius: 50,
              padding: '16px 32px',
              border: '2px solid #74B4D9',
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: '#74B4D9',
                fontWeight: 600,
              }}
            >
              Dubai, UAE
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #74B4D9 0%, #10367D 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
