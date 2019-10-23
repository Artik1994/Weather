$(function(){
    const ACCESS_KEY = "610c6bd95ee567c49b4da35bfbb0a79d"; 
    makeAPICall("http://api.weatherstack.com/current?access_key=" + ACCESS_KEY + "&query=Minsk&unit=m&callback=test");
    // createAPI(getWeather());
        function createTodayCard(response) {
            const weatherFullData = {        
            city: response.location.name,
            country: response.location.country,
            time: response.location.localtime,
            icon: response.current.weather_icons[0],
            iconDescription: response.current.weather_descriptions[0],
            temperature: response.current.temperature,
            wind: response.current.wind_speed,
            precip: response.current.precip,
            pressure: response.current.pressure
            }
            var temp = "\u00BA";
    // $("<div>").text(JSON.stringify(weatherFullData)).appendTo('body');
    $(".city").append(weatherFullData.city + ",  " + weatherFullData.country);
    $(".time").append(weatherFullData.time);
    $(".picture").append('<img src="' + weatherFullData.icon + '" />' + "<br>" + weatherFullData.iconDescription);
    $(".temperature").append(weatherFullData.temperature + temp + " C");
    $(".pressure").append("Wind:  " + weatherFullData.wind + " kph" + "<br>" + "Precip:  " + weatherFullData.precip + "  mm" + "<br>" + "Pressure:  " + weatherFullData.pressure + "  mb")
        }
        function makeAPICall(url) {
            $.ajax({
                dataType: "jsonp",
                url: url,
                success: function (resp) {
                    createTodayCard(resp);
                },
                error: function (err, status) {
                    // действия если ошибка
                }
            });
        }
});








$(function(){
    makeAPICall("http://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=Metric&appid=f92327947ec4050488ebcd79d2d8e1df");
    // createAPI(getWeather());
            
        function createTodayCard_1(response) {
            const weatherFullData_1 = {
                day_1: response.list[0].dt,
                day_2: response.list[4].dt,
                day_3: response.list[8].dt,
                day_4: response.list[12].dt,
                day_5: response.list[16].dt,
                temperature_1: response.list[0].main.temp,
                temperature_2: response.list[5].main.temp,
                temperature_3: response.list[10].main.temp,
                temperature_4: response.list[15].main.temp,
                temperature_5: response.list[20].main.temp,
                weather_1: "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png",
                weather_2: "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png",
                weather_3: "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png",
                weather_4: "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png",
                weather_5: "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png"
                
            }
    // $("<div>").text(JSON.stringify(weatherFullData)).appendTo('body');
    $(".day_1").append(new Date (weatherFullData_1.day_1 * 1000));
    $(".day_2").append(new Date (weatherFullData_1.day_2 * 1000));
    $(".day_3").append(new Date (weatherFullData_1.day_3 * 1000));
    $(".day_4").append(new Date (weatherFullData_1.day_4 * 1000));
    $(".day_5").append(new Date (weatherFullData_1.day_5 * 1000));
    $(".temperature_1").append(weatherFullData_1.temperature_1);
    $(".temperature_2").append(weatherFullData_1.temperature_2);
    $(".temperature_3").append(weatherFullData_1.temperature_3);
    $(".temperature_4").append(weatherFullData_1.temperature_4);
    $(".temperature_5").append(weatherFullData_1.temperature_5);
    $(".weather_1").append("<img src='" + weatherFullData_1.weather_1 + "'/>");
    $(".weather_2").append("<img src='" + weatherFullData_1.weather_2 + "'/>");
    $(".weather_3").append("<img src='" + weatherFullData_1.weather_3 + "'/>");
    $(".weather_4").append("<img src='" + weatherFullData_1.weather_4 + "'/>");
    $(".weather_5").append("<img src='" + weatherFullData_1.weather_5 + "'/>");
    let n = new Date (weatherFullData_1.day_1 * 1000);
console.log(n.getDay());

        }
        function makeAPICall(url) {
            $.ajax({
                dataType: "json",
                url: url,
                success: function (resp) {
                    createTodayCard_1(resp);
                },
                error: function (err, status) {
                    // действия если ошибка
                }
            });
        }
});

