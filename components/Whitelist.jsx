import { ethers } from "ethers"
import Web3Modal from "web3modal"
import kubicsWhitelist from "../artifacts/kubicsWhitelist.json"

const dragonkeeperswhitelist = "0x1AAFe67CeD171278E348cC1708a1CbE942bd2d25"

export default function whitelist() {
    
    
    const addToWhitelist = async () => {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(dragonkeeperswhitelist, kubicsWhitelist, signer)

        try {
            const result = await contract.addAddressToWhitelist()
            await result.wait()
        } catch (error) {
                alert("User already whitelisted!");
        }
    }

    return(
        <div >
           <button onClick={addToWhitelist}>Add me to the Whitelist</button>
        </div>  
        )
}
