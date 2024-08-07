// let map;

// function initMap() {
//      const myLocation = { lat: 13.0308, lng: 77.5640 }; //Latitude: 28.6139
//     // Longitude: 77.2090(Delhi)

//     const mapOptions = {
//         center: myLocation,
//         zoom: 12,
//         mapTypeControl: true,
//         zoomControl: true,
//         streetViewControl: false,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         styles: [
//             {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "geometry",
//                 "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
//             },
//         ]
//     };

//     map = new google.maps.Map(document.getElementById("map"), mapOptions);

//     new google.maps.Marker({
//         position: myLocation,
//         map: map,
//         title: "Initial Center Location",
//     });

//     map.addListener('click', function(event) {
//         placeMarker(event.latLng);
//     });
// }

// function placeMarker(location) {
//     new google.maps.Marker({
//         position: location,
//         map: map,
//         title: "New Marker",
//     });
// }

// document.getElementById('get-location').addEventListener('click', () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             const pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//             };

//             map.setCenter(pos);

//             new google.maps.Marker({
//                 position: pos,
//                 map: map,
//                 title: "You are here!",
//             });
//         }, () => {
//             handleLocationError(true, map.getCenter());
//         });
//     } else {
//         handleLocationError(false, map.getCenter());
//     }
// });

// function handleLocationError(browserHasGeolocation, pos) {
//     const infoWindow = new google.maps.InfoWindow({
//         position: pos,
//     });

//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }


// let map;

// function initMap() {
//     const myLocation = { lat: 13.0308, lng: 77.5640 }; // Mathikere, MSR Nagar, Bangalore

//     const mapOptions = {
//         center: myLocation,
//         zoom: 15, // Adjust the zoom level as needed
//         mapTypeControl: true,
//         zoomControl: true,
//         streetViewControl: false,
//         mapTypeId: google.maps.MapTypeId.ROADMAP, // You can change this to SATELLITE, HYBRID, or TERRAIN
//         styles: [
//             {
//                 "featureType": "water",
//                 "elementType": "geometry",
//                 "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
//             },
//             {
//                 "featureType": "landscape",
//                 "elementType": "geometry",
//                 "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
//             },
//             // Add more style rules as needed
//         ]
//     };

//     map = new google.maps.Map(document.getElementById("map"), mapOptions);

//     const marker = new google.maps.Marker({
//         position: myLocation,
//         map: map,
//         title: "Mathikere, MSR Nagar, Bangalore",
//     });

//     // Add a click event listener on the map
//     map.addListener('click', function(event) {
//         placeMarker(event.latLng);
//     });

//     // Add a search box
//     const input = document.getElementById("pac-input");
//     const searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener("bounds_changed", () => {
//         searchBox.setBounds(map.getBounds());
//     });

//     let markers = [];

//     searchBox.addListener("places_changed", () => {
//         const places = searchBox.getPlaces();

//         if (places.length == 0) {
//             return;
//         }

//         // Clear out the old markers.
//         markers.forEach((marker) => {
//             marker.setMap(null);
//         });
//         markers = [];

//         // For each place, get the icon, name and location.
//         const bounds = new google.maps.LatLngBounds();
//         places.forEach((place) => {
//             if (!place.geometry || !place.geometry.location) {
//                 console.log("Returned place contains no geometry");
//                 return;
//             }
//             const icon = {
//                 url: place.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25),
//             };

//             // Create a marker for each place.
//             markers.push(
//                 new google.maps.Marker({
//                     map,
//                     icon,
//                     title: place.name,
//                     position: place.geometry.location,
//                 })
//             );

//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });
// }

// function placeMarker(location) {
//     new google.maps.Marker({
//         position: location,
//         map: map,
//         title: "New Marker",
//     });
// }

// document.getElementById('get-location').addEventListener('click', () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             const pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//             };

//             // Center the map at the user's location
//             map.setCenter(pos);

//             // Add a marker at the user's location
//             new google.maps.Marker({
//                 position: pos,
//                 map: map,
//                 title: "You are here!",
//             });
//         }, () => {
//             handleLocationError(true, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, map.getCenter());
//     }
// });

// function handleLocationError(browserHasGeolocation, pos) {
//     const infoWindow = new google.maps.InfoWindow({
//         position: pos,
//     });

//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }


let map;

function initMap() {
    const myLocation = { lat: 13.0384, lng: 77.5627 }; //Latitude: 28.6139 Longitude: 77.2090(Delhi)

    const mapOptions = {
        center: myLocation,
        zoom: 15,
        mapTypeControl: true,
        zoomControl: true,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
            },
        ]
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: "Delhi",
    });

    map.addListener('click', function(event) {
        placeMarker(event.latLng);
    });

    // Add a search box
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } 
            else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    document.getElementById("search-button").addEventListener("click", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

function placeMarker(location) {
    new google.maps.Marker({
        position: location,
        map: map,
        title: "New Marker",
    });
}

document.getElementById('get-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            map.setCenter(pos);

            new google.maps.Marker({
                position: pos,
                map: map,
                title: "You are here!",
            });
        }, () => {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
});

function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow({
        position: pos,
    });

    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}


// Dropbox design
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav li");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.classList.add("show");
            }
        });

        item.addEventListener("mouseleave", function() {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.classList.remove("show");
            }
        });
    });
});