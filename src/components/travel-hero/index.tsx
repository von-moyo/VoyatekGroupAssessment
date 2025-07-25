import React, { useState } from 'react'
import { Banner, Pfp } from '../../assets/images'
import { ArrowRightIcon, CalendarIcon, DotsSelectIcon, HumanPlusIcon, SettingsIcon } from '../../assets/icons'

export const TravelHero = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'activities',
      label: 'Activities',
      bg: '#000031',
      hoverBg: 'hover:bg-opacity-90',
      text: 'white'
    },
    {
      id: 'hotels',
      label: 'Hotels',
      bg: '#E7F0FF',
      hoverBg: 'hover:bg-opacity-90',
      text: '#000000'
    },
    {
      id: 'flights',
      label: 'Flights',
      bg: '#0D6EFD',
      hoverBg: 'hover:bg-opacity-90',
      text: 'white'
    },
  ];
  return (
    <section>
      <div className='relative'>
        <img src={Banner} alt="travel banner" className='w-full h-auto rounded-[4px]' />
        <button className='bg-[#FFFFFF33] w-9 h-9 rounded-[4px] cursor-pointer grid place-content-center absolute top-4.5 left-4.5'>
          <ArrowRightIcon className="w-4 h-auto" />
        </button>
      </div>

      <div className='mt-5 flex justify-between'>
        <div className='space-y-1'>
          <div className='bg-[#FEF4E6] w-fit px-2 py-1 flex items-center gap-1.5'>
            <CalendarIcon className="w-2 h-2 text-[#7A4504]" />
            <span className='text-[#7A4504] text-[10px]'>21 March 2024</span>
            <ArrowRightIcon className="rotate-180 text-[#7A4504] w-2 h-auto" />
            <span className='text-[#7A4504] text-[10px]'>21 April 2024</span>
          </div>
          <h3 className='font-semibold'>Bahamas Family Trip</h3>
          <p className='text-xs text-[#676E7E]'>New York,  United States of America | Solo Trip</p>
        </div>

        <div className='space-y-5 flex flex-col items-center'>
          <div className='flex gap-2 mr-1.5'>
            <button className='cursor-pointer px-14 py-3 bg-[#E7F0FF] rounded-[4px]'>
              <HumanPlusIcon className="text-[#0D6EFD] w-3 h-3" />
            </button>

            <DotsSelectIcon className="w-4 h-auto" />
          </div>

          <div className='flex items-center'>
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img
                src={Pfp}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className='bg-[#E7F0FF] px-4 py-[1px]'></div>
            <div className='w-7 h-7 border-2 border-[#E7F0FF] rounded-full grid place-content-center'>
              <SettingsIcon className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-3 gap-1 w-[57.8%]">
          {tabs.map(({ id, label, bg, hoverBg, text }) => (
            <button
              onClick={() => setActiveTab(id)}
              className={`flex-1 px-2 py-2.5 rounded-[4px] cursor-pointer text-left transition-all ${(activeTab === id)
                ? 'bg-blue-600 text-white'
                : `text-gray-700 ${hoverBg}`
                }`}
              style={{ backgroundColor: (activeTab === id) ? '#0D6EFD' : bg , color: (activeTab === id) ? 'gray-700' : text}}
            >
              <h3 className="text-[13px] font-medium mb-2">{label}</h3>
              <p
              style={{ color: (activeTab === id) ? 'gray-700' : text}}
               className={`text-[10px] ${(activeTab === id) ? 'text-blue-100' : 'text-gray-600'}`}>
                Build, personalize, and optimize your itineraries with our trip planner.
              </p>
              <button
                className={`mt-7 text-[10px] w-full py-2 rounded-[4px] transition-colors ${id === 'flights' && '!text-[#0D6EFD] bg-white'} ${(activeTab === id)
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-600 text-white'
                  }`}
              >
                {label === 'Activities'
                  ? 'Add Activities'
                  : label === 'Hotels'
                    ? 'Add Hotels'
                    : 'Add Flights'}
              </button>
            </button>
          ))}
        </div>
      )}

    </section>
  )
}