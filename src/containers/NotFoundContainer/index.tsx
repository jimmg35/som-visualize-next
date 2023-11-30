'use client'

import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../i18n'
import { ThemeContext } from '../../theme'

const NotFoundContainer = () => {
  const { t } = useContext(LocaleContext)
  const { themeMode } = useContext(ThemeContext)
  return (
    <main className="flex flex-col items-center justify-center">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/maintenance.svg`}
        className={classNames({
          ['h-40']: true,
          ['svg-light']: themeMode === 'dark',
          ['svg-dark']: themeMode === 'light'
        })}
      />
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center  mb-4">
        {t.notfound.condition}
      </h1>
      <p className="text-center  text-lg md:text-xl lg:text-2xl mb-8">
        {t.notfound.statement}
      </p>
      <div className="flex space-x-4">
        <a className="btn btn-primary">{t.notfound.backHome}</a>
        <a className="btn btn-outline">{t.notfound.reload}</a>
      </div>
    </main>
  )
}

export default NotFoundContainer
