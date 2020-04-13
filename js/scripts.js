$(document).ready(function(){
     $("#myBirthDate").mask("99/99/9999");
 });

  
function getName () 
var CC = parseInt(document.getElementById("century").value);
var YY = parseInt(document.getElementById("year").value);
var MM = parseInt(document.getElementById("month").value);
var DD = parseInt(document.getElementById("date").value);
var myGender = document.getElementById("gender")
var dateOfBirth = new Date(myBirthday)  
var dayOfTheWeek = dateOfBirth.getDay();
var myBirthday = document.getElementById("myBirthdate").value
var days = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"]

function getName() {
     var CC = ParseInt(document.getElementById("century").value);
     var YY = ParseInt(document.getElementById("year").value);
     var MM = ParseInt(document.getElementById("month").value);
     var DD = ParseInt(document.getElementById("date").value);
  
    
     if(myBirthday === ""){
          document.getElementById('Information').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><bold>SORRY</bold> INVALID DATA!</div>";
          $('#message');
      }
      else {
          for(var i=0;i<myGender.length;i++){
              if(myGender[i].checked){
                  if(myGender[i].value === "Male"){
                      document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                      $('#message span:first-child').addClass("animated fadeInDown");
                      $('#message span:last-child').addClass("animated fadeInUp");
                  }
                  else {
                      document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                      $('#message span:first-child').addClass("animated fadeInDown");
                      $('#message span:last-child').addClass("animated fadeInUp");
                  }
                  break;
              }    
              else {
                  document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                  $('#message').addClass("animated shake");
              }
          }
     }

  }

  function clearAkanMessage(){
     document.getElementById('message').innerHTML = "";
 }