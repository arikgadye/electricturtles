$(document).ready(function(){
	spinText();
});


function spinText() {
	var firstH1 = $('h1').first();
	var secondH1 = $('h1:nth-child(2)');
	firstH1.attr("id", "one");
	secondH1.attr("id", "two");
};