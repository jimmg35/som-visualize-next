import { ILocalePackage } from '..'

const langEn: ILocalePackage = {
  schema: 'en',
  side: {
    home: 'Home',
    appraisal: 'Appraisal',
    mansion: 'Mansion Land',
    store: 'Store Level',
    park: 'Park and Build',
    comparison: 'Comparison',
    income: 'Income',
    monitor: 'Monitor',
    stream: 'Stream',
    setting: 'Setting',
    users: 'Users'
  },
  notfound: {
    condition: 'Site is under maintenance',
    statement: "We're working had to improve the user experience. Stay tuned!",
    backHome: 'Back to Home',
    reload: 'Reload'
  },
  home: {
    welcome: 'Asterack provides realtime real estate appraisal services！',
    start: 'Get Started',
    docs: 'Explore Docs'
  },
  mansion: {
    title: 'Mansion Land',
    description:
      'Use the building transfer area, land transfer area, building purpose, construction area, number of floors, house age, and total price to calculate the demolition price of Mansion.',
    tabManual: 'Manual',
    tabAuto: 'APR ID',
    manual: {
      county: 'County',
      countyPlaceholder: 'Select county',
      buildingPurpose: 'Building Purpose',
      buildingPurposePlaceholder: 'Select building purpose',
      material: 'Material',
      materialPlaceholder: 'Select material',
      buildingArea: 'Building Area',
      landArea: 'Land Area',
      groundLevel: 'Ground Level',
      age: 'Age',
      price: 'Price',
      extendYears: 'Extend Years',
      transactionTime: 'Transaction Time',
      normalPlaceholder: 'Enter value',
      addPrice: 'Add Price',
      calculate: 'Calculate'
    },
    result: {
      title: 'Appraisal Result',
      description: 'Appraisal result using Mansion Land',
      constBudgetInterval: 'Cost Budget Interval',
      designBudgetInterval: 'Design Budget Interval',
      adBudgetInterval: 'Ad Budget Interval',
      manageBudgetInterval: 'Manage Budget Interval',
      taxBudgetInterval: 'Tax Budget Interval',
      totalBudgetInterval: 'Total Budget Interval',
      buildingCostInterval: 'Building Cost Interval',
      depreciatedBuildingCostInterval: 'Depreciated Building Cost Interval',
      landCostInterval: 'Land Cost Interval',
      pureLandPriceInterval: 'Pure Land Price Interval',
      share: 'Share',
      download: 'Download PDF'
    }
  },
  utility: {
    countySelector: {
      taipei: 'Taipei City',
      keelung: 'Keelung City',
      newtaipei: 'New Taipei City',
      taoyuan: 'Taoyuan City',
      hsinchuCounty: 'Hsinchu County',
      hsinchuCity: 'Hsinchu City',
      miaoli: 'Miaoli County',
      taichung: 'Taichung City',
      changhua: 'Changhua County',
      nantou: 'Nantou County',
      yunlin: 'Yunlin County',
      chiayiCounty: 'Chiayi County',
      chiayiCity: 'Chiayi City',
      tainan: 'Tainan City',
      kaohsiung: 'Kaohsiung City',
      pingtung: 'Pingtung County',
      yilan: 'Yilan County',
      hualien: 'Hualien County',
      taitung: 'Taitung County',
      penghu: 'Penghu County',
      kinmen: 'Kinmen County',
      lienchiang: 'Lienchiang County'
    },
    purposeSelector: {
      resident: 'resident',
      office: 'office',
      store: 'store',
      factory: 'factory'
    }
  },
  material: {
    materialSelector: {
      concrete: 'concrete',
      brick: 'brick',
      steel: 'steel'
    }
  }
}

export default langEn
