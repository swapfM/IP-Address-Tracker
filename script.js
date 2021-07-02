var a = document.getElementById("btn");


a.addEventListener('click', trackHandler);


function trackHandler(){
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

        document.getElementById("ip").innerHTML=ip;
        document.getElementById("reg").innerHTML=region;
        document.getElementById("cit").innerHTML=city;
        document.getElementById("pin").innerHTML=post;
        document.getElementById("time").innerHTML=time;
        document.getElementById("isp").innerHTML=isp;

    }

    xhr.send();
}