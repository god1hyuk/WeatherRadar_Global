// // // API 요청 URL 변수 
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=gimpo-si&APPID=1f5db96c55e3ed2d7c867bd727652038';

//     $.getJSON(url, function (data) {

//         // 날씨 데이터 객체
//         var sys = data.sys; // 국가명, 일출/일몰
//         var city = data.name; // 도시명
//         var weather = data.weather; // 날씨 객체
//         var main = data.main; // 온도 기압 관련 객체

//         var wmain = weather[0].main; // 구름 상태(Cloudiness)
//         var w_id = weather[0].id; // 날씨 상태 id 코드
//         var icon = weather[0].icon; // 날씨 아이콘 정보
//         var country = sys.country; // 국가명
//         var temp = main.temp; // 현재 온도
//         var temp_min = main.temp_min // 최저 온도
//         var temp_max = main.temp_max // 최고 온도
//         var icon_url = "https://openweathermap.org/img/wn/" + icon;

//         $('#weather_info>.city').html(city + '/' + country);
//         $('#weather_info .icon').html("<img src='images/" + icon + ".png'>");
//         $('#weather_info .w_id').html(wmain);
//         $('#weather_info .temp_min').html(
//             parseInt(temp_min - 273.15) + '&deg;min'
//         );
//         $('#weather_info .temp_max').html(
//             parseInt(temp_max - 273.15) + '&deg;max'
//         );
//         $('#weather_info .temp').html(parseInt(temp - 273.15) + '&deg;');

//         document.querySelector('#input').value = null;
//     });


// // 지역 고정







let searchInput;
let btn = document.querySelector('#s-btn');
let key = document.querySelector('#input');

btn.addEventListener('click', clickBtn);
key.addEventListener('keyup', pressKey);

function clickBtn() {

    searchInput = document.querySelector('#input').value;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
            searchInput + '&APPID=1f5db96c55e3ed2d7c867bd727652038';

    $.getJSON(url, function (data) {

        // 날씨 데이터 객체
        var sys = data.sys; // 국가명, 일출/일몰
        var city = data.name; // 도시명
        var weather = data.weather; // 날씨 객체
        var main = data.main; // 온도 기압 관련 객체

        var wmain = weather[0].main; // 구름 상태(Cloudiness)
        var w_id = weather[0].id; // 날씨 상태 id 코드
        var icon = weather[0].icon; // 날씨 아이콘 정보
        var country = sys.country; // 국가명
        var temp = main.temp; // 현재 온도
        var temp_min = main.temp_min // 최저 온도
        var temp_max = main.temp_max // 최고 온도
        var icon_url = "https://openweathermap.org/img/wn/" + icon;

        $('#weather_info>.city').html(city + '/' + country);
        $('#weather_info .icon').html("<img src='images/" + icon + ".png'>");
        $('#weather_info .w_id').html(wmain);
        $('#weather_info .temp_min').html(
            parseInt(temp_min - 273.15) + '&deg;min'
        );
        $('#weather_info .temp_max').html(
            parseInt(temp_max - 273.15) + '&deg;max'
        );
        $('#weather_info .temp').html(parseInt(temp - 273.15) + '&deg;');

        document.querySelector('#input').value = null;

    });

}

function pressKey(e) {
    if (e.keyCode === 13) {

        searchInput = document.querySelector('#input').value;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
            searchInput + '&APPID=1f5db96c55e3ed2d7c867bd727652038';

    $.getJSON(url, function (data) {

        // 날씨 데이터 객체
        var sys = data.sys; // 국가명, 일출/일몰
        var city = data.name; // 도시명
        var weather = data.weather; // 날씨 객체
        var main = data.main; // 온도 기압 관련 객체

        var wmain = weather[0].main; // 구름 상태(Cloudiness)
        var w_id = weather[0].id; // 날씨 상태 id 코드
        var icon = weather[0].icon; // 날씨 아이콘 정보
        var country = sys.country; // 국가명
        var temp = main.temp; // 현재 온도
        var temp_min = main.temp_min // 최저 온도
        var temp_max = main.temp_max // 최고 온도
        var icon_url = "https://openweathermap.org/img/wn/" + icon;

        $('#weather_info>.city').html(city + '/' + country);
        $('#weather_info .icon').html("<img src='images/" + icon + ".png'>");
        $('#weather_info .w_id').html(wmain);
        $('#weather_info .temp_min').html(
            parseInt(temp_min - 273.15) + '&deg;min'
        );
        $('#weather_info .temp_max').html(
            parseInt(temp_max - 273.15) + '&deg;max'
        );
        $('#weather_info .temp').html(parseInt(temp - 273.15) + '&deg;');

        document.querySelector('#input').value = null;
    });

    } 
}


// search

















// var allCity = '../source/city.list.min.json'; $.getJSON (allCity,
// function(data){     var city2 = data.name;     var cityLength = city2.length;
// var inputLength = ex.length;     if (cityLength[0] === ) });