$(function () {
    'use strict';
    // -----------------------
    $('.navber .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    //get Element form html;

    var fname = document.getElementById('fname');
    var fnameErr = document.getElementById('fnameErr');

    var lname = document.getElementById('lname');
    var lnameErr = document.getElementById('lnameErr');

    var email = document.getElementById('email');
    var emailErr = document.getElementById('emailErr');

    var pass = document.getElementById('pass');
    var passErr = document.getElementById('passErr');

    var confirm = document.getElementById('confirm');
    var confirmErr = document.getElementById('confirmErr');

    var emaillog = document.getElementById('emaillog');
    var emailErrlog = document.getElementById('emailErrlog');

    var passlog = document.getElementById('passlog');
    var passErrlog = document.getElementById('passErrlog');

    //ready for send;
    $('.modal-footer #sent').on('click', function () {


        //    first name add;
        if (fname.value == '') {
            fname.style.borderColor = 'black';
            fname.focus();
            fnameErr.innerHTML = "Please enter your first name";
            return false;
        }

        //    last name add;
        if (lname.value == '') {
            lname.style.borderColor = 'black';
            lname.focus();
            lnameErr.innerHTML = "Please enter your surname";
            return false;
        }

        //    email add;

        if (email.value == '') {
            email.style.borderColor = 'black';
            email.focus();
            emailErr.innerHTML = "Please enter your email";
            return false;
        }


        //    password add;
        if (pass.value == '') {
            pass.style.borderColor = 'black';
            pass.focus();
            passErr.innerHTML = "Please enter Password";
            return false;
        }
        //    password length;
        if (pass.value.length <= 5) {
            pass.style.borderColor = 'black';
            pass.focus();
            passErr.innerHTML = "Please enter 6 characters";
            return false;
        }


        //    confirm password add;
        if (confirm.value == '') {
            confirm.style.borderColor = 'black';
            confirm.focus();
            confirmErr.innerHTML = "Please enter Password";
            return false;
        }


        //    confirm password value;
        if (confirm.value !== pass.value) {
            confirm.style.borderColor = 'black';
            confirm.focus();
            confirmErr.innerHTML = "password is not match";
            return false;
        }

    });

    // ready to log in
    $('.modal-footer #log').on('click', function(){
        //    email add;

        if (emaillog.value == '') {
            emaillog.style.borderColor = 'black';
            emaillog.focus();
            emailErrlog.innerHTML = "Please enter your email";
            return false;
        }

        //    password length;
        if (passlog.value.length <= 5) {
            passlog.style.borderColor = 'black';
            passlog.focus();
            passErrlog.innerHTML = "Please enter 6 characters";
            return false;
        }
    });

    //revolving Error form html;

    $(function go() {

        //    first name add;
        if (fname.value !== '') {
            fname.style.borderColor = 'green';
            fnameErr.innerHTML = '';
        }

        //    last name add;

        if (lname.value !== '') {
            lname.style.borderColor = 'green';
            lnameErr.innerHTML = '';
        }

        //    email addl;
        if (email.value !== '') {
            email.style.borderColor = 'green';
            emailErr.innerHTML = '';
        }

        //    password add;
        if (pass.value !== '') {
            pass.style.borderColor = 'green';
            passErr.innerHTML = '';
        }

        //    confirm password add;
        if (confirm.value !== '') {
            confirm.style.borderColor = 'green';
            confirmErr.innerHTML = '';
        }

        // log in Error remove 
        //    email addl;
        if (emaillog.value !== '') {
            emaillog.style.borderColor = 'green';
            emailErrlog.innerHTML = '';
        }
        //    password add;
        if (passlog.value !== '') {
            passlog.style.borderColor = 'green';
            passErrlog.innerHTML = '';
        }

        //calling function

        fname.addEventListener('blur', go);
        lname.addEventListener('blur', go);
        email.addEventListener('blur', go);
        pass.addEventListener('blur', go);
        confirm.addEventListener('blur', go);

        // log in calling function 
        emaillog.addEventListener('blur', go);
        passlog.addEventListener('blur', go);
    });

    //    countdown js starts
    //    get element from html;
    var hours = document.getElementById('h');
    var minutes = document.getElementById('m');
    var seconds = document.getElementById('s');


    //    get event time now;
    var countDownDate = new Date("Jan 01, 2100 00:00:00").getTime();


    //    timer and create a function;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);

        //        print into html;

        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;

    }, 1000);

    //    countDownDate js ends here;

    var menuBg = $('.navbar');
    var btt = $('.btt');
    var html_body = $('html, body');

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            btt.slideDown();
        } else {
            btt.slideUp();
        }
        if (scrolling > 200) {
            menuBg.addClass('stiky');
        } else {
            menuBg.removeClass('stiky');
        }
    });

    btt.on('click', function () {
        html_body.animate({
            scrollTop: 0,
        }, 2000);
    });

    //animation scroll js
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});