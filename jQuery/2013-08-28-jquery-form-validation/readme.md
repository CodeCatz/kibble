Validating html forms with jQuery (plugin)
==================================

## Form validation

Form validation is a process of validating user's input. 
People often do mistakes and the goal of form validation is to ensure that all inputs are valid (e.g. email addresses and URLs don't contain any invalid characters, dates are properly formatted) and that required inputs are not empty.

There are two basic validation methods: server-side and slient-side.

### Client-side validation

Client-side validation is done on the client (user's side) using script languages - usually Javascript.
There are many existing libraries and plugins available for this. We will use a special jQuery plugin for validation. 


## What is a jQuery plugin

A jQuery plugin is a new method that we use to extend jQuery's functionality (defined in prototype object). 
The idea of a plugin is to do something with a collection of elements. You could consider each method that comes with the jQuery core a plugin, like .fadeOut() or .addClass().
You can make your own plugins and use them by yourself or share it with others. Of course there a tons of jQuery plugins available.

You can find more about plugins on [jQuery learn page](http://learn.jquery.com/plugins/),

## Suggested reading
Read this article on best practices and tutorials at [Smashing Magazine](http://www.smashingmagazine.com/2009/07/07/web-form-validation-best-practices-and-tutorials/).

## Practical part
We will use [jQuery Validation Plugin](http://bassistance.de/jquery-plugins/jquery-plugin-validation/) in the demo.
This demo is quite easy to use, you just have to include appropriate script and call method validate.

### Installation

- Download the plugin
- Download jQuery (if you don't have it already). Note that the plugin was tested with jQuery 1.9. It also works with 1.10, at least for this demo. 

### Demo

Script for validation is file _/myscript.js_ in folder _js_. We put our functions inside $( document ).ready() which can be also written as `jQuery(function($))` so that code inside it run only once the page is ready. [More info about this at the jQuery page](http://learn.jquery.com/using-jquery-core/document-ready/).

There are two demo files:
- simple.html - a _very_ simple demo with two forms and one line of code for validation
- advanced.html - slightly more advanced demo with configuration options and bootstrap classes

### Simple demo - simple.html
In simple demo we added property _required_ directly to form element:
````
<input type="text" class="form-control" id="demoName" name="demoName" placeholder="Enter your name"/ required>
````

and validation is called simply by:
````
$('#simpleForm').validate();
```` 
### Advanced demo using bootstrap classes - advanced.html
Fields to be validated are defined in _myscript.js_ in section *rules* in function `$('#demoForm').validate`:
````
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
...
...
````
**Important:** Make sure you have input's _name_ property set to the same value as in rules. Check HTML for demoForm. 

Methods _highlight_ and _success_ set appropriate bootstrap css class to form-group according to the result of validation. 
If there was a validation error, _highlight_ is called and replaces class _has-success_ with the class _has-error_. 
If everything is ok class _has-error_ is replaced with _has-success_.
````
...
...
highlight: function(element) {
	$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
},
success: function(element) {
	element
	.closest('.form-group').removeClass('has-error').addClass('has-success');
},
...
...
```` 
If form was successfully validated, it is submitted. We defined submitHandler to catch submit event and display a message before actually submitting:
````
submitHandler: function(form) {
// do other things for a valid form
user = $('input[name="demoName"]').val();
alert("Yay!" + user + " submitted a valid form!");
form.submit();
````

### More demos for plugin
You can find more demos (and code) at plugin's [Github page](https://github.com/jzaefferer/jquery-validation/tree/master/demo).

