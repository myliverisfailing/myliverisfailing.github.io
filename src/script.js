/*
This code animates the header text appear one letter at a time every 50ms (milliseconds)
As far as i know this code doesn't mean shit for my grade but makes the website look nicer
*/

document.addEventListener("DOMContentLoaded", function() {
    const text = "New Zealand Native Birds.";
    const header = document.getElementById('header');
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            header.innerHTML += text.charAt(i);
        }, 50 * i);
    }
});
