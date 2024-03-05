function parseScores(scoresString) {
   let score_array = scoresString.split(" ");
   return score_array
}

function buildDistributionArray(scoresArray) {
   let score_distrib = [0,0,0,0,0]
   for(let num of scoresArray){
      if(num>=90){
         score_distrib[0] ++;
      } else if (num >=80){
         score_distrib[1] ++;
      } else if (num >=70){
         score_distrib[2] ++;
      } else if (num > 60){
         score_distrib[3] ++;
      } else {
         score_distrib[4] ++;
      }
   }

   return score_distrib
}

function setTableContent(userInput) {
   let score_array = parseScores(userInput)
   let score_distrib = buildDistributionArray(score_array)
   let firstRow = document.querySelector("#firstRow")
   let thirdRow = document.querySelector("#thirdRow")
   for(let i=0; i<score_distrib.length;i++){
      firstRow.innerHTML += "<td><div style=\"height:" +score_distrib[i]*10 + "px\" class=bar" + i + "></div></td>"
      thirdRow.innerHTML += "<td>" +score_distrib[i] + "</td>"
   }
   
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");