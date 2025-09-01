// $(document).ready(function() {
//   // Check if the modal has been shown before
//   if (!localStorage.getItem('modalShown')) {
//     // Show the modal
//     $('#myModal').modal('show');

//     // Set the flag in local storage
//     localStorage.setItem('modalShown', true);
//   }
// });


 var notificationModal1 = new bootstrap.Modal(document.getElementById('notificationModal1'), {
        keyboard: false
  });

   var notificationModal2 = new bootstrap.Modal(document.getElementById('notificationModal2'), {
        keyboard: false
  });

  window.onload = function() {
    if(!localStorage.getItem('modalShown1')) {
      notificationModal1.show();

      localStorage.setItem('modalShown1', true);
    }

    if(!localStorage.getItem('modalShown2')) {
      notificationModal2.show();

      localStorage.setItem('modalShown2', true);
    }
  };