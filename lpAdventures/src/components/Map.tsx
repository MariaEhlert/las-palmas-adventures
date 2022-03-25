// import './Profile.scss';

import { LeafletMap } from "./LeafleftMap"
import { IonHeader } from "@ionic/react"
import { useParams } from "react-router";
import { useEffect, useState } from "react";


const MapPage: React.FC = () => {
    interface iPlaceCoords {
        latitude: number;
        longitude: number;
    }
    const [apiData, setApiData] = useState<iPlaceCoords>();
    var { latitude } = useParams<{ latitude: string }>();
    var { longitude } = useParams<{ longitude: string }>();


    var coords = latitude+","+longitude

    
    return (
    <div>
        <LeafletMap coords = {coords} />
    </div>
    
      );
}
export default MapPage