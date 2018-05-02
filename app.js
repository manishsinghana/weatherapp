$(document).ready(function () {

		getWeather("jhunjhunu");

   // Show Weather on Submit

   $('#submit_btn').on('click', function() {
   		var get_search_term = $("#search_term").val();
        getWeather(get_search_term);
        return false;
     });

function getWeather(search_term) {
		var url = "https://api.openweathermap.org/data/2.5/weather?q=";
        var key = "&appid=333c2d80b4f7f8bbe936f0cf6aabafdd";
        $.ajax({
            url: url + search_term + "&units=metric" + key,
            dataType: "json",
            type: "GET",
            success: function(data) {

                $("#city_name").html(data.name);
                $("#weather_type").html(data.weather[0].main.toUpperCase());
                $("#current_temp").html(data.main.temp.toFixed(1) + " °c");
                $("#min_temp").html(data.main.temp_min.toFixed(1) + " °c");
                $("#max_temp").html(data.main.temp_max.toFixed(1) + " °c");
                $("#humidity").html(data.main.humidity + "%");
                $("#wind").html(data.wind.speed + "KM/h");
                console.log(data.main.temp.toFixed(1));
                console.log(data);
                console.log(data.weather[0].main);

                var sunrise_number = data.sys.sunrise;
                var sunrise_number = sunrise_number * 1000;
                console.log(sunrise_number);

                $("#sunrise").html(format_time(new Date(sunrise_number)));


            }
        });
        // Show day and date
        var date = new Date();
        var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
        // show current day 
        $("#current_day").html(weekDay[date.getDay()]);
        // show current date
        $("#current_date").html(formatDate(date));
	
	}; // End of getWeather Function-------------------------//

function format_time(date_obj) {
        // formats a javascript Date object into a 12h AM/PM time string
        var hour = date_obj.getHours();
        var minute = date_obj.getMinutes();
        var amPM = (hour > 11) ? "PM" : "AM";
        if (hour > 12) {
            hour -= 12;
        } else if (hour == 0) {
            hour = "12";
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        return hour + ":" + minute + amPM;
    }

function formatDate(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }	
	
	       
});
