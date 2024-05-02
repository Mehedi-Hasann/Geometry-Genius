/*
* objective : get base, height of a triangle . calculate the area by using the provided formula and then display
* step1 : get base value
* step2 : added an id in the base input field
* step3 : use getElementById to access the input field
*step4 : get value from the input field (value is istring now)
*step5 : convert the value to a number . use parseFloat
*/


function calculateTriangle(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);
    
    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log('area is : ',area);

    // display triangle area 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}