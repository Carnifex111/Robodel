import React from "react";
import "./TrackingCode.scss";

function TrackingCode() {
  return (
    <div className="tracking-code">
      <div className="tracking-code__receiving">
        <a href="tel:+7(912)-345-67-89" className="receipt-code">
          +7 (912)-345-67-89
        </a>
      </div>
      <div className="tracking-code__additional-info">
        <p>
          На этот номер телефона вы можете позвонить, когда приедет робот, чтобы
          забрать заказ
        </p>
      </div>
    </div>
  );
}

export default TrackingCode;
