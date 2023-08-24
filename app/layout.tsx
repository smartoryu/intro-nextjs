import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'App' },
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex items-center">
              {links.map(({ href, label }) => (
                <li key={href} className="px-4 m-4 text-2xl">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="px-4 mx-4">{children}</div>
      </body>
    </html>
  )
}
