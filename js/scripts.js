function validate ()
var CC = parseInt(document.getElementById("century").value);
var YY = parseInt(document.getElementById("year").value);
var MM = parseInt(document.getElementById("month").value);
var DD = parseInt(document.getElementById("date").value);

if  (CC =="" || CC > 20 || CC < 19){
     alert("only the 20th and the 19th centuery are allowed")
     return false;

}    else if (YY == "" || YY > 99 || YY < 0) {
     alert("Only years between 0 and 99 can be entered")
     return false;

}    else if ( DD == "" || DD > 31 || DD < 1) {
     alert("Enter a date between 1 and 31");
     return false;

}    else {
     return true;
     
}
