import React from 'react'
import "./map.scss"
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

const Map = ({items}) => {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      // center={[4.159302, 9.243536]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))} */}
    </MapContainer>
  );
}

export default Map