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
 const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}