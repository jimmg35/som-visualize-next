import ReactECharts from 'echarts-for-react'
import React from 'react'

const colors: string[] = [
  '#F08080',
  '#00FA9A',
  '#1E90FF',
  '#FF6347',
  '#7B68EE',
  '#32CD32',
  '#8A2BE2',
  '#FFD700',
  '#DC143C',
  '#00CED1',
  '#FF8C00',
  '#8B008B',
  '#228B22',
  '#FF4500',
  '#4169E1',
  '#FF69B4',
  '#008080',
  '#FFA07A',
  '#4B0082',
  '#20B2AA'
]

const Chart = ({
  data
}: {
  data: {
    [key: string]: number[]
  }
}) => {
  return (
    <div className="w-[45%] h-[600px]">
      <ReactECharts
        style={{ height: '100%', width: '100%' }}
        option={{
          xAxis: [{}],
          yAxis: [{}],
          dataZoom: [
            {
              type: 'inside'
            },
            {
              type: 'slider',
              showDataShadow: false,
              handleIcon:
                'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%'
            },
            {
              type: 'inside',
              orient: 'vertical'
            },
            {
              type: 'slider',
              orient: 'vertical',
              showDataShadow: false,
              handleIcon:
                'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%'
            }
          ],
          legend: {
            data: Object.keys(data),
            right: '10%',
            top: '3%'
          },
          animation: false,
          series: Object.keys(data).map((cluster, index) => {
            return {
              name: cluster,
              data: data[cluster],
              type: 'scatter',
              symbolSize: 6,
              itemStyle: {
                color: colors[index]
              },
              blendMode: 'source-over',
              large: true,
              largeThreshold: 500
            }
          })

          // data.map((item) => ({
          //   type: 'scatter',
          //   data: [{ value: [item.x, item.y], name: item.category }],
          //   itemStyle: {
          //     color: categoryColors[item.category]
          //   },
          //   blendMode: 'source-over',
          //   large: true,
          //   largeThreshold: 500
          // }))
        }}
      />
    </div>
  )
}

export default Chart
