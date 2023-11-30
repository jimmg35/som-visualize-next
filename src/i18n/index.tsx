'use client'

import React, { createContext, useEffect, useState } from 'react'
import { useCookies } from 'next-client-cookies'
import langEn from './en'
import langZh from './zh'

export type Locale = 'en' | 'zh'

export interface ILocalePackage {
  schema: Locale
  side: {
    home: string
    appraisal: string
    mansion: string
    store: string
    park: string
    comparison: string
    income: string
    monitor: string
    stream: string
    setting: string
    users: string
  }
  notfound: {
    condition: string
    statement: string
    backHome: string
    reload: string
  }
  home: {
    welcome: string
    start: string
    docs: string
  }
  mansion: {
    title: string
    description: string
    tabManual: string
    tabAuto: string
    manual: {
      county: string
      countyPlaceholder: string
      buildingPurpose: string
      buildingPurposePlaceholder: string
      material: string
      materialPlaceholder: string
      buildingArea: string
      landArea: string
      groundLevel: string
      age: string
      price: string
      extendYears: string
      transactionTime: string
      normalPlaceholder: string
      addPrice: string
      calculate: string
    }
    result: {
      title: string
      description: string
      constBudgetInterval: string
      designBudgetInterval: string
      adBudgetInterval: string
      manageBudgetInterval: string
      taxBudgetInterval: string
      totalBudgetInterval: string
      buildingCostInterval: string
      depreciatedBuildingCostInterval: string
      landCostInterval: string
      pureLandPriceInterval: string
      share: string
      download: string
    }
  }
  utility: {
    countySelector: {
      taipei: string
      keelung: string
      newtaipei: string
      taoyuan: string
      hsinchuCounty: string
      hsinchuCity: string
      miaoli: string
      taichung: string
      changhua: string
      nantou: string
      yunlin: string
      chiayiCounty: string
      chiayiCity: string
      tainan: string
      kaohsiung: string
      pingtung: string
      yilan: string
      hualien: string
      taitung: string
      penghu: string
      kinmen: string
      lienchiang: string
    }
    purposeSelector: {
      resident: string
      office: string
      store: string
      factory: string
    }
  }
  material: {
    materialSelector: {
      concrete: string
      brick: string
      steel: string
    }
  }
}

const localeBundle = {
  en: langEn,
  zh: langZh
}

export const useLocale = () => {
  const cookies = useCookies()
  const [locale, setlocale] = useState<Locale>('en')
  const [t, sett] = useState<ILocalePackage>(localeBundle['en'])

  const pathLocaleBundle: { [key: string]: string } = {
    home: t.side.home,
    appraisal: t.side.appraisal,
    mansion: t.side.mansion,
    store: t.side.store,
    park: t.side.park,
    comparison: t.side.comparison,
    income: t.side.income,
    monitor: t.side.monitor,
    stream: t.side.stream,
    setting: t.side.setting,
    users: t.side.users
  }

  const switchLocale = (locale: Locale) => {
    setlocale(locale)
    sett(localeBundle[locale])
    cookies.set('locale', locale)
  }

  useEffect(() => {
    const cookieLocale = cookies.get('locale')
    if (!cookieLocale) {
      const userLanguage = navigator.language
      if (userLanguage === 'en-US') {
        cookies.set('locale', 'en')
        switchLocale('en')
        return
      }
      if (userLanguage === 'zh-TW') {
        cookies.set('locale', 'zh')
        switchLocale('zh')
        return
      }
      switchLocale('en')
      cookies.set('locale', 'en')
      return
    }
    if (cookieLocale === 'en' || cookieLocale === 'zh')
      switchLocale(cookieLocale)
  }, [])

  return { t, locale, pathLocaleBundle, switchLocale }
}

interface ILocaleContext {
  t: ILocalePackage
  locale: Locale
  pathLocaleBundle: { [key: string]: string }
  switchLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: langEn,
  locale: 'en',
  pathLocaleBundle: {},
  switchLocale: () => {}
})

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const { t, locale, pathLocaleBundle, switchLocale } = useLocale()

  return (
    <LocaleContext.Provider
      value={{
        t,
        locale,
        pathLocaleBundle,
        switchLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
