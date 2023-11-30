import {
  ArrowDownTrayIcon,
  CurrencyDollarIcon,
  ShareIcon
} from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import classNames from 'classnames'
import { LocaleContext } from '../../../i18n'
import { MansionContext } from '../Provider'

const formatter = new Intl.NumberFormat('zh-TW', {
  style: 'currency',
  currency: 'TWD',
  currencyDisplay: 'code'
})

const Result = () => {
  const { result } = useContext(MansionContext)
  const { t } = useContext(LocaleContext)

  const Heading = () => (
    <div className=" pt-4 ">
      <h3 className="text-lg font-semibold leading-7 flex items-center gap-2">
        <CurrencyDollarIcon className="w-8 h-8" />
        {t.mansion.result.title}
      </h3>
      <p className="mt-1 max-w-2xl text-sm leading-6">
        {t.mansion.result.description}
      </p>
    </div>
  )

  const Content = () =>
    result && (
      <div>
        <dl>
          <div className=" pb-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.constBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.constBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.constBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.designBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.designBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.designBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.adBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.adBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.adBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.manageBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.manageBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.manageBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.taxBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.taxBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.taxBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.totalBudgetInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.totalBudgetInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.totalBudgetInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.buildingCostInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>{formatter.format(result.buildingCostInterval.min)}</span>
              <span>-</span>
              <span>{formatter.format(result.buildingCostInterval.max)}</span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.depreciatedBuildingCostInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>
                {formatter.format(result.depreciatedBuildingCostInterval.min)}
              </span>
              <span>-</span>
              <span>
                {formatter.format(result.depreciatedBuildingCostInterval.max)}
              </span>
            </dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.landCostInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>
                {formatter.format(result.reversedLandCostInterval.min)}
              </span>
              <span>-</span>
              <span>
                {formatter.format(result.reversedLandCostInterval.max)}
              </span>
            </dd>
          </div>
          <div className=" pt-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
            <dt className="text-sm font-medium leading-6">
              {t.mansion.result.pureLandPriceInterval}
            </dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 flex gap-2">
              <span>
                {formatter.format(result.reversedPureLandPriceInterval.min)}
              </span>
              <span>-</span>
              <span>
                {formatter.format(result.reversedPureLandPriceInterval.max)}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    )

  const Action = () => (
    <div className="pb-4 flex flex-row-reverse gap-4 ">
      <a className="btn btn-primary btn-sm text-white btn-disabled">
        <ArrowDownTrayIcon className="w-4 h-4" />
        {t.mansion.result.download}
      </a>
      <p className="btn btn-primary btn-outline btn-sm text-white btn-disabled">
        <ShareIcon className="w-5 h-5" />
        {t.mansion.result.share}
      </p>
    </div>
  )

  return (
    <>
      <div
        className={classNames({
          divider: true,
          hidden: result === undefined
        })}
      ></div>
      <div
        className={classNames({
          'w-full min-h-[500px] h-fit p-4 lg:p-8 border border-primary bg-base-200 rounded-md':
            true,
          hidden: result === undefined
        })}
      >
        <div className="flex flex-col gap-4 px-4 sm:px-0">
          <Heading />
          <div className="divider"></div>
          <Content />
          <div className="divider"></div>
          <Action />
        </div>
      </div>
    </>
  )
}

export default Result
