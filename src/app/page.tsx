'use client'

import HomeContainer from '@/containers/HomeContainer'
import React from 'react'
import SomProvider from '../containers/HomeContainer/lib/provider'

export default function Home() {
  return (
    <SomProvider>
      <HomeContainer />
    </SomProvider>
  )
}
