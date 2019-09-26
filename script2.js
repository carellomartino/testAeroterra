let latitud = ''
let longitud = ''


function submitt(){
    console.log("entre")
    let y = document.getElementById("form-id")
    latitud = y.elements[3].value
    longitud = y.elements[4].value
    console.log('JOJOJOJOJ', latitud, longitud)
    for (let i = 0; i < y.length; i++) {
        console.log(y.elements[i].value)
        // if(i == 3){
        //     latitud = y.elements[i].value
        //     console.log("LALALALALLA", latitud)
        // } else if(i == 4){
        //     longitud = y.elements[i].value
        // }
      }
    }
    



function initMap() {
    console.log("lati", latitud)
    console.log("long", longitud)
    // var latitud = 
    
    var location = {lat: -25.344, lng: 131.036};
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: location});
    
    var marker = new google.maps.Marker({position: location, map: map});
  }