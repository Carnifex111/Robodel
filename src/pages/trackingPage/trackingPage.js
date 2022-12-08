import { Link } from "react-router-dom";
import YandexMap from "../../components/yandexMap/YandexMap";
import TrackingInfo from "../../components/trackingInfo/TrackingInfo";
import "./trackingPage.scss";

const TrackingPage = () => {
  return (
    <div className="tp-container">
      <TrackingInfo />
      <div className="yandex-map">
        <YandexMap />
      </div>
    </div>
  );
};

export default TrackingPage;
