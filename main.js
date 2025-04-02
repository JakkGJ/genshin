// JavaScript to handle closing details when screen size changes to mobile
window.addEventListener('resize', function() {
    const details = document.querySelectorAll('details'); //remove All for just one
    const summary = document.getElementsByClassName('summary');
    if (window.innerWidth <= 768) {
        // Close the details element when the screen is mobile size or smaller
        for (let i = 0; i < summary.length; i++) {
            details[i].removeAttribute('open');
            summary[i].innerText = 'Click to expand';
        }
    } else {
        for (let i = 0; i < details.length; i++) {
            details[i].toggleAttribute('open');
        }
    }
});

/*
const summary = document.getElementById('summary');
    
summary.addEventListener('click', function() {
    if (summary.innerText === 'Click to expand') {
        summary.innerText = 'Click to collapse';  // Change text when clicked
    } else {
        summary.innerText = 'Click to expand';  // Change text back when clicked again
    }
});
*/

const summaries = document.getElementsByClassName('summary');

for (let i = 0; i < summaries.length; i++) {
    summaries[i].addEventListener('click', function() {
        if (summaries[i].innerText === 'Click to expand') {
            summaries[i].innerText = 'Click to collapse';  // Change text when clicked
        } else {
            summaries[i].innerText = 'Click to expand';  // Change text back when clicked again
        }
    });
}
