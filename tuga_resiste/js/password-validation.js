$(document).ready(function() {

	'use strict';

	$('#password, #password-check').keyup(function() { 

		var password = $('#password').val();
		var passwordCheck = $('#password-check').val();
		
		if ( password.length < 8 ) {
			$('#password-length').removeClass('valid').addClass('static');
		} else {
			$('#password-length').removeClass('static').addClass('valid');
		}
		
		if ( password.match(/[A-Z]/) ) {
			$('#password-capital').removeClass('static').addClass('valid');
		} else {
			$('#password-capital').removeClass('valid').addClass('static');
		}
		
		if ( password.match(/\d/) ) {
			$('#password-number').removeClass('static').addClass('valid');
		} else {
			$('#password-number').removeClass('valid').addClass('static');
		}
		
		if ( password === passwordCheck && password !== '' && passwordCheck !== '' ) {
			$('#password-check-img').removeClass('static invalid').addClass('valid');
		} else {
			$('#password-check-img').removeClass('valid invalid').addClass('static');
		}

	});

	$('#password-check').blur(function() { 

		var password = $('#password').val();
		var passwordCheck = $('#password-check').val();
		
		if ( password !== passwordCheck ) {
			$('#password-check-img').removeClass('static valid').addClass('invalid');
		}

	});

	$('#password').blur(function() { 

		var password = $('#password').val();
		
		if ( password.length < 8 ) {
			$('#password-length').removeClass('static valid').addClass('invalid');
		}
		
		if ( !password.match(/[A-Z]/) ) {
			$('#password-capital').removeClass('static valid').addClass('invalid');
		}
		
		if ( !password.match(/\d/) ) {
			$('#password-number').removeClass('static valid').addClass('invalid');
		}
		
		if ( password === '' ) {
			$('#password-length, #password-capital, #password-number').removeClass('invalid valid').addClass('static');
		}
		
	});

});