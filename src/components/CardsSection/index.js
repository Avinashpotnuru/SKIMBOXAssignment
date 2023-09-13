import React, { useState } from "react";
import "./index.css";
import Card from "./Card";
import { tab } from "@testing-library/user-event/dist/tab";

const tabs = ["Basic", "Shopify", "Advanced"];

const cardsDetails = [
  {
    id: 0,
    title: "Basic",
    subheading: "FOR INDIVIDUALS & SMALL BUSINESSES",
    description:
      "Everything you need to create your store,ship products,and process payments",
    price: "₹1,994",
    offer: "Get your 3 months for ₹20/mo",
    included: [
      "Basic reports",
      "up to 1,000 inventory locations",
      "2 staff accounts",
    ],
  },
  {
    id: 1,
    title: "Shopify",
    subheading: "FOR SMALL BUSINESSES",
    description:
      "Level up your business with professional reporting and more staff accounts",
    price: "₹7,447",
    offer: "Get your 3 months for ₹20/mo",
    included: [
      "Professional reports",
      "up to 1,000 inventory locations",
      "5 staff accounts",
    ],
  },
  {
    id: 2,
    title: "Advanced",
    subheading: "FOR MEDIUM TO LARGE BUSINESSES",
    description:
      "Get the best Shopify with custom reporting and our lowest transaction fees",
    price: "₹30,164",
    offer: "Get your 3 months for ₹20/mo",
    included: [
      "Custom report builder",
      "up to 1,000 inventory locations",
      "15 staff accounts",
    ],
  },
];

const CardsSection = () => {
  const [tab, setTab] = useState(0);

  // console.log(tab);

  const getTabData = cardsDetails.find((item, idx) => idx === tab);

  // console.log(getTabData);
  return (
    <>
      <div className="tabs">
        {tabs.map((item, idx) => (
          <button
            onClick={() => setTab(idx)}
            className={`tab ${tab === idx ? "tab-active" : "tab-inactive"}`}
            key={idx}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="card-mob">
        <Card {...getTabData} />
      </div>
      <div className="card-des">
        <div className="plan">
          <p className="pay-active">Pay Monthly</p>
          <p>Pay Yearly (Save 25%)</p>
        </div>

        <div className="cards-container">
          {cardsDetails.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsSection;
