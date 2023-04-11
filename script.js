const geoLocation = document.getElementById("getlocation");

geoLocation.addEventListener("click",evt=>{
    if('geolocation' in navigator){
navigator.geolocation.getCurrentPosition(position=>{
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;



const main =document.getElementById("location");

const box= document.createElement("p");
box.className="latitude"
box.innerHTML= `Your latitude is - ${latitude}` 

const box2 = document.createElement("p");
box2.className="longitude"
box2.innerHTML= `Your longitude is - ${longitude}` ;

main.append(box,box2);

// alert(`Your Latitide is - ${latitude} 
// Your Longitude is -${longitude}`)




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


const myButton = document.getElementById("myButton");
const iframeContainer = document.getElementById("iframeContainer");

myButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14719.170810667922!2d75.8854473!3d22.7359451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681207197738!5m2!1sen!2sin";referrerpolicy="no-referrer-when-downgrade";
    iframe.width = "50%";
    iframe.height = "600px";
    iframeContainer.appendChild(iframe);
  });