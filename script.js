$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            // window.scrollY checks for how many pixels the document
            // currently scrolled vertically
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }
        else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

})


function message() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (name.value === '' || email.value === '' || message.value === '') {
        danger.style.display
    }
    else {
        setTimeout(() => {
            name.value = '';
            email.value = '';
            message.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}
