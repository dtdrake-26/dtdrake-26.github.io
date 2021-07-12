function checkCreds(){
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var badgeNumb = document.getElementById("badge#").value;
    var fullName = firstName + " " + lastName;
    
    console.log("Full Name is:" + fullName + "Badge Number is" + badgeNumb);
    if(fullName.length > 20 || fullName.length < 2){// sets the chartaer limit 
        document.getElementById("loginstatus").innerHTML = " Invalid Full name. Please try again."
    }else if (badgeNumb > 999 || badgeNumb < -999 )// conditions for badge number 
document.getElementById("loginstatus").innerHTML = " Invalid Badge Number. Please renter "
else{
    alert(" Access granted, welcome" + fullName)// shows your access was granted 
    location.replace("UAT Space Page.html");
}
    } 
