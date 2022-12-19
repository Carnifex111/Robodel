import React from "react";
import StepTracking from "../stepTracking/StepTracking";
import TrackingCode from "../trackingCode/TrackingCode";

import "./TrackingInfo.scss";
import arrow from "../../resources/icon/arrow-left.svg";
import cross from "../../resources/icon/close.svg";
import more from "../../resources/icon/more.svg";
import messages from "../../resources/icon/messages.svg";
import share from "../../resources/icon/share.svg";
import { Link } from "react-router-dom";

function TrackingInfo() {
  return (
    <div className="tracking-info">
      <Link to={'/'} className="link-back">
        <img src={arrow} alt="arrow" />
        Назад
      </Link>
      <div className="tracking-info__status">
        <p>Покинуло склад</p>
      </div>
      <div className="tracking-info__order">
        <h2>Заказ №43234324252</h2>
      </div>
      <div className="tracking-info__steps">
        <StepTracking />
      </div>
      <div className="tracking-info__code">
        <TrackingCode />
      </div>
      <div className="tracking-info__nav">
        <a className="nav-btn" href="#">
          <img src={cross} alt="cross" />
          Отметить <br /> доставку
        </a>
        <a className="nav-btn" href="#">
          <img src={more} alt="cross" />
          Детали <br /> доставки
        </a>
        <a className="nav-btn" href="#">
          <img src={messages} alt="cross" />
          Связаться с <br /> поддержкой
        </a>
        <a className="nav-btn" href="#">
          <img src={share} alt="cross" />
          Поделиться <br /> ссылкой
        </a>
      </div>
    </div>
  );
}

export default TrackingInfo;
