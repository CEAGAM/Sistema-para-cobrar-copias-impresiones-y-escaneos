var currentNumber = 0;
var wrapper = document.getElementById("currentNumber");
var pricexcopy = 0.50;
var pcopy = currentNumber * pricexcopy
var total = pcopy

var currentNumber2 = 0;
var wrapper2 = document.getElementById("currentNumber2");
var pricexprint = 2;
var pprint = currentNumber2 * pricexprint

var currentNumber3 = 0;
var wrapper3 = document.getElementById("currentNumber3");
var pricexscan = 3;
var pscan = currentNumber3 * pricexscan

function refreshColor(){
  if (currentNumber < 0) {
    wrapper.style.color = 'red';
  } else {
    wrapper.style.color = '#230C33';
  }  
}

function increment() {
  currentNumber = currentNumber + 1;
  refreshColor();
  wrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  refreshColor();
  wrapper.innerHTML = currentNumber;
}

function precio(){
  total = currentNumber * pricexcopy;
  wrapper.innerHTML = total;
  total.reset();
}

function cleanerc(){
  increment();
}

/*=====Código botones impresiones=====*/

function refreshColor(){
  if(currentNumber2 < 0){
    wrapper2.style.color = 'red';
  }else{
    wrapper2.style.color = '#230c33';
  }
}

function increment2(){
  currentNumber2 = currentNumber2 + 1;
  refreshColor();
  wrapper2.innerHTML = currentNumber2;
}

function decrement2(){
  currentNumber2 = currentNumber2 - 1;
  refreshColor();
  wrapper2.innerHTML = currentNumber2;
}

function precioi(){
  pprint = currentNumber2 * pricexprint;
  wrapper2.innerHTML = pprint;
}

/*=====Código botones escaneo=====*/

function refreshColor(){
  if(currentNumber3 < 0){
    wrapper3.style.color = 'red';
  }else{
    wrapper3.style.color = '#230c33';
  }
}

function increment3(){
  currentNumber3 = currentNumber3 + 1;
  refreshColor();
  wrapper3.innerHTML = currentNumber3;
}

function decrement3(){
  currentNumber3 = currentNumber3 - 1;
  refreshColor();
  wrapper3.innerHTML = currentNumber3;
}

function precios(){
  pscan = currentNumber3 * pricexscan;
  wrapper3.innerHTML = pscan;
}