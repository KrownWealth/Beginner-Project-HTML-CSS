
console.log('script loaded');

var countdownElement = document.getElementById('countdown');

var initialCountdownValue = countdownElement.innerHTML;

setInterval (function () {
    initialCountdownValue = initialCountdownValue > 0?
    initialCountdownValue -1.0;

    countdownElement.innerHTML = initialcountdown;
    
})