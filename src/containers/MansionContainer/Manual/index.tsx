import React, { useContext } from 'react'
import NumberField from '../../../components/TextField/NumberField'
import StringField from '../../../components/TextField/StringField'
import { LocaleContext } from '../../../i18n'
import { StatusContext } from '../../../status'
import { MansionContext } from '../Provider'

export async function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

const Manual = () => {
  const {
    buildingArea,
    groundFloor,
    age,
    price,
    extendYears,
    countyCode,
    buildingPurpose,
    material,
    transactionDate,
    onBuildingAreaChange,
    onGroundFloorChange,
    onAgeChange,
    onPriceChange,
    onExtendYearsChange,
    onBuildingPurposeChange,
    onMaterialChange,
    onCountyCodeChange,
    onTransactionDateChange,
    onSteelChargeChange,
    onCalculate
  } = useContext(MansionContext)
  const { onStatusChange } = useContext(StatusContext)
  const { t } = useContext(LocaleContext)

  const handleSubmit = async () => {
    onStatusChange('loading', undefined)
    await delay(2)
    const response = await onCalculate()
    onStatusChange(response.status, response.msg)
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text-alt">{t.mansion.manual.county}</span>
        </label>
        <select
          className="select select-sm select-bordered w-full"
          value={countyCode}
          onChange={(e) => {
            onCountyCodeChange(e.target.value)
          }}
        >
          <option value={''} disabled>
            {t.mansion.manual.countyPlaceholder}
          </option>

          <option value={'68000'}>{t.utility.countySelector.taoyuan}</option>
          <option value={'67000'}>{t.utility.countySelector.tainan}</option>
          <option value={'66000'}>{t.utility.countySelector.taichung}</option>
          <option value={'65000'}>{t.utility.countySelector.newtaipei}</option>
          <option value={'64000'}>{t.utility.countySelector.kaohsiung}</option>
          <option value={'63000'}>{t.utility.countySelector.taipei}</option>
          <option value={'10020'}>{t.utility.countySelector.chiayiCity}</option>
          <option value={'10018'}>
            {t.utility.countySelector.hsinchuCity}
          </option>
          <option value={'10017'}>{t.utility.countySelector.keelung}</option>
          <option value={'10016'}>{t.utility.countySelector.penghu}</option>
          <option value={'10015'}>{t.utility.countySelector.hualien}</option>
          <option value={'10014'}>{t.utility.countySelector.taitung}</option>
          <option value={'10013'}>{t.utility.countySelector.pingtung}</option>
          <option value={'10010'}>
            {t.utility.countySelector.chiayiCounty}
          </option>
          <option value={'10009'}>{t.utility.countySelector.yunlin}</option>
          <option value={'10008'}>{t.utility.countySelector.nantou}</option>
          <option value={'10007'}>{t.utility.countySelector.changhua}</option>
          <option value={'10005'}>{t.utility.countySelector.miaoli}</option>
          <option value={'10004'}>
            {t.utility.countySelector.hsinchuCounty}
          </option>
          <option value={'10002'}>{t.utility.countySelector.yilan}</option>
          <option value={'09020'}>{t.utility.countySelector.kinmen}</option>
          <option value={'09007'}>{t.utility.countySelector.lienchiang}</option>
        </select>
      </div>

      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text-alt">
            {t.mansion.manual.buildingPurpose}
          </span>
        </label>
        <select
          className="select select-sm select-bordered w-full"
          value={buildingPurpose}
          onChange={(e) => {
            if (
              e.target.value === 'resident' ||
              e.target.value === 'office' ||
              e.target.value === 'store' ||
              e.target.value === 'factory'
            )
              onBuildingPurposeChange(e.target.value)
          }}
        >
          <option value={''} disabled>
            {t.mansion.manual.buildingPurposePlaceholder}
          </option>

          <option value={'resident'}>
            {t.utility.purposeSelector.resident}
          </option>
          <option value={'office'}>{t.utility.purposeSelector.office}</option>
          <option value={'store'}>{t.utility.purposeSelector.store}</option>
          <option value={'factory'}>{t.utility.purposeSelector.factory}</option>
        </select>
      </div>

      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text-alt">{t.mansion.manual.material}</span>
        </label>
        <select
          className="select select-sm select-bordered w-full"
          value={material}
          onChange={(e) => {
            if (
              e.target.value === 'concrete' ||
              e.target.value === 'brick' ||
              e.target.value === 'steel'
            )
              onMaterialChange(e.target.value)
          }}
        >
          <option value={''} disabled>
            {t.mansion.manual.materialPlaceholder}
          </option>
          <option value={'concrete'}>
            {t.material.materialSelector.concrete}
          </option>
          <option value={'brick'}>{t.material.materialSelector.brick}</option>
          <option value={'steel'}>{t.material.materialSelector.steel}</option>
        </select>
      </div>

      <NumberField
        title={t.mansion.manual.buildingArea}
        value={buildingArea}
        onChange={onBuildingAreaChange}
      />
      {/* <NumberField
        title={t.mansion.manual.landArea}
        value={landArea}
        onChange={onLandAreaChange}
      /> */}
      <NumberField
        title={t.mansion.manual.groundLevel}
        value={groundFloor}
        onChange={onGroundFloorChange}
      />
      <NumberField
        title={t.mansion.manual.age}
        value={age}
        onChange={onAgeChange}
      />
      <NumberField
        title={t.mansion.manual.price}
        value={price}
        onChange={onPriceChange}
      />
      <NumberField
        title={t.mansion.manual.extendYears}
        value={extendYears}
        onChange={onExtendYearsChange}
      />
      <StringField
        title={t.mansion.manual.transactionTime}
        value={transactionDate}
        placeholder="YYYY-MM-DD"
        onChange={onTransactionDateChange}
      />

      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(event) => {
              onSteelChargeChange(event.target.checked)
            }}
          />
          <span className="label-text">{t.mansion.manual.addPrice}</span>
        </label>
      </div>
      <button
        className="btn btn-primary btn-block text-white"
        onClick={() => {
          handleSubmit()
        }}
      >
        {t.mansion.manual.calculate}
      </button>
    </div>
  )
}

export default Manual
