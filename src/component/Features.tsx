import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
   <>
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* WRAPPER */}
            <div className='w-max flex'>
                {/* SINGLE ITEM */}
                   {
                    featuredProducts.map((item)=>(
                         <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-500 md:w-[50vw] xl:[33vw] xl:h-[90vh]'>
                        {/* IMAGE CONTAINER */}
                       { item.img &&
                         <div className='relative flex-1  w-full hover:rotate-[60deg] transition-all duration-500'>
                                <Image src={item.img} alt='image' fill className='object-contain'/>
                        </div>
                       }
                        {/* TEXT CONTAINER */}
                        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
                                <h1 className='text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                                <p className='p-4'>{item.desc}</p>
                                <span className='text-xl font-semibold'>${item.price}</span>
                                <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                        </div>
                    </div>
                    ))
                   }
            </div>
        </div>
   </>
  )
}

export default Features