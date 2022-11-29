import React from "react";
import "./TrackingCode.scss";

function TrackingCode() {
  return (
    <div className="tracking-code">
      <div className="tracking-code__receiving">
        <h3>Код получения:</h3>
        <h2 className="receipt-code">282933</h2>
      </div>
      <div className="tracking-code__additional-info">
        <p>
          На ваш номер телефона отправлено СМС от робота <br /> напишите ему код
          получения чтобы забрать заказ
        </p>
      </div>
    </div>
  );
}

export default TrackingCode;
