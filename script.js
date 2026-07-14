// Transition effect for large image swapping
$(document).ready(function() {
    function transitionToImage(largeImageSrc) {
        $(".large-image").fadeOut(200, function() {
            $(this).attr("src", largeImageSrc).fadeIn(200);
        });
    }
    $(".thumbnail").click(function() {
        const largeImageSrc = $(this).data("large");
        transitionToImage(largeImageSrc);
    });
});

// Toggle side menu functionality
var sidemenu = document.getElementById("sidemenu");
var isOpen = false;

function toggleMenu() {
    if (!isOpen) {
        sidemenu.style.right = "0";
        isOpen = true;
    } else {
        sidemenu.style.right = "-200px";
        isOpen = false;
    }
}

// Google Sheets form submission handling
const scriptURL = 'https://script.google.com/macros/s/AKfycbxxn_XmEASo0oGigFA0dt-9LVmMqm41M2nUX8DxXW8UAVE8-Fc9ebhbX8F8Jw-MCUdV/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 1000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
