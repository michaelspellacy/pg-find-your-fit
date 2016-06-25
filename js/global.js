
$("#section-overview .intro-content").after("<button id=\"nav-button\" type=\"button\">View Career Areas</button>");

$("button").on("click", function(){

	if (!$(".ajax").length) {

		if($(this).hasClass("active")) {

			$("nav").hide();
			$(this).removeClass("active");

		} else {

			$(this).addClass("active");
			$("nav").show();

		}

	} else {

		$(".ajax").fadeOut("slow", function() {

			$(this).remove();

		});

	}

	return false;

});

$("#primary-navigation a").on("click", function(){

	$(this).addClass("active");

	if (!$(".ajax").length) {

		$("nav").append("<div class=\"ajax\">Loading content. Please be patient.</div>");

	}

	$(".ajax").load(this.href.split('#')[0] + " #" + this.href.replace(/^.*?(#|$)/,'') + " > *", function() {

		$(this).append("<button class=\"btn-close\" type=\"button\">Close</button>");
		$(this).delay(500).animate({top:"0"});
		$(this).find("h2").attr("tabindex", "-1").focus();

		$(".btn-close").on("click", function(){

			$("#primary-navigation a").removeClass("active");

			$(this).parent().fadeOut("slow", function() {

				$(this).remove();

			});

			$("nav").attr("tabindex", "-1").focus();

		});

	});

	return false;

});

// Slide back to top

$(".back-to-top a, a.back-to-top").on("click", function(){ // Add id of "top" or "page" to outer most wrapper

	$("html, body").animate({scrollTop: $($(this).attr('href') ).offset().top}, "slow");
 
	return false;

});
