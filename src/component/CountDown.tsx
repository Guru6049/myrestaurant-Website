"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'


const Countdown = dynamic(() => import('react-countdown'), { ssr: false })


const endingDate = new Date(Date.now() + 1000 * 60 * 60 * 24) 

const CountDown = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            
            <Countdown className='font-bold text-5xl text-white' date={endingDate} />
        </>
    )
}

export default CountDown
