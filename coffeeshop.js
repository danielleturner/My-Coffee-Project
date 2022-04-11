
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
    document.getElementById("first").innerHTML="<img src='/Assets/IceCoffee.jpeg' />";
    document.getElementById("sizeSelection").innerHTML=`<div>
    <label></label>
        <select id"cost">
            <option id="1">Small</option>
            <option id="2">Medium</option>
            <option id="3">Large</option>
        </select>
        <button id="btn">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button> 
    </div>`

    document.getElementById("btn").addEventListener("click", totalPrice);

    function totalPrice() {
        document.getElementById("1").innerText=" $2.29 | Small";
        document.getElementById("2").innerText=" $3.29 | Medium";
        document.getElementById("3").innerText=" $4.29 | Large";
      }
    
      
      document.getElementById("reset").addEventListener("click", returnSize);
      
      function returnSize(){
    
        document.getElementById("1").innerHTML="Small";
        document.getElementById("2").innerHTML="Medium";
        document.getElementById("3").innerHTML="Large";
      }
  }

  
/**Functioin for Second Coffee */
  function myFunctionSecond() {
    document.getElementById("second").innerHTML="<img src='/Assets/mocha-latte.jpeg' />";
    document.getElementById("sizeSelectionOne").innerHTML=`<div>
    <label></label>
        <select>
            <option id="21">Small</option>
            <option id="22">Medium</option>
            <option id="23">Large</option>
        </select>
        <button id="btn2">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn2").addEventListener("click", totalPrice);

    function totalPrice() {
        document.getElementById("21").innerText=" $2.29 | Small";
        document.getElementById("22").innerText=" $3.29 | Medium";
        document.getElementById("23").innerText=" $4.29 | Large";
      }
    
      
      document.getElementById("reset").addEventListener("click", returnSize);
      
      function returnSize(){
    
        document.getElementById("21").innerHTML="Small";
        document.getElementById("22").innerHTML="Medium";
        document.getElementById("23").innerHTML="Large";
      }
  }

  /**Function for third Coffee */
  function myFunctionThird() {
    document.getElementById("third").innerHTML="<img src='/Assets/caramel-latte.jpeg' />";
    document.getElementById("sizeSelectionTwo").innerHTML=`<div>
    <label></label>
        <select>
            <option id="31">Small</option>
            <option id="32">Medium</option>
            <option id="33">Large</option>
        </select>
        <button id="btn3">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn3").addEventListener("click", totalPrice);

    function totalPrice() {
        document.getElementById("31").innerText=" $2.29 | Small";
        document.getElementById("32").innerText=" $3.29 | Medium";
        document.getElementById("33").innerText=" $4.29 | Large";
      }
    
      
      document.getElementById("reset").addEventListener("click", returnSize);
      
      function returnSize(){
    
        document.getElementById("31").innerHTML="Small";
        document.getElementById("32").innerHTML="Medium";
        document.getElementById("33").innerHTML="Large";
      }
  }

  /**Functioin for fourth Coffee */

  function myFunctionFourth() {
    document.getElementById("fourth").innerHTML="<img src='/Assets/peppermint-latte.jpeg' />";
    document.getElementById("sizeSelectionThree").innerHTML=`<div>
    <label></label>
        <select>
            <option id="41">Small</option>
            <option id="42">Medium</option>
            <option id="43">Large</option>
        </select>
        <button id="btn4">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn4").addEventListener("click", totalPrice);

    function totalPrice() {
        document.getElementById("41").innerText=" $2.29 | Small";
        document.getElementById("42").innerText=" $3.29 | Medium";
        document.getElementById("43").innerText=" $4.29 | Large";
      }
    
      
      document.getElementById("reset").addEventListener("click", returnSize);
      
      function returnSize(){
    
        document.getElementById("41").innerHTML="Small";
        document.getElementById("42").innerHTML="Medium";
        document.getElementById("43").innerHTML="Large";
      }
  }

  /*Function for fifth Coffee*/

  function myFunctionFifth() {
    document.getElementById("fifth").innerHTML="<img src='/Assets/hot-coffee.jpeg' />";
    document.getElementById("sizeSelectionFour").innerHTML=`<div>
    <label></label>
        <select>
            <option id="51">Small</option>
            <option id="52">Medium</option>
            <option id="53">Large</option>
        </select>
        <button id="btn5">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn5").addEventListener("click", totalPrice);

    function totalPrice() {
        document.getElementById("51").innerText=" $2.29 | Small";
        document.getElementById("52").innerText=" $3.29 | Medium";
        document.getElementById("53").innerText=" $4.29 | Large";
      }
    
      
      document.getElementById("reset").addEventListener("click", returnSize);
      
      function returnSize(){
    
        document.getElementById("51").innerHTML="Small";
        document.getElementById("52").innerHTML="Medium";
        document.getElementById("53").innerHTML="Large";
      }
  }

  /**myFunctionSixth = all javascript for 6th coffee */

  function myFunctionSixth(){
    document.getElementById("sixth").innerHTML="<img src='/Assets/hot-mocha-latte.jpeg' />";
    document.getElementById("sizeSelectionFive").innerHTML=`<div>
    <label></label>
        <select>
            <option id="61">Small</option>
            <option id="62">Medium</option>
            <option id="63">Large</option>
        </select>
        <button id="btn6">Total Price</button>
        <p></p>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn6").addEventListener("click", totalPrice);


    function totalPrice() {
      document.getElementById("61").innerText=" $2.29 | Small";
      document.getElementById("62").innerText=" $3.29 | Medium";
      document.getElementById("63").innerText=" $4.29 | Large";
    }
  
    
    document.getElementById("reset").addEventListener("click", returnSize);
    
    function returnSize(){
  
      document.getElementById("61").innerHTML="Small";
      document.getElementById("62").innerHTML="Medium";
      document.getElementById("63").innerHTML="Large";
    }
  }



  /**myFunctionSeventh = all javascript for 7th coffee */

  function myFunctionSeventh(){
    document.getElementById("seventh").innerHTML="<img src='/Assets/hot-caramel-latte.jpeg' />";
    document.getElementById("sizeSelectionSix").innerHTML=`<div>
    <label></label>
        <select id="cost6" class="cost-block">
            <option id="71">Small</option>
            <option id="72">Medium</option>
            <option id="73">Large</option>
        </select>
        <button id="btn7">Total Price</button>
        <button onclick="returnSize()" id="reset">see size</button>
    </div>`

    document.getElementById("btn7").addEventListener("click", totalPrice);


  function totalPrice() {
    document.getElementById("71").innerText=" $2.29 | Small";
    document.getElementById("72").innerText=" $3.29 | Medium";
    document.getElementById("73").innerText=" $4.29 | Large";
  }

  
  document.getElementById("reset").addEventListener("click", returnSize);
  
  function returnSize(){

    document.getElementById("71").innerHTML="Small";
    document.getElementById("72").innerHTML="Medium";
    document.getElementById("73").innerHTML="Large";
  }
    
  }



  /**myFunctionEight = all javascript for 8th coffee */

  function myFunctionEigth(){
    document.getElementById("eigth").innerHTML="<img src='/Assets/v-day-latte.jpeg' />";
    document.getElementById("sizeSelectionSeven").innerHTML=`<div>
    <label></label>
        <select id="cost7" class="cost-block">
            <option id="81">Small</option>
            <option id="82">Medium</option>
            <option id="83">Large</option>
        </select>
        <button id="btnz">Total Price</button>
        <p></p>
        <button onclick="returnSize()" id="reset">see size</button> 
        <button onclick="removeItem()" id="clearItem8">X</button>
    </div>`

    document.getElementById("btnz").addEventListener("click", totalPrice);

  function totalPrice() {
    document.getElementById("81").innerText=" $2.29 | Small";
    document.getElementById("82").innerText=" $3.29 | Medium";
    document.getElementById("83").innerText=" $4.29 | Large";
  }

  
  document.getElementById("reset").addEventListener("click", returnSize);
  
  function returnSize(){

    document.getElementById("81").innerHTML="Small";
    document.getElementById("82").innerHTML="Medium";
    document.getElementById("83").innerHTML="Large";
  }

  function removeItem(){
    document.getElementById('clearItem8').remove();
    document.getElementById('sizeSelectionSeven').removeAttribute();
  }

  }

  /**Function to clear cart */

  
