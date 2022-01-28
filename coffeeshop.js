















//menu pop up function ice coffee cnt1
function menu () {
    var popup = document.getElementById("iceCoffee");
    popup.classList.toggle("show");
}

function mocha() {
    var popup = document.getElementById("myMocha");
    popup.classList.toggle("show");
}

function good() {
    var popup = document.getElementById("brown");
    popup.classList.toggle("show");
}

function coldLatte() {
    var popup = document.getElementById("cold");
    popup.classList.toggle("show")
}

//menu pop up function ice coffee cnt2

function coffee() {
    var popup = document.getElementById("myCoffee");
    popup.classList.toggle("show")
}

function hotMocha() {
    var popup = document.getElementById("hot");
    popup.classList.toggle("show")
}

function caramel() {
    var popup = document.getElementById("myCaramel");
    popup.classList.toggle("show")
}

function seasonal() {
    var popup = document.getElementById("valentine");
    popup.classList.toggle("show")
}

// Random photo genrator function using API

// target the attribute (this is where the data will be stored retrieved from the api)
$("#blueman").attr('src', '??')

// now i'm going to make the request from the api
$.ajax("https://dog.ceo/api/breeds/image/random");

// once the request is made I need to recieve the response by using .done method
$.ajax("https://dog.ceo/api/breeds/image/random").done()

// .done accepts a function as a parameter so I need to pass in function in the .done()
$.ajax("https://dog.ceo/api/breeds/image/random").done(function (data, status){
    console.log(data.message) 
    //link string retrieved "data.message" into value of element being changed(id="blueman")
    $("#blueman").attr("src", data.message)
    console.log(status)
})

.fail(function (){
    console.log("something went woof!?")
})

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
// 'https://randomuser.me/api/?results=5000'

// document.getElementById("ICF3").addEventListener("click", function(){
//     document.getElementById("goodstuff").innerHTML = "1/2 cup milk";
// });
