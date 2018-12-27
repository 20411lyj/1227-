$.ajax({
    type: "get",
    url: "https://api.openweathermap.org/data/2.5/weather",
     dataType: "json",
    data: {
        id : "1835848",
        appid: "7c16acc147fce4c1cf42e50a499627ff",
        units: "metric"
    },
   
    success: function (data) {
        console.log(data);
        var html = `
        <div class="w3-padding">
             <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        </div>
        <div class="w3-padding">현재온도:${data.main.temp}℃</div>
        <div class="w3-padding">현재날씨:${data.weather[0].main} / ${data.weather[0].description}</div>
        <div class="w3-padding">현재바람:${data.wind.speed} / ${data.wind.deg}deg</div>
        <div class="w3-padding">현재도시:${data.name}</div>
        `;
        $("#status").append(html);
    },
    error: function(xhr){
        console.log(xhr);
    }
});