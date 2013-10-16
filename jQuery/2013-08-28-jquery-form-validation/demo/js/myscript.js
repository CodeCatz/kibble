//$(document).ready(function(){
jQuery(function($) {

	// for simple example
	$('#simpleForm').validate();

	// for advanced example
	$('#demoForm').validate({
		rules: {
			demoName: {
				minlength: 2,
				required: true
			},
			demoEmail: {
				required: true,
				email: true
			},
			demoPass: {
				minlength: 2,
				required: true
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		submitHandler: function(form) {
			// do other things for a valid form
			user = $('input[name="demoName"]').val();
			alert("Yay!" + user + " submitted a valid form!");
			form.submit();
		}
	});
	
	$('#specialForm').validate({
		rules: {
			optionsGender: "required",
			checkFunny: {
				required: true,
				minlength: 1
			},
			selFriends: {
				required: true
			},
			selAttitude: {
				required: true
			}
		},
		messages :{
			checkFunny: {
				required: "Hey! Yo! You ARE funny! Check it now!",
				minlength: jQuery.format("Please, Check at least one box")
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		submitHandler: function(form) {
			// do other things for a valid form
			user = $('input[name="demoName"]').val();
			alert("Yay! " + user + " submitted a valid form!");
			form.submit();
		},
		errorPlacement: function(error, element) {
		   if (element.attr('type') === 'radio') {
		      error.insertAfter(
		          element.siblings('input[type="radio"][name="' + element.attr('name') + '"]:last'));
		   }
			else if (element.attr('type') === 'checkbox') {
				error.insertAfter(
					element.siblings('input[type="checkbox"][name="' + element.attr('name') + '"]:last'));
			}
		   else {
		      error.insertAfter(element);
		   }
		}
		
	});

}); // end document.ready
