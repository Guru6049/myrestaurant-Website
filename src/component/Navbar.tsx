
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

 const Navbar = () => {
const user = false
  return (
    <>
        <div className='h-12 text-red-500 flex items-center p-4 justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
          {/* left link */}
          <div className='hidden md:flex gap-4 flex-1'>
            <Link href='/'>HomePage</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/'>Contact</Link>
          </div>
          {/* Logo */}
          <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href='/'>Massimo</Link>
          </div>
          {/* Mobile Number */}

          <div className='md:hidden'>
            <Menu/>
          </div>
 
          {/* Right link */}
           <div className='hidden md:flex gap-4 flex-1 justify-end'>
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer  bg-yellow-500  px-2 rounded-xl'>
              <Image src='/phone.png' alt='phoneIcons' width={10} height={10}/>
              <span>123 456 789</span>
            </div>
           {!user?
             (<Link href='/login'>Login</Link>):
            (<Link href='/order'>orders</Link>)
           }
           <CartIcon/>
          </div>
        </div>
    </>
  )
}

export default Navbar