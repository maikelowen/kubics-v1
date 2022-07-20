import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { FormattedMessage } from "react-intl"
import Newsletter from "../components/Newsletter"
import ToggleSwitch from "../components/toggleSwitch"
import CenterLogo from "../components/centerLogo"
import SocialNetworks from "../components/SocialNetworks"
import CookieConsent from "react-cookie-consent"

export default function Home() {

  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-r from-[#cbd5e1] via-[#f8fafc] to-[#cbd5e1]'>
      <div className="w-11/12 max-w-screen-2xl ">
        <header className="flex justify-end mb-3 ">
          <ToggleSwitch />
        </header>
        <main className=" ">
          {/* Switch to change language */}
          <h3 className="text-4xl text-center">
            <FormattedMessage
              id='app.slogan'
              defaultMessage='The world will never be round again'
            />
          </h3>
          {/* Kubics Logo */}
          <div className=" mt-8 mb-2">
            <CenterLogo />
          </div>
          {/* Sentences */}
          <div className="hidden md:flex   justify-center  ">
            <div className=" w-5/12 text-center pb-5 pt-2 border-t  border-[#7094b1]">
              <FormattedMessage
                id='app.text1'
                defaultMessage='the NFT Project that will change the course of Filmmaking History'
              />
            </div>
            {/* <div className="w-1/5 flex self-center">
              <FormattedMessage
                id='app.text2'
                defaultMessage='MORE INFO COMING SOON'
              />
            </div> */}
          </div>
          {/* For Mobile */}
          <div className="text-center md:hidden">
            <div className="mb-1 p-1  border-b">
              <FormattedMessage
                id='app.text1'
                defaultMessage='the NFT Project that will change the course of Filmmaking History'
              />
            </div>
            <div className=" bottom-0">
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

        <footer className="flex justify-center items-stretch mt-5">

          <div className=" flex text-center self-center">
            <FormattedMessage
              id='app.text2'
              defaultMessage='MORE INFO COMING SOON'
            />
          </div>

          <div className=" flex justify-center self-center">
            <SocialNetworks />
          </div>

          <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Reject"
            enableDeclineButton
            onDecline={() => {
              alert("Not accepted!")
            }}
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            declineButtonStyle={{ color: "#4e503b", background: "#918f8e" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </footer>
      </div>
    </div>
  )
}
