import "./allOrderItem.scss";

const AllOrderItem = ({el}) => {

    const {title, name, size, date, seller, process} = el;

    return (
        <div className="aop__orders-item">
            <div className="aop__orders-content">
                <div className="aop__orders--mobile">
                    <h3>{title}</h3>
                    <p className="aop__orders-status aop__orders-status--mobile">{process}</p>
                </div>
                <div className="aop__orders-detail">
                    <div>
                        <p>Товар: <span>{name}</span></p>
                        <p>Размер: <span>{size}</span></p>
                    </div>
                    <div>
                        <p>Дата доставки: <span>{date}</span></p>
                        <p>Продавец: <span>{seller}</span></p>
                    </div>
                </div>
            </div>
            <p className="aop__orders-status">{process}</p>
        </div>
    );
}

export default AllOrderItem;