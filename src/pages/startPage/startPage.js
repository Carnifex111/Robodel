import { Link } from 'react-router-dom';
import './startPage.scss';

const StartPage = () => {
    return (
        <div className='container'>
            <div className="start-page">
                <h1>Мой курьер</h1>
                <h2>Сервис доставки на небольшие расстояния беспилотными транспортными средствами</h2>
                <Link to={'/form'} className="start-page__btn">Оформить доставку</Link>
            </div>
        </div>
    );
}

export default StartPage;