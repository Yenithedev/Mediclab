const toggleButton = document.getElementsByClassName("navbar_toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar_links");

toggleButton.addEventListener("click", function(){
	for(var i=0; i<navbarLinks.length; i++)
		navbarLinks[i].classList.toggle("active_2");
});