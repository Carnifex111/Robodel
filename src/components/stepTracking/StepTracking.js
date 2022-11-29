import React from "react";
import "./StepTracking.scss";

function StepTracking() {
  return (
    <div className="steps-tracking">
      <div className="steps-tracking__item">
        <div className="steps-tracking__item_num">1</div>
        <p>В обработке</p>
      </div>
      <span className="steps-line"></span>
      <div className="steps-tracking__item">
        <div className="steps-tracking__item_num">2</div>
        <p>Покинул склад</p>
      </div>
      <span className="steps-line"></span>
      <div className="steps-tracking__item">
        <div className="steps-tracking__item_num">3</div>
        <p>В пункте выдачи</p>
      </div>
      <span className="steps-line"></span>
      <div className="steps-tracking__item">
        <div className="steps-tracking__item_num num-active">4</div>
        <p>Передан роботу</p>
      </div>
      <span className="steps-line"></span>
      <div className="steps-tracking__item">
        <div className="steps-tracking__item_num">5</div>
        <p>Получен</p>
      </div>
    </div>
  );
}

export default StepTracking;
