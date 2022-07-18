import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { FormattedMessage } from "react-intl"
import Newsletter from "../components/Newsletter"
import ToggleSwitch from "../components/toggleSwitch"
import CenterLogo from "../components/centerLogo"
import SocialNetworks from "../components/SocialNetworks"


export default function Home() {
  
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-r from-gray-400 via-white to-gray-400'>
      <div className="w-11/12 max-w-screen-2xl ">
        <header className="flex justify-end   mb-20 ">
          <ToggleSwitch />
        </header>
        <main className=" ">
          {/* Switch to change language */}
          <h3 className="text-center mb-10">
            <FormattedMessage
              id='app.slogan'
              defaultMessage='The world will never be round again'
            />
          </h3>
          {/* Kubics Logo */}
          <div className="py-10 mt-8 mb-10">
            <CenterLogo />
          </div>

          <div className="flex justify-around ">
            <div className=" w-1/5">
              <FormattedMessage
                id='app.text1'
                defaultMessage='the NFT Project that will change the course of Filmmaking History'
              />
            </div>
            <div className="w-1/5">
              <FormattedMessage
                id='app.text2'
                defaultMessage='MORE INFO COMING SOON'
              />
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex justify-center ">
            
              <Newsletter />
            
          </div>
        </main>

        <footer className="">
          <div className=" flex justify-center mb-5">
            <SocialNetworks />
          </div>
        </footer>
      </div>
    </div>
  )
}
