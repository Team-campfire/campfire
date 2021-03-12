/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // jQuery datepicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );


  // change direction of dropdown arrow depending on if menu is expandd: https://stackoverflow.com/questions/31677222/bootstrap-dropdown-make-dropdown-arrow-change-direction
  $(function(){
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
      $(this).find(".caret").toggleClass("caretup");
    });
  });