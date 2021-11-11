import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MarkrPNG from "../assets/images/marker1.png";
export default function App() {
  const [viewport, setViewport] = React.useState({
    zoom: 12,
    longitude: -122.45,
    latitude: 37.78,
  });

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true,
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  const successLocation = (position) =>
    setViewport({
      zoom: 12,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

  const errorLocation = () =>
    setViewport({
      zoom: 12,
      longitude: -122.45,
      latitude: 37.78,
    });

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img src={MarkrPNG} alt="" />
      </Marker>
    </ReactMapGL>
  );
}
