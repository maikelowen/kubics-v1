import React from 'react';
import { useState } from 'react'
import { ethers } from "ethers"
import Whitelist from './Whitelist';


// Instalar react icons --> npm install react-icons --save


// Estilos TailwindCSS
const style = {
    wrapper: `  backdrop-blur-2xl  w-full px-[1.2rem] h-[66px] lg:h-auto pt-[0.8rem] flex justify-between fuente  fixed top-0 z-40`,
    searchBar: `lg:basis-1/5 blur-none flex  w-96 items-center bg-[#272727] rounded-[0.8rem] hover:bg-[#4c505c] mb-3 hidden lg:flex`,
    searchIcon: `text-[#8a939b] mx-3  text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    containerItems1: `md:basis-1/5 w-96  flex items-end justify-end text-xs  cursor-pointer hidden lg:flex`,
    containerItems2: `md:basis-1/5 w-96 flex items-end justify-start text-xs  cursor-pointer hidden lg:flex`,
    headerItem: `  px-4 text-sm text-[#c8cacd] hover:border-b-2  border-b-fuchsia-600 pb-3 hover:text-white`,
    containerIcon:`lg:basis-1/5 w-96 flex items-center justify-end z-50`,
    // headerLogo: ` absolute inset-x-50% top-0 bg-gradient-to-r from-[#ff48f9] to-blue-500 hidden lg:block  opacity-90`,
    static: `lg:basis-1/5  static grid place-items-center justify-center rounded-[0.8rem] text-center z-10`,
    logo:``,
    headerIcon:`text-[#8a939b] mx-3 font-bold text-lg px-4 hover:text-white cursor-pointer mb-3 `,
    connet:`text-white sm:text-sm text-[0.6rem] py-1 px-1 sm:px-4 sm:py-2 border-2 border-[#02E3E2] rounded-full  hover:text-[#02E3E2] hover:bg-gray-100 hover:border-gray-100  `,
    wallet:`font-sans text-xs text-[#c8cacd] border border-cyan-300  rounded p-2 hover:border-2 hover:text-white`
}
  

const WalletConnect = () =>{
    const [account, setAccount] = useState(null)
    // MetaMask Login/Connect
    const web3Handler = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0])
      // Get provider from Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()
      
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      })
  
      window.ethereum.on('accountsChanged', async function (accounts) {
        setAccount(accounts[0])
        await web3Handler()
      }) 
    }

    return(
    <div className={style.containerIcon}>
        {account ? (    
            <Whitelist/>
            
        ) : (
            <button className={style.connet} onClick={web3Handler} variant="outline-light">Connect Wallet</button>
        )}
    </div>  
    )
}

export default WalletConnect;