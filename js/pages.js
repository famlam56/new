
/* CALENDAR  (change stufff in this ccode)*/

$(document).ready(function () {
  $(".datenumber").click(function () {
    $(".datenumber").removeClass("datenumber--true");
    $(this).addClass("datenumber--true");
  });


  var month = 1;// date.getMonth() + 1;
  var day = 31;// date.getDate();
  var date = new Date();
  var year = 2023;// date.getFullYear();

  $(".mon").each(function () {
    if ($(this).attr("name") === String(month)) {
      $(this).prop("selected", true);
    }
  });

  $(".datenumber").each(function () {
    if (Number($(this).text()) === day) {
      $(this).addClass("datenumber--true");
    }
  });

  $(".yearnums").each(function () {
    if (Number($(this).text()) === (year)) {
      $(this).prop("selected", true);
    }
  });

  $(".date").click(function () {
    day = $(".datenumber--true").text();
    month = $(".month option:selected").attr("name");
    year = $(".year option:selected").text();
  });
});

$(document).ready(function () {
  // Generate  dynamic calendar
  function cal() {
    var month = $(".month option:selected").attr("name");
    var year = $(".year option:selected").text();

    var daysmon = new Date(year, month, 0).getDate();
    var firstDay = new Date(year, month - 1, 1).getDay();

    var dateContainer = $(".date");
    dateContainer.empty();

    var dateRow = $("<div></div>").addClass("daterows");

    for (var i = 0; i < firstDay; i++) {
      dateRow.append("<div class='datenumber'></div>");
    }

    for (var i = 1; i <= daysmon; i++) {
      var dateNumber = $("<div></div>")
        .addClass("datenumber")
        .text(i);

      dateRow.append(dateNumber);

      if ((i + firstDay) % 7 === 0) {
        dateContainer.append(dateRow);
        dateRow = $("<div></div>").addClass("daterows");
      }
    }

    if (dateRow.children().length > 0) {
      dateContainer.append(dateRow);
    }
  }

  //  month and year selection
  $(".month, .year").change(function () {
    cal();
  });

  // date selection
  $(document).on("click", ".datenumber", function () {
    $(".datenumber").removeClass("datenumber--true");
    $(this).addClass("datenumber--true");

    var day = $(this).text();
    var month = $(".month option:selected").attr("name");
    var year = $(".year option:selected").text();
    let calsto=(day +' /'+ month+' /' + year);
    document.getElementById("sumta-headingdate").innerHTML =calsto; 
    localStorage.setItem("caldendasto",calsto); 

  });

   document.getElementById("sumta-headingdate").innerHTML=localStorage.getItem("caldendasto"); 
  cal();
});





/* GUESTS (change stufff in this ccode)*/

var ttslot1=0;
var ttslot2=0;
var ttslot3=0;
var ttslot4=0;

 function tot(){
  let addition=ttslot1+ttslot2+ttslot3+ttslot4;
  document.getElementById("totalinsumtable").innerHTML="="+addition+"USD";
     localStorage.setItem("tots",addition);  
     GetTotal();
} 

function GetTotal()
{
  document.getElementById('totalinsumtable').innerHTML=localStorage.getItem("tots");  
} 


var number = 0;
let ttslot="";
function minus() {
  number = number - 1;
  document.getElementById("mid").innerHTML = number;
  document.getElementById('SLAN').innerHTML = number + " SL adult =  " +number*4+"USD (normal hour)";
}

function plus() {
  number = number + 1;
  document.getElementById("mid").innerHTML = number;
  if(ttslot=="slo4"){
    ttslot4=number*6;
    document.getElementById('SLAN').innerHTML = number + " SL adult = "+ttslot4+"USD (peak hour)";
  }
  else{
    ttslot4=number*4;
    document.getElementById('SLAN').innerHTML = number + " SL adult = "+ttslot4+"USD (normal hour)";
  }
   localStorage.setItem("plo",ttslot4);  
   GetTotal1();
   tot(); 
  
}
function GetTotal1(){
document.getElementById('SLAN').innerHTML=localStorage.getItem("plo");
}    


var number1 = 0;

function minus1() {
  number1 = number1 - 1;
  document.getElementById("mid1").innerHTML = number1;
  document.getElementById('SLCN').innerHTML = number1 +" SL child = "+number1*3+"USD (normal hour)";
}

function plus1() {
  number1 = number1 + 1;
  document.getElementById("mid1").innerHTML = number1;
  if(ttslot=="slo4"){
    ttslot1=number1*3;
    document.getElementById('SLCN').innerHTML = number1 + " SL child = "+ttslot1+"USD (peak hour)";
  }
  else{
    ttslot1=number1*2;
    document.getElementById('SLCN').innerHTML = number1 + " SL child = "+ttslot1+"USD (normal hour)";
  }
   localStorage.setItem("plo1",ttslot1); 
   GetTotal2();
   tot(); 
}
function GetTotal2(){
 document.getElementById('SLCN').innerHTML=localStorage.getItem("plo1");
}


var number2 = 0;
function minus2() {
  number2 = number2 - 1;
  document.getElementById("mid2").innerHTML = number2;
  document.getElementById('FAN').innerHTML = number2 +" Foreign adult ="+number2*10+"USD (normal hour)";
}

function plus2() {
  number2 = number2 + 1;
  document.getElementById("mid2").innerHTML = number2;
  if(ttslot=="slo4"){
    ttslot2=number2*13;
    document.getElementById('FAN').innerHTML = number2 + " Foreign adult = "+ttslot2+"USD (peak hour)";
  }
  else{
    ttslot2=number2*10;
    document.getElementById('FAN').innerHTML = number2 + " Foreign adult = "+ttslot2+"USD (normal hour)";
  }
   localStorage.setItem("plo2",ttslot2);
   GetTotal3;
   tot(); 
}
function GetTotal3(){
 document.getElementById('FAN').innerHTML=localStorage.getItem("plo2");
}

var number3 = 0;
function minus3() {
  number3 = number3 - 1;
  document.getElementById("mid3").innerHTML = number3;
  document.getElementById('FCN').innerHTML = number3 +" Foreign Child ="+number3*5+"USD (normal hour)";
}

function plus3() {
  number3 = number3 + 1;
  document.getElementById("mid3").innerHTML = number3;
  if(ttslot=="slo4"){
    ttslot3=number3*8;
    document.getElementById('FCN').innerHTML = number3 + " Foreign Child = "+ttslot3+"USD (peak hour)";
  }
  else{
    ttslot3=number3*5;
    document.getElementById('FCN').innerHTML = number3 + " Foreign Child = "+ttslot3+"USD (normal hour)";
  }
  localStorage.setItem("plo3",ttslot3); 
  GetTotal4();
   tot(); 
}
function GetTotal4(){
 document.getElementById('FCN').innerHTML=localStorage.getItem("plo3"); 
}

var number4 = 0;
function minus4() {
  number4 = number4 - 1;
  document.getElementById("mid4").innerHTML = number4;
  document.getElementById('INF').innerHTML = number4 +" Infant ="+number4*0+"USD";
}

function plus4() {
  number4 = number4 + 1;
  document.getElementById("mid4").innerHTML = number4;
  document.getElementById('INF').innerHTML = number4 +" Infant ="+number4*0+"USD";
}

 
//Timeslot duration

 class choice {
  constructor(initial) {
    this.initial = initial;
    this.sVal = [];  //jjjjj
    this.options = document.createElement("div");
    this.options.classList.add("opted");
   
    
    this.initial.querySelectorAll("option").forEach((element) => {
      var slot = document.createElement("div");
      slot.classList.add("timechoice");
      slot.id=element.id;
      slot.textContent = element.textContent;
      this.options.appendChild(slot);

      if (element.chosen) {
        this.op(itemElement);
      }

      slot.addEventListener("click", (event)=> {
        ttslot=event.target.id;  
        if (
          this.initial.multiple &&
          slot.classList.contains("chosen")
        ) {
          this.not(slot);
          
        } else {
          this.op(slot);
        }
        this.upslot(); //dddddd
        
      });
    
    });
    
    this.initial.insertAdjacentElement("afterend", this.options);
    this.initial.style.display = "none";
  }

  op(itemElement) {
    var arr = Array.from(this.options.children).indexOf(itemElement);

    if (!this.initial.multiple) {
      this.choice.querySelectorAll(".chosen").forEach((el) => {
        el.classList.remove("chosen");
      });
    }

    this.initial.querySelectorAll("option")[arr].picked = true;
    itemElement.classList.add("chosen");
    this.sVal.push(this.initial.querySelectorAll("option")[arr].textContent);
    document.getElementById('sumta-headingtime').innerHTML=this.sVal;  
    document.getElementById('sumta-headingduration').innerHTML=this.sVal.length + "Hours"; 
    localStorage.setItem("sumtab1",this.sVal.length + " hours");
    localStorage.setItem("sumtab3",this.sVal);
  }
  
  not(itemElement) {
    var arr = Array.from(this.options.children).indexOf(itemElement);
    this.initial.querySelectorAll("option")[arr].picked = false;
    itemElement.classList.remove("chosen");
    var dsval = this.initial.querySelectorAll("option")[arr].textContent;//jjj
    this.sVal = this.sVal.filter((value) => value !== dsval);;          //jjjjjjjjj
  }

  upslot() {
    var chosenslo = this.options.querySelectorAll(".chosen");
    if (chosenslo.length === 0) {
      this.chosenslo = [];
      document.getElementById('sumta-headingtime').textContent = "";
    } else if (chosenslo.length === 1) {
      document.getElementById('sumta-headingtime').textContent = chosenslo[0].textContent;
    } else {
      var one = chosenslo[0].textContent;
      var final = chosenslo[chosenslo.length - 1].textContent; 
      var hour1 = one.substring(0, 9); // Extracts the first 8 characters (e.g., "7AM - 8A")
      var hourend = final.substring(11); // Extracts the last 2 characters (e.g., "10")
      document.getElementById('sumta-headingtime').textContent = `${hour1} - ${hourend}`;
    }
  }}

  function Sumtadutime(){
  document.getElementById('sumta-headingduration').innerHTML=localStorage.getItem("sumtab1");
  document.getElementById('sumta-headingtime').innerHTML=localStorage.getItem("sumtab3");
  }
 
document.querySelectorAll(".options").forEach((selectElement) => {
  new choice(selectElement);
});






/*  DETAILS PAGE FORM */
 let fullnamearea = document.getElementById("fullname");
let fullnameerror1 = document.getElementById("error1");
let fullnameerror2 = document.getElementById("error2");

let emailbox = document.getElementById("emailarea");
let emailboxerror3 = document.getElementById("error3");
let emailboxerror4 = document.getElementById("error4");

let emailinput = document.getElementById("email");
let emailerror5 = document.getElementById("error5");
let emailerror6 = document.getElementById("error6");

let phonebox = document.getElementById("phonenumber");
let phoneerror7 = document.getElementById("error7");
let phoneerror8 = document.getElementById("error8");  

function formPage() {
  var ffName = document.getElementById("fullname").value;
  var emai = document.getElementById("email").value;
  var phoneNumb = document.getElementById("phonenumber").value;
  var ge = document.getElementById("gender").value;

  localStorage.setItem("d1", ffName);
  localStorage.setItem("d2", emai);
  localStorage.setItem("d3", phoneNumb);
  localStorage.setItem("d4", ge);
}

function confo(){
   document.getElementById("nam1").innerHTML=localStorage.getItem("d1");
   document.getElementById("emaild").innerHTML=localStorage.getItem("d2");
   document.getElementById("phno").innerHTML=localStorage.getItem("d3");
   document.getElementById("Gende").innerHTML=localStorage.getItem("d4");
}



var fname = (box1fullname) => {
  var nam = /^[A-Z,a-z,1-9," "]{5,}$/;
  return nam.test(box1fullname);
};






var box4 = (phonenumber) => {
  var logs = /^[0-9]{10}$/;
  return logs.test(phonenumber);
};

var inputphone = document.querySelector("#phonenumber");
var phoneboxarea = document.querySelector("#phonenumber");
window.addEventListener("load", function () {

  errorMsgs = document.querySelector("#erroralert"),
    validessages = document.querySelector("#validity");
  window.intlTelInput(inputphone, {
    geoIpLookup: function (callback) {
      $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
        var code = (resp && resp.country) ? resp.country : "";
        callback(code);
      });
    },
    firstoutput: "",
    place: "MOBILE",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
  });

});


//Email confirm
var email = (input) => {
  var logs = /^[A-z,a-z,0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return logs.test(input);
};

//Email
var email1 = (input) => {
  var logs1 = /^[A-z,a-z,0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return logs1.test(input);
};

//unfilled answer
var empty = (
  inputbox,
  errorbox,
  errorbox2
) => {
  if (!inputbox.value) {
    //answer is null
    errorbox.classList.remove("box");
    errorbox2.classList.add("box");
    inputbox.classList.add("error");
  } else {
    //input has details
    errorbox.classList.add("box");
  }
};

//error message display
var errorMsg = (input, errordis) => {
  errordis.classList.remove("box");
  input.classList.remove("valid");
  input.classList.add("error");
};

//error non
var valid = (input) => {
  input.classList.remove("error");
  input.classList.add("valid");
};

//full name
fullnamearea.addEventListener("input", () => {
  if (fname(fullnamearea.value)) {
    //answer true
    fullnameerror1.classList.add("box");
    valid(fullnamearea);
  } else {
    //false
    errorMsg(fullnamearea, fullnameerror1);
    //answer empty
    empty(fullnamearea, fullnameerror2, fullnameerror1);
    
  }
});

//email
emailbox.addEventListener("input", () => {
  if (fname(emailbox.value)) {
    emailboxerror3.classList.add("box");
    valid(emailbox);
  } else {
    errorMsg(emailbox, emailboxerror3);
    empty(emailbox, emailboxerror4, emailboxerror3);
  }
});

//phone
phonebox.addEventListener("input", () => {
  if (box4(phonebox.value)) {
    phoneerror7.classList.add("box");
    valid(phonebox);
  } else {
    errorMsg(phonebox, phoneerror7);
    empty(phonebox, phoneerror8, phoneerror7);
  }
});

//Email confirm
emailinput.addEventListener("input", () => {
  if (email(emailinput.value)) {
    emailerror5.classList.add("box");
    valid(emailinput);
  } else {
    errorMsg(emailinput, emailerror5);
    empty(emailinput, emailerror6, emailerror5);
  }
});

//Email
emailbox.addEventListener("input", () => {
  if (email1(emailbox.value)) {
    emailboxerror3.classList.add("box");
    valid(emailbox);
  } else {
    errorMsg(emailbox, emailboxerror3);
    empty(emailbox, emailboxerror4, emailboxerror3);
  }
});












