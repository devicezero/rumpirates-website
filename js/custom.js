var hiddenBox = $("#menu-toggle-content");
var menutoggle = $("#menu-toggle");
var menubutton = $("#menu-toggle>span");

menutoggle
	.addEventListener("click", function(event) {
        if (hiddenBox.style.display == "block") {
				hiddenBox.style.display = "none";
				menubutton.setAttribute("class", "icon-bones-to-open");
        }
        else {
            hiddenBox.style.display = "block";
				menubutton.setAttribute("class", "icon-bones-to-close");
        }

});

hiddenBox
	.addEventListener("click", function(event) {
            hiddenBox.style.display = "none";
				menubutton.setAttribute("class", "icon-bones-to-open");
});
