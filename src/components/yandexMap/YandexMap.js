import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  const defaultState = {
    center: [55.122354, 61.467125],
    zoom: 17,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width="100vw" height="100vh">
        {/* <Placemark geometry={[55.15402, 61.42915]} /> */}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
