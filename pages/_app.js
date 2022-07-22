import '../styles/globals.css'
import '../styles/tggleSwitch.css'
import { LangProvider } from '../context/langContext';
import MensajesSp from '../lang/sp.json';
import MensajesEn from '../lang/en.json';
//  importamos contexto
import { langContext } from '../context/langContext';
import { useContext } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      
        <Component {...pageProps} />
      
    </LangProvider>
  )

}

export default MyApp
