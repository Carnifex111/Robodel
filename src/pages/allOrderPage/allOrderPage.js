import { useEffect, useState } from "react";

import AllOrderItem from "../../components/allOrderItem/allOrderItem";

import "./allOrderPage.scss";
import data from "./data.json";

import arrow from "../../resources/icon/arrow-left.svg";
import filter from "../../resources/icon/filter.svg"


const AllOrderPage = () => {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const items = document.querySelectorAll('.aop__header-item');
        items.forEach(item => {
            item.classList.remove('aop__header--active');
        });
        items[active].classList.add('aop__header--active');

    }, [active]);

    return(
        <div className="aop">
            <div className="aop__container">

                <p className="aop__back"><img src={arrow} alt="back" /> К маркетплейсу</p>

                <div className="aop__header">

                    <h2 className="aop__header-name">ООО "Телефон4ики"</h2>

                    <div className="aop__header-items">

                        <div onClick={() => {setActive(0)}} className="aop__header-item">
                            <p>Текущие</p>
                        </div>
                        <div onClick={() => {setActive(1)}} className="aop__header-item">
                            <p>Завершенные</p>
                        </div>
                        <div onClick={() => {setActive(2)}} className="aop__header-item">
                            <p>Планируемые</p>
                        </div>

                    </div>

                </div>

                <div className="aop__filters">
                    <div className="aop__filters-wrapper-input">
                        <input type="text" placeholder="Найти заказ"/>
                    </div>
                    <button><img src={filter} alt="filter icon" /></button>
                </div>

                <div className="aop__orders">
                    {
                        data[active].map(el => {
                            return ( <AllOrderItem key={el.id} el={el}/> );
                        })
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default AllOrderPage;