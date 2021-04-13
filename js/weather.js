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


// $.ajax({
//     url: "source/city.list.min.json",
//     type: "json",
//     success: function(data) {

//     }
// });










let searchInput;
let btn = document.querySelector('#s-btn');
let key = document.querySelector('#input');

btn.addEventListener('click', clickBtn);
key.addEventListener('keyup', pressKey);





function clickBtn() {

  searchInput = document.querySelector('#input').value;

  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +searchInput + '&APPID=1f5db96c55e3ed2d7c867bd727652038';

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









function autocomplete(inp, arr) {

    var currentFocus;
  
    inp.addEventListener("input", function(f) {
        var a, b, i, val = this.value;
  
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
  
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
  
        this.parentNode.appendChild(a);
  
        for (i = 0; i < arr.length; i++) {
  
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
   
            b = document.createElement("DIV");
  
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
   
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  
            b.addEventListener("click", function(e) {
  
                inp.value = this.getElementsByTagName("input")[0].value;
  
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
  
    inp.addEventListener("keydown", function(f) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (f.keyCode == 40) {
  
          currentFocus++;
  
          addActive(x);
        } else if (f.keyCode == 38) {
          currentFocus--;
     
          addActive(x);
        } else if (f.keyCode == 13) {
  
          f.preventDefault();
          if (currentFocus > -1) {
  
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
  
      if (!x) return false;
  
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
  
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
  
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
  
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  
    document.addEventListener("click", function (f) {
        closeAllLists(f.target);
    });
  }







let cities = [];

$.ajax({
  url: "source/city.list.min.json",
  dataType: "json",
  success: function (data) {
    for (var i in data) {
      let allCity = String(data[i].name);
      cities.push(allCity);
    }
    autocomplete(document.getElementById("input"), cities);
  }
});



  




  // 함수 밖으로 결과값 가져오기
  // 가져온 데이터 배열로 만들기
  // 그거 해결하면 밑에 대입만 하면 끝!!
        



// autocomplete(document.getElementById("input"), countries);


