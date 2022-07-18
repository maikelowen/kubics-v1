import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const SocialNetworks = () => {
    return (
        <div className='flex flex-row p-3'>
            <div className="text-4xl flex justify-center mr-2">
                <AiFillInstagram />
            </div>
            <div className="text-4xl flex justify-center">
                <AiOutlineTwitter />
            </div>
        </div>
    );
}

export default SocialNetworks;
