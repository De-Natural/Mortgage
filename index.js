// Functionality

const clear = document.getElementById('clear');
const first = document.getElementById('first');
const years = document.getElementById('years');
const percentage = document.getElementById('percentage');
const btn = document.querySelector('button');
const monthly = document.getElementById('monthly');
const Total = document.getElementById('total');
const cover = document.querySelector('.cover');
const poster = document.querySelector('.poster');
// console.log();

btn.addEventListener('click',()=>{
   
    const selectedPaymentType = document.querySelector('input[name="paymentType"]:checked');

    if (selectedPaymentType) {
        if (selectedPaymentType.id === 'radio') {
           labelFunction() 
        } else if (selectedPaymentType.id === 'rally') {
            labelFunc() 
        }
    } else {
        console.log("selectedPaymentType.");
    }

    const posterDisplay = poster.style.display || getComputedStyle(poster).display;
    const coverDisplay = cover.style.display || getComputedStyle(cover).display;

    if (posterDisplay === 'flex') {
        cover.style.display = 'flex';
        poster.style.display = 'none';
    } else {
        console.log('poster is not visible or another issue occurred.');
    }
})

function labelFunction() {
    let answer = (first.value * years.value);
    let given = (percentage.value * 100);
    let result = (answer / given);
    console.log("Result from labelFunction:", result);
    let repay = result * 12
    // console.log(repay);
    monthly.value = result;
    Total.value = repay;
}

function labelFunc() {
    let output = (first.value / years.value);
    let giving = (percentage.value / 100);
    let seen = (output / giving);
    console.log("Result from labelFunc:", seen);
    let cost = seen * 12
    monthly.value = seen;
    Total.value = cost
}

clear.addEventListener('click',()=>{
    first.value = '';
    years.value = '';
    percentage.value = '';
    monthly.value = '';
    Total.value = '';
    cover.style.display = 'noon';
})
