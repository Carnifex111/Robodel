import { useEffect, useRef } from "react";

import "./steps.scss";

const Steps = ({ step }) => {
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();

  useEffect(() => {
    if (step === 1) {
      step2.current.classList.remove("active");
      step1.current.classList.add("active");
    } else if (step === 2) {
      step2.current.classList.add("active");
      step1.current.classList.remove("active");
      step3.current.classList.remove("active");
    } else if (step === 3) {
      step3.current.classList.add("active");
      step2.current.classList.remove("active");
    }
  });

  return (
    <div className="steps">
      <div className="steps__container">
        <div className="steps__container__block">
          <div className="steps__container__block__item" ref={step1}>
            1
          </div>
          <p>Формирование заказа</p>
        </div>
        <span className="steps-line"></span>
        <div className="steps__container__block">
          <div className="steps__container__block__item" ref={step2}>
            2
          </div>
          <p>Откуда доставить заказ</p>
        </div>
        <span className="steps-line"></span>
        <div className="steps__container__block">
          <div className="steps__container__block__item" ref={step3}>
            3
          </div>
          <p>Ожидание</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
