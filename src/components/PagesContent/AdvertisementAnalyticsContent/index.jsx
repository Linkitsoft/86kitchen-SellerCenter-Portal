import React from 'react'
import AnalyticsCards from './Cards'
import CampaignPerformanceChart from './CampaignPerformanceChart'
import ClicksByCampaignChart from './ClicksByCampaignChart'

export default function AdvertisementAnalyticsContent() {
  return (
    <div className="!flex  !flex-col !w-full p-4 mt-20 !ml-0 ">
      <AnalyticsCards />
      <div className='mt-[150px] grid grid-cols-12 gap-6'>
        <div className='col-span-4'>
          <ClicksByCampaignChart />
        </div>
        <div className='col-span-8'>

          <CampaignPerformanceChart />
        </div>

      </div>
    </div>
  )
}
