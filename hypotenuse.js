const inputs = document.querySelectorAll(".side-input");
const hypoBtn =document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");


function calculateSumOfSquares(a,b){
  const sumOfSquare = a*a + b*b;
  return sumOfSquare;
}
function calculateHypotenuse(){
  const sumOfSquare =calculateSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
  output.innerText ="The Length of Hypotenuse is: "+lengthOfHypotenuse;


}

hypoBtn.addEventListener("click",calculateHypotenuse);
