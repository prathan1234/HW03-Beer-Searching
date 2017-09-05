(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

var getBeersInformation = function getBeersInformation() {
    return fetch(api);
};

getBeersInformation().then(function (response) {
    return response.json();
}).catch(function (e) {
    return console.error('You failed');
}).then(function (response) {
    obj = response;
    createTable();
});

function createTable() {
    var txt = "<table border='1px' style='border-collapse: collapse; width: 100%'>";

    txt += "<tr style='background-color: #DDDDDD;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "</tr>";

    for (var x = 0; x < obj.length; x++) {
        console.log(obj[x].name);
        txt += "<tr>";
        txt += "<td>" + obj[x].name + "</td>";
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

},{}]},{},[1]);
