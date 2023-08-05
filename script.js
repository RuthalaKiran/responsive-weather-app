console.log("hi");


// day month year
const time = new Date();
 //printing day
 const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const dayname = days[time.getDay()];
 console.log(dayname);
 //printing monthname
 const month = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
 const monthname = month[time.getMonth()];
 console.log(monthname);
 //printing date
 const date = time.getDate();
 console.log(date);
 const year = time.getFullYear();
 console.log(year);

 var extactdate = document.querySelector(".date");
 extactdate.innerHTML = `${dayname}` + ", " + `${monthname}` + " " + `${date}` + " " + `${year}`;


 //theme change
 const white = document.querySelector(".sunimg");
 const dark = document.querySelector(".moonimg");


 const fluid0 = document.querySelector(".fluid0");
 const cityinput0 = document.querySelector(".cityinput0");
 const cityname = document.querySelector(".cityname");
 const datetime = document.querySelector(".datetime");
 const imgtemp = document.querySelector(".img-temp");
 const extrastuff = document.querySelector(".extra-stuff"); 
 const windhumivisi = document.querySelector(".wind-humi-visi"); 
 const hrline = document.querySelector(".hrline"); 
 const dtls = document.querySelector(".dtls"); 

 
 

 white.onclick = function(){
    fluid0.classList.add("fluid1");
    cityinput0.classList.add("cityinput1");
    cityname.classList.add("citynamechange");
    datetime.classList.add("datetimechange");
    imgtemp.classList.add("img-tempchange");
    extrastuff.classList.add("extra-stuffchange");
    windhumivisi.classList.add("wind-humi-visichange");
    hrline.classList.add("hrlinechange");
    dtls.classList.add("dtlschange");
 }
 dark.onclick = function(){
    fluid0.classList.remove("fluid1");
    cityinput0.classList.remove("cityinput1");
    cityname.classList.remove("citynamechange");
    datetime.classList.remove("datetimechange");
    imgtemp.classList.remove("img-tempchange");
    extrastuff.classList.remove("extra-stuffchange");
    windhumivisi.classList.remove("wind-humi-visichange");
    hrline.classList.remove("hrlinechange");
    dtls.classList.remove("dtlschange");
 }


 //getting weather details

 const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
 const apikey = "4d7422a42aa3c94f483c4ca2b10e649d";
const searchbox = document.querySelector(".searchbox");
const searchbtn = document.querySelector(".searchbtn");
const imgchange = document.querySelector(".imgchange");


async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}` );
    if(response.status == 404){
        alert("enter valid city name");
    }
   else{
    const data = await response.json();
    console.log(data);

    document.querySelector(".cityname p").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".feels").innerHTML ="Now it feels like Temperature : " + Math.round(data.main.feels_like) + "  °C";
    document.querySelector(".atmosp").innerHTML ="The Atmospheric Pressure is : " + Math.round(data.main.pressure) + "  hPa";
    document.querySelector(".mintemp").innerHTML ="The Minimum Temperature is : " + Math.round(data.main.temp_min) + "  °C";
    document.querySelector(".maxtemp").innerHTML ="The Maximun Temperature is : " + data.main.temp_max + "  °C";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed*3.6) + "  km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "  %";
    document.querySelector(".visibility").innerHTML = data.visibility/1000 + "  km/h";
   
    if(data.weather[0].main == "Clouds"){
       imgchange.src="images/clouds.png";
    }
    if(data.weather[0].main == "Clear"){
       imgchange.src="images/clear.png";
    }
    if(data.weather[0].main == "Rain"){
       imgchange.src="images/rain.png";
    }
    if(data.weather[0].main == "Drizzle"){
       imgchange.src="images/drizzle.png";
    }
    if(data.weather[0].main == "Mist"){
       imgchange.src="images/mist.png";
    }
    if(data.weather[0].main == "Snow"){
       imgchange.src="images/snow.png";
    }
   
}
 


}
// checkweather("germany");
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
