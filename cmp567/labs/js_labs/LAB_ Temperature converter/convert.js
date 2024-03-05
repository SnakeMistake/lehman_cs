window.addEventListener("DOMContentLoaded", domLoaded);



function domLoaded() {
   let convert = document.querySelector("#convertButton")
   let cInput = document.querySelector("#cInput")
   let fInput = document.querySelector("#fInput")

   cInput.addEventListener("input",(event)=>{fInput.value=""})
   fInput.addEventListener("input",(event)=>{cInput.value=""})
   convert.addEventListener("click",callConvert)
}

function callConvert(){
   let error = document.querySelector("#errorMessage")

   if(cInput.value.length >0){
      if(isNaN(cInput.value)){
         error.innerHTML = "<p>" + cInput.value + " is not a number</p>";
      }else{
         error.innerHTML = ""
      }
      fInput.value= convertCtoF(parseFloat(cInput.value))
      changeImage();
   }else if (fInput.value.length>0){
      if(isNaN(fInput.value)){
         error.innerHTML = "<p>" + fInput.value + " is not a number</p>";
      } else {
         error.innerHTML = ""
      }
      cInput.value= convertFtoC(parseFloat(fInput.value))
      changeImage();
   }
}

function changeImage(){
   let weatherImage = document.querySelector("#weatherImage")
   if(fInput.value< 32){
      weatherImage.src= "./cold.png"
   }else if (fInput.value<=50){
      weatherImage.src= "./cool.png"
   }else if (fInput.value>50){
      weatherImage.src= "./warm.png"
   }else{
      weatherImage.src= none
   }
}

function convertCtoF(degreesCelsius) {
   return ((degreesCelsius*9/5)+32)
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit-32)*5/9)
}
