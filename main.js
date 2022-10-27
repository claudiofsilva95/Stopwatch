let sec             = 0;
let min             = 0;
let watch           = null;
let stopwatch       = document.querySelector('#stopwatch')
let lastRegister    = document.querySelector('#last-register')

const twoDigits = digit => {
    if (digit < 10){
        return `0${digit}`
    } else {
        return digit
    }
}

const start = document.querySelector('#start').addEventListener('click', () => {
    if(watch == null){
        watch = setInterval(timer, 10);    
        lastRegister.innerHTML = ''
    }
});

const pause = document.querySelector('#pause').addEventListener('click', () => {
    clearInterval(watch)
    watch = null;
})

const reset = document.querySelector('#reset').addEventListener('click', () => {
    lastRegister.innerHTML = `Last Register: ${twoDigits(min)}.${twoDigits(sec.toFixed(2))}` 
    clearInterval(watch)
    watch               = null;
    
    sec                 = 0;
    min                 = 0;
    stopwatch.innerHTML = '00.00.00'
})


const timer = () => {
    if (sec > 59.9){
        sec = 0;
        min++;
    }
    sec += 0.01;
    stopwatch.innerHTML = `${twoDigits(min)}.${twoDigits(sec.toFixed(2))}`;
}

