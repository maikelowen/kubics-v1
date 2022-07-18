import Image from 'next/image';
import React from 'react';
import logo from '../img/KubicEstatico.png';

const CenterLogo = () => {
    return (
        <div className='flex flex-row justify-center'>
                <div className='text-center '>
                    <Image src={logo} alt='' />
                    <div className='text-4xl flex flex.row'>
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
