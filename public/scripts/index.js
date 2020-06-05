console.log("client side");
$("form").submit(()=>{
	event.preventDefault();
	$.ajax({
		url: '/login',
		type: 'POST',
		data: {login: $("#login").val(),password: $("#password").val()},
	})
	.done(function(resp) {
		console.log("Logged in");
	})
	.fail(function() {
		console.log("Login error");
	});
	
});