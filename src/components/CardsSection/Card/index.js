import React from "react";
import "./index.css";

import { AiOutlineCheck } from "react-icons/ai";

const Card = ({ id, title, price, included }) => {
  return (
    <div className={id === 0 ? `card bordered ` : "card"}>
      <div className={id === 0 ? "popular " : "hidden"}>
        <p>most popular</p>
      </div>
      <div className="content-head">
        <h3>{title}</h3>
        <p>FOR INDIVIDUALS & SMALL BUSINESSES</p>
        <h6 className="payment">
          Everything you need to create your store,ship products,and process
          payments
        </h6>
      </div>
      <div className="price">
        <h1>{price}</h1>
        <div>
          <span>INR</span>
          <br />
          <span>/mo</span>
        </div>
      </div>

      <div className="offer">
        <h4>Get your 3 months for ₹20/mo</h4>
      </div>
      <div className="content-2">
        <p>whats included on {title}</p>
        <ul className="keypoints">
          {included.map((val) => (
            <li className="item">
              <AiOutlineCheck className="icon" />
              <p>{val}</p>
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button> Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
