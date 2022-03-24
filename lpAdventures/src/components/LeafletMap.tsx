import { count } from 'console';
import L from 'leaflet';
import React, { useEffect, useState } from 'react';
import "./LeafletMap.scss";
import "leaflet-routing-machine";


var map : any;

export function LeafleftMap() {

    const [position, setCount] = useState(new L.LatLng(0, 0));

    useEffect(() => {
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(function (location2) {
                var posi = new L.LatLng(location2.coords.latitude, location2.coords.longitude);

                setCount((position) => posi);
               
            });
        }, 5000);
    });






    navigator.geolocation.getCurrentPosition(function (location) {

        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

        var greenIcon = L.icon({
            iconUrl: 'https://openclipart.org/image/2400px/svg_to_png/201733/1410105361.png',

            iconSize: [20, 20], // size of the icon

            iconAnchor: [20, 20], // point of the icon which will correspond to marker's location

            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        var endIcon = L.icon({
            iconUrl: 'https://icon-library.com/images/end-icon/end-icon-2.jpg',

            iconSize: [30, 30], // size of the icon

            iconAnchor: [30, 30], // point of the icon which will correspond to marker's location

            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        var startIcon = L.icon({
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/rungning/64/goal-start-finish-race-finish_flag-sports_and_competition-racing-winner-512.png',

            iconSize: [30, 30], // size of the icon

            iconAnchor: [30, 30], // point of the icon which will correspond to marker's location

            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });


        if(map===undefined){
            map = L.map('mapid').setView(latlng, 13)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    
            var marker = L.marker(latlng, { icon: greenIcon }).addTo(map);

            var waypoints = [
                L.latLng(latlng),
                L.latLng(28.13460, -15.43618)
            ];
    
            var count = 0;
    
            let leafletElement = L.Routing.control({
    
                lineOptions: { styles: [{ color: 'crimson', weight: 7 }], extendToWaypoints: true, missingRouteTolerance: 0 },
                altLineOptions: {
                    styles: [
                        { color: 'black', opacity: 0.15, weight: 9 },
                        { color: 'white', opacity: 0.8, weight: 6 },
                        { color: 'blue', opacity: 0.5, weight: 2 }
                    ], extendToWaypoints: true, missingRouteTolerance: 0
                },
                plan: L.Routing.plan(waypoints, {
                    createMarker: function (i, wp) {
                        if (count == 0) {
                            count++;
                            return L.marker(wp.latLng, {
                                draggable: false,
                                icon: startIcon
                            });
                        } else {
                            count++;
                            return L.marker(wp.latLng, {
                                draggable: false,
                                icon: endIcon
                            });
                        }
    
                    },
    
                    routeWhileDragging: true
                }),
                addWaypoints: false,
    
            });
    
            leafletElement.addTo(map)

            setInterval(() => {

                navigator.geolocation.getCurrentPosition(function (location2) {
                    var posi = new L.LatLng(location2.coords.latitude, location2.coords.longitude);
                    marker.remove();
                    marker = L.marker(posi, { icon: greenIcon }).addTo(map);
                    // marker.bindPopup('mi posición es: ' + marker.getLatLng()).openPopup();
    
                });
    
            }, 5000);
        }
       
      
       

       

        // L.Routing.Line = L.Routing.Line.extend({
        //     options: {
        //         styles: [
        //             {color: 'black', opacity: 0.15, weight: 9},
        //             {color: 'white', opacity: 0.8, weight: 6},
        //             {color: 'red', opacity: 1, weight: 2}
        //         ],
        //         missingRouteStyles: [
        //             {color: 'black', opacity: 0.15, weight: 7},
        //             {color: 'white', opacity: 0.6, weight: 4},
        //             {color: 'gray', opacity: 0.8, weight: 2, dashArray: '7,12'}
        //         ],
        //         addWaypoints: false,
        //         extendToWaypoints: true,
        //         missingRouteTolerance: 10
        //     },
        // });

        




        // const currentLocation = {
        //     lat: location.coords.latitude,
        //     lng: location.coords.longitude
        // }

        // setState({
        //     ...state,
        //     currentLocation
        // })



       
    });





    return (
        <div>
            <div id="mapid"></div>
        </div>
    );
}

