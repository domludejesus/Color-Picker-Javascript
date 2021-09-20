const button = document.querySelector('button')
const h2E1 = document.querySelector('h2');
const bgE1 = document.querySelector('section')

button.addEventListener('click', () => {
    let color = '#';
    //convert to hexadecimal
    // pick between the second digit and 8th digit 
    color += Math.random().toString(16).slice(2,8);
    bgE1.style.backgroundColor = color; 
    h2E1.innerText = color; 
    console.log(color)
})