import ReactECharts from 'echarts-for-react'
import React, { useContext } from 'react'
import { SomContext } from '../lib/provider'

const StatisticChart = () => {
  const { clusterRatio } = useContext(SomContext)
  return (
    <div className="w-full h-full">
      <ReactECharts
        style={{ height: '100%', width: '100%' }}
        option={{
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)' // 添加了 formatter 屬性
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: Object.keys(clusterRatio).map((cluster) => {
                return { value: clusterRatio[cluster], name: cluster }
              })
              // [
              //   { value: 1048, name: 'Search Engine' },
              //   { value: 735, name: 'Direct' },
              //   { value: 580, name: 'Email' },
              //   { value: 484, name: 'Union Ads' },
              //   { value: 300, name: 'Video Ads' }
              // ]
            }
          ]
        }}
      />
    </div>
  )
}

export default StatisticChart
