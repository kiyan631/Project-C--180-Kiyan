let latitude,longitude,destination ;


$(document).ready(function(){
    alert("Please allow the device to know your location")
    initGeolocation();
})



$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    } else {
        alert("Sorry, your browser does not support geolocation services. ");
    }
}


function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude


    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'


    var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center: [longitude,latitude],
    zoom:4
    });

    var img1 = document.querySelector("#amber")
    var marker1 = new mapboxgl.Marker({
        element:img1
    })
    .setLngLat([75.85133,26.98547])
    .addTo(map);



    var img2 = document.querySelector("#Gateway")
    var marker2 = new mapboxgl.Marker({
        element:img2
    })
    .setLngLat([72.8347,18.9220])
    .addTo(map);



    var img3 = document.querySelector("#Qutub")
    var marker3 = new mapboxgl.Marker({
     element:img3
    })
    .setLngLat([77.1855,28.5245])
    .addTo(map);

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            mapboxgl : mapboxgl
        }).on('result',function(e){
            destination = e.result.center
        })
    );
}