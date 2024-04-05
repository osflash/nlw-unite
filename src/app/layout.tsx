import '../styles/globals.css'

import type { Metadata } from 'next'

import { fontRoboto } from '~/libs/fonts'

import { Header } from '~/components/header'

export const metadata: Metadata = {
  title: 'NLW Unite',
  description:
    'Aplicação front-end em React desenvolvida durante o NLW Unite da Rocketseat.'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR" className={fontRoboto.variable} suppressHydrationWarning>
      <body>
        <div className="container flex flex-col gap-5 py-5">
          <Header />

          <>{children}</>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
