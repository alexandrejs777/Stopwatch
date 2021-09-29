window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    let interval;

    buttonStart.onclick = (()=>{

        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    buttonStop.onclick = (()=>{
        clearInterval(interval);
    })

    buttonReset.onclick = (()=>{
        clearInterval(interval);
        tens = '00';
        seconds = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    })

    let startTimer = () => {
        tens++;

        if (tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99){
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            appendTens.innerHTML = '0' + 0;
            tens = 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}

