import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#faf9f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 22,
            fontWeight: 400,
            color: '#3D1A08',
            letterSpacing: '0.02em',
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  )
}
