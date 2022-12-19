import "./OrderCompleted.scss";
import arrow from "../../resources/icon/arrow-left.svg";
import { Link } from "react-router-dom";

const OrderCompleted = (props) => {

    let { step, setStep } = props;

    return (
        <div className="order-wrapper">
            <button className="step-back" onClick={() => { setStep(step = 2) }}>
                <img src={arrow} alt="arrow-left" /> Назад
            </button>
            <h2>Заказ оформлен!</h2>
            <p>Мы начали обрабатывать ваш заказ. Вы можете следить за изменением статуса заказа</p>
            <Link to='/tracking'><button className="primary-button">Отследить</button></Link>
        </div>
    );
}

export default OrderCompleted;