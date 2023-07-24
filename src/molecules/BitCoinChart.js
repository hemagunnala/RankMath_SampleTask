import React, { useEffect, useMemo, useState } from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import { filterDataByTime, generateRandomData } from '../App.utils'

const BitcoinAreaChart = ({ activeFilter }) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setData(generateRandomData())
  }, [])

  useEffect(() => {
    setFilteredData(filterDataByTime(activeFilter, data))
  }, [activeFilter, data])

  const { lastPrice, lowestDollar, highestDollar } = useMemo(() => {
    const lastPrice = filteredData[filteredData.length - 1]?.price || 0
    const dollars = filteredData.map((entry) => parseFloat(entry.price))
    const lowestDollar = Math.min(...dollars)
    const highestDollar = Math.max(...dollars)
    return { lastPrice, lowestDollar, highestDollar }
  }, [filteredData])

  return (
        <div style={{ height: '100%' }}>
            <div className='price_info_current'><div className='current'></div> 1 BTC = ${lastPrice}</div>
            <div className='price_info_lower'><div className='lower'></div> Lower: ${lowestDollar}</div>
            <div className='price_info_higher'><div className='higher'></div> Higher: ${highestDollar}</div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ffc743" stopOpacity={1} />
                            <stop offset="100%" stopColor="#ff8f17" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#f99d21"
                        fill="url(#colorUv)"
                    />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div>
  )
}

export default BitcoinAreaChart
