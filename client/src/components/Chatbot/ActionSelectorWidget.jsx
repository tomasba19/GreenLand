import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import "./styles/ActionSelectorWidget.css"

export const ActionSelectorWidget = (props) => {

  const handleActionSelection = (selectedAction) => {
    const message = createChatBotMessage(
      `You selected ${selectedAction}.`
    );
  };

  return (
    <div className="container-btn">
      <a href="#">
        <button
          className="btn"
          onClick={() => handleActionSelection("Orders")}
        >
          Orders
        </button>
      </a>

      <a href="/shop" >
        <button
          className="btn"
          onClick={() => handleActionSelection("Shipping")}
        >
          Shipping
        </button>
      </a>

      <a href="#">
        <button
          className="btn"
          onClick={() => handleActionSelection("Returns")}
        >
          Returns
        </button>
      </a>

      <a href="#">
        <button
          className="btn"
          onClick={() => handleActionSelection("Refund")}
        >
          Refund
        </button>
      </a>
    </div>
  );
};


