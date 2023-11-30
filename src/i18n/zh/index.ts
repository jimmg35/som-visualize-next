import { ILocalePackage } from '..'

const langZh: ILocalePackage = {
  schema: 'zh',
  side: {
    home: '首頁',
    appraisal: '估價演算法',
    mansion: '透天素地成本拆算',
    store: '店面樓層單價拆算',
    park: '建坪與車位單價拆算',
    comparison: '比較法計算',
    income: '收益法計算',
    monitor: '監控',
    stream: '流量計算',
    setting: '設定',
    users: '使用者'
  },
  notfound: {
    condition: '頁面正在維護中',
    statement: '我們正在努力改善用戶體驗。敬請關注！',
    backHome: '返回首頁',
    reload: '重新載入'
  },
  home: {
    welcome: 'Asterack提供即時不動產估價服務！',
    start: '開始使用',
    docs: '技術文檔'
  },
  mansion: {
    title: '透天素地成本拆算',
    description:
      '使用建物移轉面積、土地移轉面積、建物用途、建材、樓層數、屋齡、總價，進行透天厝素地價格拆算。',
    tabManual: '手動輸入',
    tabAuto: '實價登錄ID',
    manual: {
      county: '縣市',
      countyPlaceholder: '請選擇縣市',
      buildingPurpose: '建物用途',
      buildingPurposePlaceholder: '請選擇建物用途',
      material: '建材',
      materialPlaceholder: '請選擇建材',
      buildingArea: '建坪面積(平方公尺)',
      landArea: '土地面積(平方公尺)',
      groundLevel: '地上層',
      age: '屋齡',
      price: '總價',
      extendYears: '延長耐用年數',
      transactionTime: '交易時間',
      normalPlaceholder: '輸入內容',
      addPrice: '鋼筋加價',
      calculate: '計算'
    },
    result: {
      title: '估價結果',
      description: '使用透天素地成本拆算法所預估出的結果',
      constBudgetInterval: '營造施工費區間（單位價格）',
      designBudgetInterval: '規劃設計費區間（單位價格）',
      adBudgetInterval: '廣告銷售費區間（單位價格）',
      manageBudgetInterval: '管理費區間（單位價格）',
      taxBudgetInterval: '稅捐及其他費區間（單位價格）',
      totalBudgetInterval: '費用合計區間（單位價格）',
      buildingCostInterval: '建物成本單價區間（單位價格）',
      depreciatedBuildingCostInterval: '折舊後建物單價區間（單位價格）',
      landCostInterval: '土地成本價格區間（總價）',
      pureLandPriceInterval: '土地素地價格區間（總價）',
      share: '分享',
      download: '下載估價報告'
    }
  },
  utility: {
    countySelector: {
      taipei: '臺北市',
      keelung: '基隆市',
      newtaipei: '新北市',
      taoyuan: '桃園市',
      hsinchuCounty: '新竹縣',
      hsinchuCity: '新竹市',
      miaoli: '苗栗縣',
      taichung: '台中市',
      changhua: '彰化縣',
      nantou: '南投縣',
      yunlin: '雲林縣',
      chiayiCounty: '嘉義縣',
      chiayiCity: '嘉義市',
      tainan: '台南市',
      kaohsiung: '高雄市',
      pingtung: '屏東縣',
      yilan: '宜蘭縣',
      hualien: '花蓮縣',
      taitung: '台東縣',
      penghu: '澎湖縣',
      kinmen: '金門縣',
      lienchiang: '連江縣'
    },
    purposeSelector: {
      resident: '居住用途',
      office: '辦公用途',
      store: '商業用途',
      factory: '工業用途'
    }
  },
  material: {
    materialSelector: {
      concrete: '鋼筋混凝土造',
      brick: '加強磚造',
      steel: '鋼架造'
    }
  }
}

export default langZh
