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

/*Add more fields to page when add button is clicked */
function addFriends(){
  console.log("entered add friends");
  var friends = document.getElementById("addFriends");
  var currFriendCount = document.getElementsByClassName("aFriend").length+1;
  friends.appendChild('<input type="friend" class="form-control aFriend" id="friend'+currFriendCount+'" aria-describedby="friendHelp" placeholder="Enter Email"></input>');
}

$('#addFriendButton').on('click', function() {
    console.log("clicked");
    addFriends();
});

function addCars() {
  console.log("entered add cars");
  var cars = document.getElementById("addCars");
  var currCarCount = document.getElementsByClassName("aCar").length+1;
  $(cars).append('<input type="car" class="form-control aCar" id="car'+currCarCount+'" aria-describedby="carHelp" placeholder="Enter name of driver"></input>');
}
/*$(function(){
  $("#addFriendButton").click(function(){
    console.log("hi!");
    $("p").append("<b>Appended text</b>");
  });
});*/
$("#addCarButton").click(addCars());