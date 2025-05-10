import React from "react";
import Heading from "../components/Heading";
import iconWallet from "../assets/images/icons/howItWorks-wallet.svg";
import iconCollection from "../assets/images/icons/howItWorks-collection.svg";
import iconNft from "../assets/images/icons/howItWorks-nft.svg";
import iconSale from "../assets/images/icons/howItWorks-sale.svg";

const howItWorksData = [
  {
    icon: iconWallet,
    title: "Set up your wallet",
  },
  {
    icon: iconCollection,
    title: "Create your collection",
  },
  {
    icon: iconNft,
    title: "Add your NFTs",
  },
  {
    icon: iconSale,
    title: "List them for sale",
  },
];
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <Heading>How it works</Heading>
      <div className="content">
        {howItWorksData.map((element, key) => (
          <>
            <div className="card" key={key}>
              <div className="card-icon">
                <img src={element.icon} alt="card-icon" />
              </div>
              <h3 className="card-title">{element.title}</h3>
            </div>
            {key !== howItWorksData.length - 1 && <div className="line"></div>}
          </>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
