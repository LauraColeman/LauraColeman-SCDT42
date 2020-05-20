<!--- window.alert("Hello"); --->
console.log(navigator.platform);
console.log(navigator.appName);


window.cookie="username=Laura;expires=Thu, 01 Jan, 2021 00:00:00 UTC path; path=/;";

 

function getLocation()
{
    
    if (navigator.geolocation)
       
    {
            navigator.geolocation.getCurrentPosition(showPosition);
            
        
    }
    
    else
   
    {
        
        document.getElementById("weather").innerHTML = "Geolocation is not supported by this browser";
    }
}



function showPosition(position)

{

    var request = new XMLHttpRequest();
    
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/388d391da2b50888532a0ac3e062d4b1/' + position.coords.latitude + ',' + position.coords.longitude;
    
    
    request.open("GET", url);
    request.send();
    request.onreadystatechange = function()
    {
        if(request.readyState == 4 && request.status == 200)
        
        {
            var data = JSON.parse(request.responseText);
            console.log(data.currently.summary);
            document.getElementById("weather").innerHTML = data.currently.summary;
        }
        
        
        
    }
    
    
    
    
    
    //document.getElementById('weather').innerHTML ="Latitude:" + position.coords.latitude + "<br>Longitude:" + position.coords.longitude;
    
    //console.log("test");
 }

    document.body.addEventListener("onload", getLocation());
