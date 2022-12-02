	$(window).on('load',function(){
		// console.log('loaded')
		let location = window.location.href;
		// console.log(location);
		if(location.includes('index.php'))
		{
			$('.row.bxsdw').css("width", '65%');
			$('.row.bxsdw').css("margin", 'auto');
		}
		if(location.includes("utm_source=Google")){
			$('#lead-form').removeClass('hide').addClass('show');
			$('.modal').css("margin-top", Math.max(0, ($(window).height() - $('.modal').height()) / 2));	
			// console.log('done');
		}
		else{
			// console.log('not done')
		}
	});

	$('.close-lead').on('click',function(){
		$('#lead-form').removeClass('show').addClass('hide');
	})

	$('#lead-form-skip').on('click',function(){
    	$('.modal').removeClass('show').addClass('hide');
	})

					function printError(elemId, hintMsg) {
						document.getElementById(elemId).innerHTML = hintMsg;
					}
					function onSubmit1() {

					  //captcha verified
					  //do the rest of your validations here
					  
					 
						$('.section-loader').css('display','flex');
						var name = document.contactForm.name.value;
						var email = document.contactForm.email.value;
						var mobile = document.contactForm.phone.value;

						var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
						if(name == "") {
							printError("nameErr", "Please enter your name");
							$('.section-loader').css('display','none');
						} else {
							var regex = /^[a-zA-Z\s]+$/;                
							if(regex.test(name) === false) {
								printError("nameErr", "Please enter a valid name");
								$('.section-loader').css('display','none');
							} else {
								printError("nameErr", "");
								$('.section-loader').css('display','none');
								nameErr = false;
							}
						}
						if(email == "") {
							printError("emailErr", "Please enter your email address");
							$('.section-loader').css('display','none');
						} else {
							var regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
							if(regex.test(email) === false) {
								printError("emailErr", "Please enter a valid email address");
								$('.section-loader').css('display','none');
							} else{
								printError("emailErr", "");
								emailErr = false;
								$('.section-loader').css('display','none');
							}
						}
						if(mobile == "") {
							printError("mobileErr", "Please enter your mobile number");
							$('.section-loader').css('display','none');
						} else {
							var regex = /^[1-9]\d{9}$/;
							if(regex.test(mobile) === false) {
								printError("mobileErr", "Please enter a valid 10 digit mobile number");
								$('.section-loader').css('display','none');
							} else{
								printError("mobileErr", "");
								mobileErr = false;
								$('.section-loader').css('display','none');
							}
						}
						
						var response = grecaptcha.getResponse();

						//console.log(grecaptcha);
						//console.log(response);
					 /* if(response.length == 0) 
					  { 
					    //reCaptcha not verified
					    alert("please verify you are humann!"); 
					    evt.preventDefault();
					    return false;
					  }*/

					  if((nameErr || emailErr || mobileErr ) == true) {
							$('.section-loader').css('display','none');
							return false;
						} else {

							if(response.length != 0)
							{
								$('.section-loader').css('display','flex');
								document.getElementById("contactForm").submit();
							}
							else
							{
								alert("please verify captcha"); 
								return false;
							}

						}
					}

    $('a').each(function() {
    var href = $(this).attr('href');
	var querystring = window.location.href.slice(window.location.href.indexOf('?') + 1);
	if(href && querystring){
		if(querystring.indexOf('=') >= 0) 
		{
		  $(this).attr('href', href+'?'+querystring);
		}
	}
});
