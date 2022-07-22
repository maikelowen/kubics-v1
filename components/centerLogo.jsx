import Image from 'next/image';
import React, { Component } from 'react'
import logo from '../public/kubicsLoop.webp'


const CenterLogo = () => {

        return (
            <div className='flex flex-row justify-center'>
                <div className='text-center flex flex-col justify-center'>
                    <div>
                    <div className='md:hidden'>
                        <Image  src={logo} width={124} height={110} alt="logo" / >
                    </div>
                    <div className='hidden md:block'>
                        <Image  src={logo} width={166} height={149} alt="logo" / >
                    </div>

                    </div>

                    <div className='text-3xl mt-2 md:text-4xl flex flex-row justify-center may'>
                        <div className='tracking-[.70em] hover:animate-bounce'>K</div>
                        <div className='tracking-[.70em] hover:animate-bounce'>U</div>
                        <div className='tracking-[.70em] hover:animate-bounce'>B</div>
                        <div className='tracking-[.70em] hover:animate-bounce'>I</div>
                        <div className='tracking-[.70em] hover:animate-bounce'>C</div>
                        <div className='hover:animate-bounce'>S</div>
                    </div>
                </div>
            </div>
        );
}

export default CenterLogo;
