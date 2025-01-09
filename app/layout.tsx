// app/layout.tsx
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

// app/page.tsx
import Portfolio from '../components/ui/Portfolio'

export default function Home() {
  return <Portfolio />
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;