const geoLocation = document.getElementById("getlocation");

geoLocation.addEventListener("click",evt=>{
    if('geolocation' in navigator){
navigator.geolocation.getCurrentPosition(position=>{
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;



const main =document.getElementById("location");

const box= document.createElement("p");
box.className="latitude"
box.innerHTML= `Your latitude is - ${latitude}` ;

const box2 = document.createElement("p");
box2.className="longitude"
box2.innerHTML= `Your longitude is - ${longitude}` ;

main.append(box,box2);



/*  

let googleMapURL = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=17&size=400*400`;
const mapImage = document.getElementById("mapImage");
mapImage.src = googleMapURL;

*/


console.log(latitude,longitude);
},error=>{
    console.log(error.code);
})
    }else{
        console.log("not supported")
    }
})