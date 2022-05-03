import React from 'react'
import { WarrantyData } from '../data'
const Warranty = () => {
  return (
    <div className='grid mdx:grid-cols-1 grid-cols-3 gap-x-5 gap-y-3 pt-5 px-5 sm:px-20 mb-12'>
      {WarrantyData.map((item,index)=> {
        const {svg,title,text} = item
        return (
          <div key={index} className='flex justify-center items-center flex-col text-center border border-white rounded-md text-white hover:bg-blue-900 hover:border-blue-900 duration-200'>
            {svg}
            <h3 className='py-4 font-semibold text-lg'>{title}</h3>
            <p className='pb-6 px-2'>{text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Warranty