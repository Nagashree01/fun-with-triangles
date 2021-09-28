const sides = document.querySelectorAll(".components");
const calAreaBtn = document.querySelector("#calculate-area-btn");
const output = document.querySelector("#output-area");

function calculateAreaOfTri(a,b){
    const area =1/2 * a* b;
    return area;
}

function calculateArea(){
    const area = calculateAreaOfTri(Number(sides[0].value),Number(sides[1].value));
    // console.log(area);
    output.innerText ="The area of Trinangle: " +area;
}

calAreaBtn.addEventListener('click',calculateArea);