import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import "./styles/ActionSelectorWidget.css"

export const ActionSelectorWidget = (props) => {

  const handleActionSelection = (selectedAction) => {
    const message = createChatBotMessage(
      `You selected ${selectedAction}.`
    );

    // Aquí despachamos el mensaje al chatbot para que lo muestre
    // o realizar cualquier otra acción que desees.
  };

  return (
    <div className="container-btn">
      {/* <button
        className="btn"
        onClick={() => handleActionSelection("Action A")}
        href="https://www.google.com"
      >
        Orders
      </button> */}
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


