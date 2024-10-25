//button slider
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('productCarousel');
    var paginationItems = document.querySelectorAll('.pagination li');
  
    // Listen for the 'slid.bs.carousel' event (fired after slide transition)
    carousel.addEventListener('slid.bs.carousel', function (event) {
      // Remove 'active' class from all pagination items
      paginationItems.forEach(function (item) {
        item.classList.remove('active');
      });
  
      // Add 'active' class to the current pagination item
      var currentIndex = event.to; // 'to' gives the index of the new slide
      paginationItems[currentIndex].classList.add('active');
    });
  });
  

//open map
$('#openMap').on('click', function (e) {
    e.preventDefault();
    // Show the map overlay
    $('#mapOverlay').fadeIn();
    // Pause the slider when the map is opened
    $('#productCarousel').carousel('pause');
  });

  $('#closeMap').on('click', function () {
    // Hide the map overlay
    $('#mapOverlay').fadeOut();
    // Resume the slider when the map is closed
    $('#productCarousel').carousel('cycle');
  });

 //shedule task
 

 
 //sticky nav
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY);
})

 //search bar
 const searchFun = () => {
   let filter = document.getElementById('myInput').value.toUpperCase();
   let productSlide = document.getElementById('productCarousel');
   let product = productCarousel.getElementsByClassName('product');

   for(var i = 0; i < product.length; i++){
     let cards = product[i].getElementsByClassName('card')[0];
     if(card){
      let cardText = card.textContent || card.innerText; // Get the text content of the card
      if (cardText.toUpperCase().indexOf(filter) > -1) {
          product[i].style.display = ""; // Show the product if it matches the filter
      } else {
          product[i].style.display = "none"; // Hide the product if it doesn't match the filter
      }
     }
   }
 }


//budget
 const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


