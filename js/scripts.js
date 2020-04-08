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

}
function getName() {
     var CC = ParseInt(document.getElementById("century").value);
     var YY = ParseInt(document.getElementById("year").value);
     var MM = ParseInt(document.getElementById("month").value);
     var DD = ParseInt(document.getElementById("date").value);

     var dayOfTheWeek =Math.abs(parseInt(((CC/4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);

     var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
     var maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];

     if  (dayOfTheWeek == 0 && femaleNames.checked == true){
          alert("You were born on Saturday and your akan Name is " + femaleNames[6])
     
}    else if (dayOfTheWeek == 1 && femaleNames.checked == true){
          alert("You were born on Saturday and your akan Name is " + femaleNames[0])

}   else if (dayOfTheWeek == 2 && femaleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + femaleNames[1])

}   else if (dayOfTheWeek == 3 && femaleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + femaleNames[2])

}   else if (dayOfTheWeek == 4 && femaleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + femaleNames[3])

}   else if (dayOfTheWeek == 5 && femaleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + femaleNames[4])

}   else if (dayOfTheWeek == 6 && femaleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + femaleNames[5])

}   else {
     return false;
} 
 
     if  (dayOfTheWeek == 0 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[6])

}    else if (dayOfTheWeek == 1 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[0])     

}    else if (dayOfTheWeek == 2 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[1])

}    else if (dayOfTheWeek == 3 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[2])

}    else if (dayOfTheWeek == 4 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[3])

}     else if (dayOfTheWeek == 5 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[4])

}     else if (dayOfTheWeek == 6 && maleNames.checked == true){
     alert("You were born on Saturday and your akan Name is " + maleNames[5])

}    else {
     return false;
}
