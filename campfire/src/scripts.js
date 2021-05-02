/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
/*Club and event catgeory dropdowns on public feed */
// right now: can only have one dropdown open at a time
function eventDropdown() {
 // console.log("test!");
  document.getElementById("clubDropdown").classList.remove("show");
  document.getElementById("eventDropdown").classList.toggle("show");
}

function clubDropdown() {
  document.getElementById("eventDropdown").classList.remove("show");
  document.getElementById("clubDropdown").classList.toggle("show");
}

function eventDropdownMobile() {
  //console.log("test!");
  document.getElementById("clubDropdown-mobile").classList.remove("show");
  document.getElementById("eventDropdown-mobile").classList.toggle("show");
}

function clubDropdownMobile() {
  document.getElementById("eventDropdown-mobile").classList.remove("show");
  document.getElementById("clubDropdown-mobile").classList.toggle("show");
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


$(document).ready(function () {
  var counter = 0;
  $("#addrow").on("click", function () {
      var newRow = $("<tr>");
      var cols = "";
      cols += '<td><input type="text" class="form-control" name="number' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="activity' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="assignee' + counter + '"/></td>';
      cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
      newRow.append(cols);
      $("table.order-list").append(newRow);
      counter++;
  });
  $("table.order-list").on("click", ".ibtnDel", function (event) {
      $(this).closest("tr").remove();
      counter -= 1
  });
});

$(document).ready(function () {
  var counter = 0;
  $("#addtasks").on("click", function () {
      var newRow = $("<tr>");
      var cols = "";
      cols += '<td><input type="text" class="form-control" name="num' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="task' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="assignees' + counter + '"/></td>';
      cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
      newRow.append(cols);
      $("table.order-list-tasks").append(newRow);
      counter++;
  });
  $("table.order-list-tasks").on("click", ".ibtnDel", function (event) {
      $(this).closest("tr").remove();
      counter -= 1
  });
});

$(document).ready(function () {
  var counter = 0;
  $("#addcar").on("click", function () {
      var newRow = $("<tr>");
      var cols = "";
      cols += '<td><input type="text" class="form-control" name="carNum' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="car' + counter + '"/></td>';
      cols += '<td><input type="text" class="form-control" name="driver' + counter + '"/></td>';
      cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
      newRow.append(cols);
      $("table.order-list-car").append(newRow);
      counter++;
  });
  $("table.order-list-car").on("click", ".ibtnDel", function (event) {
      $(this).closest("tr").remove();
      counter -= 1
  });
});