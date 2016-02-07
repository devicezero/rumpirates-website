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

// Set to the same value as the web property used on the site
var gaProperty = 'UA-64996348-3';
var disableStr = 'ga-disable-' + gaProperty;

// Disable tracking if the opt-out cookie exists.
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
window[disableStr] = true;
}
