var a = document.getElementById("btn");
var map;
trackHandler(0);
a.addEventListener('click',(a)=>trackHandler(a));

     function trackHandler(a){
    let ipAddress = document.getElementById("ip").value;
    
    const xhr = new XMLHttpRequest();
    xhr.responseType='json';
    xhr.open('GET', "https://geo.ipify.org/api/v1?apiKey=at_O3mmgCDqzFdDpYIojtUYaBiPVzmzg&ipAddress="+ipAddress,true);
    
    xhr.onload=()=>{
        var ans = xhr.response;
      var ip = ans["ip"];
      var region= ans["location"]["region"];
      var city = ans["location"]["city"];
      var post=ans["location"]["postalCode"];
        var time = ans["location"]["timezone"];
        time = "UTC "+time;
        var isp=ans["isp"];
        var lat = ans["location"]["lat"];
      var lon = ans["location"]["lng"]
        document.getElementById("ipd").innerHTML=ip;
        document.getElementById("reg").innerHTML=region;
        document.getElementById("cit").innerHTML=city;
        document.getElementById("pin").innerHTML=post;
        document.getElementById("time").innerHTML=time;
        document.getElementById("isp").innerHTML=isp;
      
        console.log(lat,lon)
        if (map != undefined) { map.remove(); } 
        map = L.map('mapDiv').setView([lat, lon], 15);
        
        // set map tiles source
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map);
        
        // add marker to the map
        marker = L.marker([lat, lon]).addTo(map);
        
        // add popup to the marker
        // marker.bindPopup("<b>ACME CO.</b><br />This st. 48<br />New York").openPopup();
        

    }

    xhr.send();
}


