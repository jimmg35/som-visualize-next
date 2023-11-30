'use client'

import React from 'react'
import SideBar from '../components/SideBar'
import LocaleProvider from '../i18n'
import StatusProvider from '../status'
import ThemeProvider from '../theme'

interface IRootEntry {
  children: React.ReactNode
}

const ClientBody = ({ children }: IRootEntry) => {
  return (
    <StatusProvider>
      <ThemeProvider>
        <LocaleProvider>
          <SideBar>{children}</SideBar>
        </LocaleProvider>
      </ThemeProvider>
    </StatusProvider>
  )
}

export default ClientBody
