import { ethers } from "ethers";
import { useEffect, useState } from "react";
import kubicsWhitelist from "../artifacts/kubicsWhitelist.json";

export default function Whitelist() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [signer, setSigner] = useState(undefined);

  const contractAddress = "0x1AAFe67CeD171278E348cC1708a1CbE942bd2d25";

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function addToWhitelist() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(contractAddress, kubicsWhitelist, signer);
      try {
        const result = await contract.addAddressToWhitelist();
        await result.wait(1);
        alert("Great! You have joined the whitelist!");
        setIsWhitelisted(true)
      } catch (error) {
        console.log(error);
        alert("Address already whitelist!");
      }
    } else {
      console.log("Please install MetaMask");
      setIsWhitelisted(false)
    }
  }
  return (
    <div>
      {hasMetamask ? (
        isConnected ? (
          "Connected! "
        ) : (
          <button onClick={() => connect()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Connect with your Metamask to join the Whitelist!</button>
        )
      ) : (
        "Please install metamask"
      )}
        <div>
            {isConnected ? (
                isWhitelisted ? (
                "Already whitelisted! "
                ) : (
                    <button onClick={() => addToWhitelist()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Join the whitelist</button>
                )
            ) : (
                ""
            )}
        </div>
    </div>
  );
}