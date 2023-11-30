'use client'

import { HomeModernIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import Tabs from '../../components/Tabs'
import TabLabel from '../../components/Tabs/TabLabel'
import TabPanel from '../../components/Tabs/TabPanel'
import Title from '../../components/Title'
import { LocaleContext } from '../../i18n'
import Auto from './Auto'
import Manual from './Manual'
import { MansionContext } from './Provider'
import Result from './Result'

const MansionContainer = () => {
  const { t } = useContext(LocaleContext)
  const { tab, onTabChange, onResultChange } = useContext(MansionContext)

  return (
    <main>
      <div className="flex flex-col gap-4 select-none">
        <Title titlename={t.mansion.title} description={t.mansion.description}>
          <HomeModernIcon className="h-16 w-16" />
        </Title>

        <div className="divider"></div>

        <Tabs
          tab={tab}
          onChange={(tab) => {
            onResultChange(undefined)
            onTabChange(tab)
          }}
        >
          <TabLabel value={0}>{t.mansion.tabManual}</TabLabel>
          <TabLabel value={1}>{t.mansion.tabAuto}</TabLabel>
          <TabPanel value={0}>
            <Manual />
          </TabPanel>
          <TabPanel value={1}>
            <Auto />
          </TabPanel>
        </Tabs>

        <Result />
      </div>
    </main>
  )
}

export default MansionContainer
