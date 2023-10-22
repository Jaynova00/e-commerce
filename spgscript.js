
$(function () {
  $('#prize').on("click", function (event) {
    event.preventDefault();
    prize();

  });
})


function prize(){
  let answer= 'red';
  let guess = prompt('Guess the right color')
  while (answer !== guess) {
      alert("Sorry try again");
      guess = prompt('Guess the right color');
      alert("Hint: color name start with the letter (r).");
      guess=prompt("Guess the right color")
   
  
  };
  
  
  window.alert("You won 25% discount towards footwear at Jay's SportingGoods.");
  }


$(function() {

  $('.deeOne').click(function() {
    if ($(this).hasClass('coolP')) {
      $(this).removeClass('coolP');
    } else {
      $(this).addClass('coolP');
    }
  });

});


$(function () {
  $('#hit').on('submit', function (event) {
    event.preventDefault();
    apply();

  });
})


function apply(){ 
  let apply = $('#apply').val();
  $('#solution').append(apply);
  let thanks ="Thanks for Signing Up!!";
  $('#solution').html('Thanks for Signing Up!!', thanks);
 
   
   }



inames = []
iquan = []
iprice = []

function addItem(){

inames.push(document.getElementById('pname').value)
iquan.push(parseInt(document.getElementById('quant').value))
iprice.push(parseInt(document.getElementById('price').value))

displayCart() 

}

function displayCart(){

cartdata = '<table><tr><th>Product Name</th><th>Quantiy</th><th>Price</th><th>Total</th></tr>';

total = 0;

for (i=0; i<inames.length; i++){

total += iquan[i] * iprice[i]
cartdata += "<tr><td>" + inames[i] + "</td><td>" +
iquan[i] + "</td><td>" + iprice[i] + "</td><td>" +
iquan[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Remove</button></td></tr>"


}
 
cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

document.getElementById('cart').innerHTML = cartdata

}

function delElement(a){
  inames.splice(a,1);
  iquan.splice(a,1)
  iprice.splice(a,1)
  displayCart()

}



  




  
















 



    

    