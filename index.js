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
 
 //search bar
 const searchFun = () =>{
   let filter = document.getElementById('myInput').value.toUpperCase();
   let productSlide = document.getElementById('productCarousel');
   let product = productCarousel.getElementById('carousel-slide');
 }