function criarConta(){
    window.location.href = "../register.html";
}

function logar(){
    window.location.href = "../login.html";
}

function sobre(){
    window.location.href = "../sobre.html";
}

function note(){
    window.location.href = "../notebook.html";
}

function tlou(){
    window.location.href = "../tlou.html";
}

function cadeira(){
    window.location.href = "../cadeira.html";
}

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slide");

        if (n > slides.length) {
        slideIndex = 1;
        }

        if (n < 1) {
        slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }



