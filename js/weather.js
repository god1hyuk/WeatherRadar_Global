// rain effect

var nbDrop = 858; 

function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,2000);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}

createRain();

var now = new Date();
console.log(now);

var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds(); 
var tz = now.getUTCHours();
console.log(tz);


console.log(year + '/' + month + '/' + date + ' - ' + hours + ' : ' + minutes + ' : ' + seconds);



// screen in the beginning

// API 요청 URL 변수 
var url = 'http://api.openweathermap.org/data/2.5/weather?q=republic of korea&APPID=1f5db96c55e3ed2d7c867bd727652038';

    $.getJSON(url, function (data) {

        // 날씨 데이터 객체
        var sys = data.sys; // 국가명, 일출/일몰
        var city = data.name; // 도시명
        var city_id = data.id; // 도시명 id 코드
        var weather = data.weather; // 날씨 객체
        var main = data.main; // 온도 기압 관련 객체
        var humidity = data.main.humidity; // 습도
        var wmain = weather[0].main; // 구름 상태(Cloudiness)
        var w_id = weather[0].id; // 날씨 상태 id 코드
        var icon = weather[0].icon; // 날씨 아이콘 정보
        var country = sys.country; // 국가명
        var temp = main.temp; // 현재 온도
        var temp_min = main.temp_min // 최저 온도
        var temp_max = main.temp_max // 최고 온도
        var icon_url = "https://openweathermap.org/img/wn/" + icon;
        var lat = data.coord.lat; // 위도
        var lon = data.coord.lon; // 경도


        // function convertTime(t) {
        //   var st = new Date(t * 1000);
        //   var hours = st.getHours();
        //   var minutes = st.getMinutes();
        //   var seconds = st.getSeconds();

        //   return hours + ':' + minutes + ':' + seconds;
        // }

        // var currentTime = convertTime(dt);
        // // console.log(currentTime);


        $('#bg').html("<img src='images/" + icon +"_bg.jpg'>");

        if (icon.charAt(2) === 'n') {
          $('.star').css('display','block');
        } else {
          $('.star').css('display','none');
        }

        if (icon === '01d' || icon === '02d') {
          $('.sun').css('display','block');
        } else {
          $('.sun').css('display','none');
        }

        if (icon === '02d' || icon === '02n' || icon === '03d' || icon === '03n' || icon === '10d' || icon === '10n') {
          $('.clouds').css('display','block');
        } else {
          $('.clouds').css('display','none');
        }

        if (icon === '04d' || icon === '04n' || icon === '09d' || icon === '09n' || icon === '11d' || icon === '11n' || icon === '13d' || icon === '13n' || icon === '50d' || icon === '50n') {
          $('.d_clouds').css('display','block');
        } else {
          $('.d_clouds').css('display','none');
        }

        if (icon === '50d' || icon === '50n') {
          $('.smog').css('display','block');
        } else {
          $('.smog').css('display','none');
        }

        if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {
          $('.rain').css('display','block');
        } else {
          $('.rain').css('display','none');
        }

        if (icon === '13d' || icon === '13n') {
          $('.snowflakes').css('display','block');
        } else {
          $('.snowflakes').css('display','none');
        }

      });
      
      




// input events

let searchInput;
let btn = document.querySelector('#s-btn');
let key = document.querySelector('#input');

btn.addEventListener('click', clickBtn);
key.addEventListener('keyup', pressKey);

// click event

function clickBtn() {

  searchInput = document.querySelector('#input').value;

  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&units=metric&APPID=1f5db96c55e3ed2d7c867bd727652038';



  $.getJSON(url, function (data) {


    var sys = data.sys; // 국가명, 일출/일몰
    var city = data.name; // 도시명
    var city_id = data.id; // 도시명 id 코드
    var weather = data.weather; // 날씨 객체
    var main = data.main; // 온도 기압 관련 객체
    var humidity = data.main.humidity; // 습도
    var wmain = weather[0].main; // 구름 상태(Cloudiness)
    var w_id = weather[0].id; // 날씨 상태 id 코드
    var icon = weather[0].icon; // 날씨 아이콘 정보
    var country = sys.country; // 국가명
    var temp = main.temp; // 현재 온도
    var temp_min = main.temp_min // 최저 온도
    var temp_max = main.temp_max // 최고 온도
    var icon_url = "https://openweathermap.org/img/wn/" + icon;
    var lat = data.coord.lat; // 위도
    var lon = data.coord.lon; // 경도
    var dt = data.dt; // 시간

    function convertTime(t) {
      var st = new Date(t * 1000);
      var hours = st.getHours();
      var minutes = st.getMinutes();
      var seconds = st.getSeconds();
      return hours + ':' + minutes + ':' + seconds;
    }

    var currentTime = convertTime(dt);
    console.log(currentTime);

    

      $('#weather_info>.city').html(city + '/' + country);
      $('#weather_info .icon').html("<img src='images/" + icon + ".png'>");
      $('#weather_info .w_id').html(wmain);
      $('#weather_info .temp_min').html(
          parseInt(temp_min) + '&deg;min'
      );
      $('#weather_info .temp_max').html(
          parseInt(temp_max) + '&deg;max'
      );
      $('#weather_info .temp').html(parseInt(temp) + '&deg;');
      $('#bg').html("<img src='images/" + icon +"_bg.jpg'>");

      if (icon.charAt(2) === 'n') {
        $('#weather_info').css('color','#fff');
        $('.star').css('display','block');
      } else {
        $('#weather_info').css('color','#000');
        $('.star').css('display','none');
      }

      if (icon === '01d' || icon === '02d') {
        $('.sun').css('display','block');
      } else {
        $('.sun').css('display','none');
      }

      if (icon === '02d' || icon === '02n' || icon === '03d' || icon === '03n' || icon === '10d' || icon === '10n') {
        $('.clouds').css('display','block');
      } else {
        $('.clouds').css('display','none');
      }

      if (icon === '04d' || icon === '04n' || icon === '09d' || icon === '09n' || icon === '11d' || icon === '11n' || icon === '13d' || icon === '13n' || icon === '50d' || icon === '50n') {
        $('.d_clouds').css('display','block');
      } else {
        $('.d_clouds').css('display','none');
      }

      if (icon === '50d' || icon === '50n') {
        $('.smog').css('display','block');
      } else {
        $('.smog').css('display','none');
      }

      if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {
        $('.rain').css('display','block');
      } else {
        $('.rain').css('display','none');
      }

      if (icon === '13d' || icon === '13n') {
        $('.snowflakes').css('display','block');
      } else {
        $('.snowflakes').css('display','none');
      }

      $('#weather_info').css('opacity','1')
        .css('transition','all 0.6s linear');

      $('.text_logo').css('opacity','0').css('transition','all 0.8s ease-in-out');
      $('.symbol_logo').css('opacity','1').css('transition','all 0.8s ease-in-out 1s');

      document.querySelector('#input').value = null;

  });
}

// press enter key event

function pressKey(e) {
    if (e.keyCode === 13) {

        searchInput = document.querySelector('#input').value;

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&units=metric&APPID=1f5db96c55e3ed2d7c867bd727652038';

    $.getJSON(url, function (data) {

      var sys = data.sys; // 국가명, 일출/일몰
      var city = data.name; // 도시명
      var city_id = data.id; // 도시명 id 코드
      var weather = data.weather; // 날씨 객체
      var main = data.main; // 온도 기압 관련 객체
      var humidity = data.main.humidity; // 습도
      var wmain = weather[0].main; // 구름 상태(Cloudiness)
      var w_id = weather[0].id; // 날씨 상태 id 코드
      var icon = weather[0].icon; // 날씨 아이콘 정보
      var country = sys.country; // 국가명
      var temp = main.temp; // 현재 온도
      var temp_min = main.temp_min // 최저 온도
      var temp_max = main.temp_max // 최고 온도
      var icon_url = "https://openweathermap.org/img/wn/" + icon;
      var lat = data.coord.lat; // 위도
      var lon = data.coord.lon; // 경도

      console.log(lat + ' / ' + lon);


      var oneCall_url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&units=metric&appid=1f5db96c55e3ed2d7c867bd727652038';

      console.log(oneCall_url);
      
      $.getJSON(oneCall_url, function (c) {
        
        for (var i = 0; i < 48; i++) {
          var ctime = c.hourly[i].dt;
          var ctemp = c.hourly[i].temp;
          // console.log(parseInt(ctemp));
          var cicon = c.hourly[i].weather[0].icon;
          // console.log(cicon);

          function convertTime(t) {
            var st = new Date(t * 1000);
            var hours = st.getHours();
            return hours;
          }

          var currentTime = convertTime(ctime);

          if (i === 0) {
            currentTime = 'Now';
          }

          var hourly = '<div>' + '<div>' + currentTime + '</div>' + '<div>' + '<img src="images/' + cicon + '.png">' + '</div>' + '<div>' + parseInt(ctemp) + '&deg' + '</div>' + '</div>';

          console.log(hourly);
          
          $('.hourly').append(hourly);
        }
      });
      $('.hourly *').remove();

        $('#weather_info>.city').html(city + '/' + country);
        $('#weather_info .icon').html("<img src='images/" + icon + ".png'>");
        $('#weather_info .w_id').html(wmain);
        $('#weather_info .temp_min').html(
            parseInt(temp_min) + '&deg;min'
        );
        $('#weather_info .temp_max').html(
            parseInt(temp_max) + '&deg;max'
        );
        $('#weather_info .temp').html(parseInt(temp) + '&deg;');
        $('#bg').html("<img src='images/" + icon +"_bg.jpg'>");
        
        if (icon.charAt(2) === 'n') {
          $('#weather_info').css('color','#fff');
          $('.star').css('display','block');
        } else {
          $('#weather_info').css('color','#000');
          $('.star').css('display','none');
        }

        if (icon === '01d' || icon === '02d') {
          $('.sun').css('display','block');
        } else {
          $('.sun').css('display','none');
        }

        if (icon === '02d' || icon === '02n' || icon === '03d' || icon === '03n' || icon === '10d' || icon === '10n') {
          $('.clouds').css('display','block');
        } else {
          $('.clouds').css('display','none');
        }

        if (icon === '04d' || icon === '04n' || icon === '09d' || icon === '09n' || icon === '11d' || icon === '11n' || icon === '13d' || icon === '13n' || icon === '50d' || icon === '50n') {
          $('.d_clouds').css('display','block');
        } else {
          $('.d_clouds').css('display','none');
        }

        if (icon === '50d' || icon === '50n') {
          $('.smog').css('display','block');
        } else {
          $('.smog').css('display','none');
        }

        if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {
          $('.rain').css('display','block');
        } else {
          $('.rain').css('display','none');
        }

        if (icon === '13d' || icon === '13n') {
          $('.snowflakes').css('display','block');
        } else {
          $('.snowflakes').css('display','none');
        }

        $('#weather_info').css('opacity','1')
        .css('transition','all 0.6s linear');


        $('.text_logo').css('opacity','0').css('transition','all 0.8s ease-in-out');
        $('.symbol_logo').css('opacity','1').css('transition','all 0.8s ease-in-out 1s');

        document.querySelector('#input').value = null;
        
    });
      
  } 
}


// // input autocomplete

// function autocomplete(inp, arr) {

//     var currentFocus;
  
//     inp.addEventListener("input", function(f) {
//         var a, b, i, val = this.value;
  
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
  
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
  
//         this.parentNode.appendChild(a);
  
//         for (i = 0; i < arr.length; i++) {
  
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
   
//             b = document.createElement("DIV");
  
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
   
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  
//             b.addEventListener("click", function(e) {
  
//                 inp.value = this.getElementsByTagName("input")[0].value;
  
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
  
//     inp.addEventListener("keydown", function(f) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (f.keyCode == 40) {
  
//           currentFocus++;
  
//           addActive(x);
//         } else if (f.keyCode == 38) {
//           currentFocus--;
     
//           addActive(x);
//         } else if (f.keyCode == 13) {
//           closeAllLists();
//           $('#weather_info').css('opacity','1')
//           .css('transition','all 0.6s linear');
//           $('.text_logo').css('opacity','0').css('transition','all 0.8s ease-in-out');
//           $('.symbol_logo').css('opacity','1').css('transition','all 0.8s ease-in-out 1s');
//           f.preventDef,ault();
//           if (currentFocus > -1) {
  
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
  
//       if (!x) return false;
  
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
  
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
  
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
  
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
  
//     document.addEventListener("click", function (f) {
//         closeAllLists(f.target);
//     });
//   }

// let cities = [];

// $.ajax({
//   url: "source/city.list.min.json",
//   dataType: "json",
//   success: function (data) {
//     for (var i in data) {
//       let allCity = String(data[i].name);
//       cities.push(allCity);
//     }
//     autocomplete(document.getElementById("input"), cities);
//   }
// });