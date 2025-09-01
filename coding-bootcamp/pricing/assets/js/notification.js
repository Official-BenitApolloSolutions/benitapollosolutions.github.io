// $(document).ready(function() {
//   // Check if the modal has been shown before
//   if (!localStorage.getItem('modalShown')) {
//     // Show the modal
//     $('#myModal').modal('show');

//     // Set the flag in local storage
//     localStorage.setItem('modalShown', true);
//   }
// });


 var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        keyboard: false
  });

  window.onload = function() {
    if(!localStorage.getItem('modalShown')) {
      myModal.show();

      localStorage.setItem('modalShown', true);
    }
  };