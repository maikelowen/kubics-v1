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
      <div className="w-11/12 max-w-screen-3xl min-h-screen grid content-between">
        <header className="flex justify-end">
          <ToggleSwitch />
        </header>
        <main className="">
          {/* Switch to  change language */}
          <h3 className="text-2xl text-center">
            <FormattedMessage
              id='app.slogan'
              defaultMessage='The world will never be round again'
            />
          </h3>
          {/* Kubics Logo */}
          <div className=" mt-16 mb-2">
            <CenterLogo />
          </div>
          {/* Sentences */}
          <div className="hidden md:flex justify-center">
            <div className="  text-center pb-5 pt-2 border-t  border-[#7094b1] ">
              <FormattedMessage
                id='app.text1'
                defaultMessage='the NFT Project that will change the course of Filmmaking History'
              />
            </div>
          </div>
          {/* For Mobile */}
          <div className="text-center md:hidden">
            <div className="mb-10 p-1  border-t  border-[#7094b1] ">
              <FormattedMessage
                id='app.text1'
                defaultMessage='the NFT Project that will change the course of Filmmaking History'
              />
            </div>
          </div>
          
        </main>

        <footer className="flex flex-col justify-center">
          {/* Newsletter */}
          <div className="flex justify-center mb-3">
            <Newsletter />
          </div>
          <div className=" flex text-center self-center">
            <FormattedMessage
              id='app.text2'
              defaultMessage='More info'
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
