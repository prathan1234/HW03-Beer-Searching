//ES6
var obj;
var api;
var param = [];
var val = [];
var api_string = "";

// if (param != "" && val != "") {
//     api_string += "?" + param + "=" + val;
// }

setapi();

function setapi() {
    api = 'https://api.punkapi.com/v2/beers' + api_string;
    console.log(api);

    const getBeersInformation = () =>
    fetch(api);

    getBeersInformation()
        .then(response => response.json())
        .catch(e => console.error('You failed'))
        .then(response => {
        obj = response;
        createTable();
    });
}

function createTable() {
    var txt = "<table border='1px' style='border-collapse: collapse; width: 100%'>";

    txt += "<tr style='background-color: #DDDDDD;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "First brewed" + "</th>";
    txt += "<th>" + "pH" + "</th>";
    txt += "</tr>";

    for (var x = 0; x < obj.length; x++) {
        console.log(obj[x]);
        txt += "<tr>";
        txt += "<td>" + obj[x].name + "</td>";
        txt += "<td>" + obj[x].abv + "</td>";
        txt += "<td>" + obj[x].food_pairing + "</td>";
        txt += "<td>" + obj[x].ingredients.yeast + "</td>";
        txt += "<td>" + obj[x].first_brewed + "</td>";
        txt += "<td>" + obj[x].ph + "</td>";
        txt += "</tr>";
    }

    txt += "</table>";
    document.getElementById("table_result").innerHTML = txt;

    // var dbParam, xmlhttp, myObj, x, txt = "";
    // dbParam = JSON.stringify(obj);
    // xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         myObj = JSON.parse(this.responseText);
    //         txt += "<table border='1px solid black'>"
    //         txt += "<tr><th>" + "Beer name" + "</th></tr>";
    //         for (x in myObj) {
    //             txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    //         }
    //         txt += "</table>"
    //         document.getElementById("table_result").innerHTML = txt;
    //     }
    // };
    // xmlhttp.open("POST", "json_demo_db_post.php", true);
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xmlhttp.send("x=" + dbParam);
}

$(document).ready(function () {
   $(".btn_search").click(function () {
       onclick();
   });
});

function onclick() {
    var x = 0;
    var search_name = document.getElementById("beer_name").value;
    var search_food = document.getElementById("food").value;
    var search_yeast = document.getElementById("yeast").value;

    if (search_name == "" && search_food == "" && search_yeast == "") {
        api_string = "";
    } else {
        api_string = "";
        api_string += "?";

        while (true) {
            if (search_name != "") {
                param[x] = "beer_name";
                val[x] = search_name;
                search_name = "";
            }
            if (search_food != "") {
                param[x] = "food";
                val[x] = search_food;
                search_food = "";
            }
            if (search_yeast != "") {
                param[x] = "yeast";
                val[x] = search_yeast;
                search_yeast = "";
            }

            if (x == 0) {
                api_string += param[x] + "=" + val[x];
            } else {
                api_string += "&" + param[x] + "=" + val[x];
            }

            if (search_name == "" && search_food == "" && search_yeast == "") {
                break;
            }
            x++;
        }
    }

    console.log(api_string);
    setapi();
    // createTable();

    // https://api.punkapi.com/v2/beers?beer_name=Buzz&food=spicy
}