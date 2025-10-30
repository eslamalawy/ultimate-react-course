import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Posistion {lat},{lng}
      </h2>

      <button onClick={() => setSearchParams({ lat: 123, lng: 50 })}>
        Change Position
      </button>
    </div>
  );
}

export default Map;
