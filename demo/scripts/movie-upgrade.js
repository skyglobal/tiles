function openPrimaryNav(){
    document.getElementById('privacy_copy').setAttribute('class','open');
    privacy_link.onclick = closePrimaryNav;
}

function closePrimaryNav() {
    document.getElementById('privacy_copy').setAttribute('class','');
    privacy_link.onclick = openPrimaryNav;
}

function editEmail() {
	console.log("Edit Email")
	return false;
}

function placeOrder() {
	loader.style.display = "block";
	content.style.visibility = "hidden";
	setTimeout(function(){
		content.style.display = "none";
		loader.style.display = "none";
		success.style.display = "block"
	}, 3000);
	return false;	
}

var oneClickUpgrade = {
	init : function(){
		privacy_link = document.getElementById('privacy_link');
    	edit_email = document.getElementById('edit_email');
    	place_order = document.getElementById('place_order');
    	loader = document.getElementById('loader');	
    	content = document.getElementById('order-content');
    	success = document.getElementById('success-content')

	    oneClickUpgrade.events();
	},
	events : function(){
		privacy_link.onclick = openPrimaryNav;
    	edit_email.onclick = editEmail;
    	place_order.onclick = placeOrder;
	}
}

window.onload = oneClickUpgrade.init;