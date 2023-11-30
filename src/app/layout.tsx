import ClientBody from '@/containers/client-layout'
import React from 'react'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import ClientCookiesProvider from '../cookie'
import { Providers } from '../store/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface IRootEntry {
  children: React.ReactNode
}

const RootEntry = ({ children }: IRootEntry) => {
  return (
    <html lang="en">
      <head>
        <title>{`視覺化`}</title>
        <link
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/logo-dark.svg`}
          rel="icon"
          media="(prefers-color-scheme: light)"
        />

        <link
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/logo-light.svg`}
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      <Providers>
        <RootEntry>{children}</RootEntry>
      </Providers>
    </ClientCookiesProvider>
  )
}

export default RootLayout
