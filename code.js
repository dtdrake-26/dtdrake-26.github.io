function start(){
    console.log("start function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data";
    index = 0;
    timer = setInterval(unpdateDisplay, time_interval); 
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false; 
}
    function stop(){
        console.log("Stop function started");
        clearInterval(timer);
        document.getElementById("stopButton").disabled = true; 
        document.getElementById("startButton").disabled = false;
    }
    function getdata(){
        var loadedData = loadData();
        return loadedData;
    }
    function dataRow(legend, value, units){
        msg = "<td>";
        msg += legend;
        msg += ": </td><td>"
        msg += value;
        msg += " " + units;
        msg += "</td>";
        return msg;

    }

function countdownTimer() {
    console.log("countdownTimer Working");
   var currTime = 50
   document.getElementById("countdownStatus").innerHTML= currTime;
   currTime= currTime- 5 ;
    
   //Timer for 45
   setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},5000);
// timer for 40 
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},10000);  
// timer for 35
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},15000);
//timer for 30
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},20000);
// timer for 25
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},25000);
// timer for 20
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},30000);
//Timer for 15
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},35000);
// timer for 10
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},40000);
//timer for 5
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},45000);
//timer for 0
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= "Blast Off";
    currTime= currTime- 5 ;
},50000);                
}  
function playCraps(){
    console.log("Craps game intiated");// function to check if it works 
    var die1= Math.ceil(Math.random() *6);// function for value of die1
    var die2= Math.ceil(Math.random() *6);// function for value of die2
    document.getElementById("die1res").innerHTML = die1; //displays die 1 value
    document.getElementById("die2res").innerHTML = die2; // displays die 2 value 
   var dieSum= die1 + die2;// equation to get sum of die 1 & 2
   document.getElementById("diceSum").innerHTML = dieSum;// displays sum of die 1 & 2
   if(dieSum == 7 || dieSum == 11){// function to see if you loose
    document.getElementById("CrapsStatus").innerHTML = "Craps! You Loose!";// displays if you Loose 
   }else if(die1 == die2 && die1 % 2 == 0){// function to see if you win, by only accepting double even numbers 
    document.getElementById("CrapsStatus").innerHTML = "Doubles you Win!"; // displays if you win 
   }
   else{// function to display if it is a push 
    document.getElementById("CrapsStatus").innerHTML = "You did not Loose,And you did not win, try again";
   }
   
    
}
function btrCountdowntimer(){
    //increase spped by 10, please decrease by final product 
    console.log("btrCountdowntimer() started");
    var currTime = 50;
    for(var i = 0; i < 10; i ++){
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = currTime;
            currTime = currTime - 5;
        },500* i);
        } 
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = "Blastoff !!";
        }, 5000 );
    }
        function btrCountdowntimer(){
            //increase spped by 10, please decrease by final product 
    console.log("btrCountdowntimer() started");
    var currTime = 50;
    for(var i = 0; i < 11; i ++){
        if(i == 10){
             setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = "Blast Off";
            currTime = currTime - 5;
        },5000* i);
        } else if(i > 4 ){
             setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left =" + currTime;
            currTime = currTime - 5;
              } ,5000* i);}

        else{
 setTimeout(function(){
           document.getElementById("countdownStatus").innerHTML = currTime;
           currTime = currTime - 5;
        },5000* i);
        }
        }
       
       // setTimeout(function(){
         //   document.getElementById("countdownStatus").innerHTML = currTime;
           // currTime = currTime - 5;
        //},500* i);
        } 

function sandboxrun(){
    console.log("sandboxrun started");
    var a = 7;
    if(a==5){
        document.getElementById("sandboxArea").innerHTML = "a does in fact equal 5"
    }else{document.getElementById("sandboxArea").innerHTML = "a does not in fact equal 5"

    }
}
function playnewSound(){
    mySound = new sound("01-03- Angels Fall.mp3")
    mySound.play();
}
function playstation(){
console.log("play station sounds")
mySound = new sound("us-lab-background.mp3");
mySound.play();
}
function sound(src){
    this.sound =document.createElement("audio");
    this.sound. src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}


class InputData{
constructor(
    Time_Seconds,
    Latitude,
    Longitude,
    GPS_altitute,
    BMPSensor_Altittude,
    BMPSensor_presure,
    BMPSensor_temp,
    DIGSensor_temp,
    CSSSensor_temp,
    CSSSensor_eCO2,
    CSSSensor_tVOC,
    UV,
    Accelx,
    Accely,
    Accelz,
    magnetx,
    magnety,
    magnetz,
    gyrox,
    gyroy,
    gyroz,

){
    this.Time_Seconds= Time_Seconds;
    this.Latitude = Latitude;
    this.Longitude = Longitude;
    this.GPS_altitute = GPS_altitute;
    this.BMPSensor_Altittude = BMPSensor_Altittude;
    this.BMPSensor_presure = BMPSensor_presure;
    this.BMPSensor_temp = BMPSensor_temp;
    this.DIGSensor_temp = DIGSensor_temp;
    this.CSSSensor_temp = CSSSensor_temp;
    this.CSSSensor_eCO2 = CSSSensor_eCO2;
    this. CSSSensor_tVOC= CSSSensor_tVOC;
    this.UV = UV;
    this. Accelx=  Accelx;
    this.Accely = Accely;
    this.Accelz = Accelz;
    this.magnetx =magnetx;
    this. magnety=magnety;
    this. magnetz = magnetz;
    this. gyrox = gyrox;
    this. gyroy = gyroy;
    this. gyroz =  gyroz;      
}
}

function goUATSpace(){
    console.log("goUATSpace() started");
    location.replace("UAT Space Page.html");
}
function goLandingPage(){
    console.log("goLandingPage()");
    location.replace('index.html');
}
function goBoards(){
    console.log("goBoards()");
    location.replace('boards.html');
}