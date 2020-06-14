var contact = document.querySelector("#contact");
var about = document.querySelector("#aboutYourself");
var education = document.querySelector("#education");
var preview = document.querySelector("#preview");

contact.style.display = "none";
education.style.display = "none";
preview.style.display = "none";

const fName = document.querySelector("#fName");
const lName = document.querySelector("#fName");
const dob = document.querySelector("#dob");
const phone = document.querySelector("#phone");
const fNameOutput = document.querySelector("#fNameOutput");
const lNameOutput = document.querySelector("#lNameOutput");
const dobOutput = document.querySelector("#dobOutput");
const phoneOutput = document.querySelector("#phoneOutput");






var nextAbout = document.querySelectorAll(".nextAbout");
nextAbout.forEach(function(element) {
  element.addEventListener("click", function() {
    about.style.display = "none";
    contact.style.display = "block";
    education.style.display = "none";
    preview.style.display = "none";

  })
});


const ma1 = document.querySelector("#ma1");
const ma2 = document.querySelector("#ma2");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zipcode = document.querySelector("#zipcode");
const pma1 = document.querySelector("#pma1");
const pma2 = document.querySelector("#pma2");
const pcity = document.querySelector("#pcity");
const pstate = document.querySelector("#pstate");
const pzipcode = document.querySelector("#pzipcode");
const ma1Output = document.querySelector("#ma1Output");
const ma2Output = document.querySelector("#ma2Output");
const cityOutput = document.querySelector("#cityOutput");
const stateOutput = document.querySelector("#stateOutput");
const zipcodeOutput = document.querySelector("#zipcodeOutput");
const pma1Output = document.querySelector("#pma1Output");
const pma2Output = document.querySelector("#pma2Output");
const pcityOutput = document.querySelector("#pcityOutput");
const pstateOutput = document.querySelector("#pstateOutput");
const pzipcodeOutput = document.querySelector("#pzipcodeOutput");



var contactNext = document.querySelectorAll(".contactNext");
contactNext.forEach(function(element) {
  element.addEventListener("click", function() {
    about.style.display = "none";
    contact.style.display = "none";
    education.style.display = "block";
    preview.style.display = "none";
  })
});
var contactBack = document.querySelectorAll(".contactBack");
contactBack.forEach(function(element) {
  element.addEventListener("click", function() {
    about.style.display = "block";
    contact.style.display = "none";
    education.style.display = "none";
    preview.style.display = "none";
  })
});


const heducation = document.querySelector("#heducation");
const skill1 = document.querySelector("#skill1");
const heducationOutput = document.querySelector("#heducationOutput");
const skill1Output = document.querySelector("#skill1Output");

var educationBack = document.querySelectorAll(".educationBack");
educationBack.forEach(function(element) {
  element.addEventListener("click", function() {
    about.style.display = "none";
    contact.style.display = "block";
    education.style.display = "none";
    preview.style.display = "none";
  })
});
var educationNext = document.querySelectorAll(".educationNext");
educationNext.forEach(function(element) {
  element.addEventListener("click", function() {
    about.style.display = "none";
    contact.style.display = "none";
    education.style.display = "none";
    preview.style.display = "block";

    fNameOutput.innerHTML = fName.value;
    lNameOutput.innerHTML = lName.value;
    dobOutput.innerHTML = dob.value;
    phoneOutput.innerHTML = phone.value;
    ma1Output.innerHTML = ma1.value;
    ma2Output.innerHTML = ma2.value;
    cityOutput.innerHTML = city.value;
    stateOutput.innerHTML = state.value;
    zipcodeOutput.innerHTML = zipcode.value;
    pma1Output.innerHTML = pma1.value;
    pma2Output.innerHTML = pma2.value;
    pcityOutput.innerHTML = pcity.value;
    pstateOutput.innerHTML = pstate.value;
    pzipcodeOutput.innerHTML = pzipcode.value;
    heducationOutput.innerHTML = heducation.value;
    skill1Output.innerHTML = skill1.value;

  })
});



function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}






const addSkill=document.querySelector("#AddSkill");
const skills=document.querySelector("#newSkill");
const skillsCopy=skills;
var result=skillsCopy.innerHTML;
addSkill.addEventListener("click",function(){
    var newSkill=skills.innerHTML;
    var newSkill=newSkill.concat(result);
    skills.innerHTML=newSkill;
});



const address=document.querySelector("#address");
address.addEventListener("click",function(){
  if (address.checked!="true"){
    pma1.value=ma1.value;
    pma2.value=ma2.value;
    pcity.value=city.value;
    pstate.value=state.value;
    pzipcodeOutput.value=zipcodeOutput.value;
  }

});



$("#imgInp").change(function() {
  readURL(this);
});
