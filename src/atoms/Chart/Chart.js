import React, { useState } from 'react'
import BitcoinAreaChart from '../../molecules/BitCoinChart'
import { CHART_FILTER } from '../../App.constants'
import './chart.scss';

function Chart () {
  const [activeFilter, setActiveFilter] = useState('year')
  return (
    <div className='chart'>
        <div className='filter'>
            {(CHART_FILTER || []).map(filter => <span key={filter.value} style={activeFilter === filter.value ? { color: '#ffffff', backgroundColor: '#aeb8c4', borderRadius: '50px' } : {} } onClick={() => { setActiveFilter(filter.value) }}>{filter.label}</span>)}
        </div>
        <div className='graph'>
            <BitcoinAreaChart activeFilter={activeFilter} />
        </div>
    </div>
  )
}

export default Chart
