import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const SocialNetworks = () => {
    return (
        <div className='flex flex-row p-3 '>
            <a href="https://mobile.twitter.com/KubicsNFT">
                <div className="text-4xl flex justify-center mr-3 hover:text-[#EFEDA5]">
                <AiOutlineTwitter />
                </div>
            </a>
            <a href="https://www.instagram.com/kubicsnft/">
                <div className="text-4xl flex justify-center hover:text-[#EFEDA5]">
                    <AiFillInstagram />
                </div>
            </a>
        </div>
    );
}

export default SocialNetworks;
