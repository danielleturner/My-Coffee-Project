// Event listiner to add to checkout cart

// $('#LIC, #MIC, #SIC').click(function (){
//     // alert('clicked')
    
//     let sizeClicked = $(this).val()
    
    
//         let coffee = [
//             {   size: "LGIC",
//                 coffeesize: "Large",
//                 price: "$3.59",
//             },
//             {
//                 size: "MDIC",
//                 coffeesize: "Medium",
//                 price: "$4.59",
//             },
//             {
//                 size: "SMIC",
//                 coffeesize: "Small",
//                 price: "$4.59",
    
//             }
//         ];
    
//         // if (sizeClicked == coffee[0].size){
            
//         //     alert('yaay') 
//         // } else {
//         //     alert('no')
//         // } 
//         ('#cart').append("");
//     })

    

    // var addItemId = 0;
    // function addToCart(card1){
    //     addItemId += 1;
    //     var selectedItem = document.createElement('div');
    //     selectedItem.classList.add('cartImg');
    //     selectedItem.setAttribute('id', addItemId);
    //     var img = document.createElement('img');
    //     img.setAttribute('src', item.children[0].currentSrc)
    //     var cartItems = document.getElementById('item1');
    //     selectedItem.append(img);
    //     cartItems.append(selectedItem);
    // }

    // $
    // // $(document).ready(function(){
    // //     $("#LIC").click(function(){
    // //         console.log("clicked")
    // //       $("").append("<h2>Hello</h2>. ");
    // //     });
    // //   });

    // //   function largeIceCof() {
    // //     location.replace("http://127.0.0.1:5500/coffeecheckout.html")
    // //   }

    //   function largeIceCof() {
    //     document.getElementById("classicCoffee").insertAdjacentHTML("afterend",
    //         "<h3>This is the text which has been inserted by JS</h3>");
    // }
















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

/**To append chosen animals to different page */
function myFunction() {
    document.getElementById("demo").innerHTML="<img src='/Assets/IceCoffee.jpeg' />";
    document.getElementById("sizeSelection").innerHTML=`<div>
    <label></label>
        <select>
            <option id="1">Small</option>
            <option id="2">Medium</option>
            <option id="3">Large</option>
        </select>
    </div>`

    
        // document.getElementById('price').innerHTML="$3.29";
  }

  function myFunctionSecond() {
    document.getElementById("second").innerHTML="<img src='/Assets/caramel-latte.jpeg' />";
    document.getElementById("sizeSelectionOne").innerHTML=`<div>
    <label></label>
        <select>
            <option id="1">Small</option>
            <option id="2">Medium</option>
            <option id="3">Large</option>
        </select>
    </div>`
  }