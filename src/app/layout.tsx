import '../styles/globals.css'

import type { Metadata } from 'next'

import { fontRoboto } from '~/libs/fonts'

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
        <>{children}</>
      </body>
    </html>
  )
}

export default RootLayout
