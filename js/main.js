//ES6
var obj;
var param = "beer_name";
var val = "";
var api_string = "";

if (param != "" && val != "") {
    api_string = "?" + param + "=" + val;
}

var api = 'https://api.punkapi.com/v2/beers' + api_string;
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

function createTable() {
    var txt = "";
    txt += "<b>Beer name</b>" + "<br><br>";
    for (var x = 0; x < obj.length; ++x) {
        console.log(obj[x].name);
        txt += obj[x].name + "<br>";
    }
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
