'use client'

import React, { useContext } from 'react'
import { ThemeContext } from '../../theme'

interface ISideBar {
  children: React.ReactNode
}

const SideBar = ({ children }: ISideBar) => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <div className="w-screen h-screen" data-theme={themeMode}>
      {children}
    </div>
  )
}

export default SideBar
