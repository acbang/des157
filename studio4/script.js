document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

	var tipTimer;
	var regTimer;

	var bobaTip = document.getElementById('bobaTip');
	var showerTip = document.getElementById('showerTip');
	var deathstarTip = document.getElementById('deathstarTip');
	var eggheadTip = document.getElementById('eggheadTip');

	var boba = document.getElementById('boba');
	var shower = document.getElementById('shower');
	var deathstar = document.getElementById('deathstar');
	var egghead = document.getElementById('egghead');

	var bobaVideo = document.getElementById('bobaVideo');

	boba.addEventListener ('mouseover', function() {
		tipTimer = setTimeout(showBobaTip);
	});

	boba.addEventListener ('mouseout', function() {
		clearTimeout(tipTimer);
		bobaTip.style.opacity = 0;
	});

	function showBobaTip() {
		bobaTip.style.opacity = 0.7;
		bobaTip.style.transition = 'all .4s';
	};

	shower.addEventListener ('mouseover', function() {
		tipTimer = setTimeout(showShowerTip);
	});

	shower.addEventListener ('mouseout', function() {
		clearTimeout(tipTimer);
		showerTip.style.opacity = 0;
	});

	function showShowerTip() {
		showerTip.style.opacity = 0.7;
		showerTip.style.transition = 'all .4s';
	};

	deathstar.addEventListener ('mouseover', function() {
		tipTimer = setTimeout(showDeathstarTip);
	});

	deathstar.addEventListener ('mouseout', function() {
		clearTimeout(tipTimer);
		deathstarTip.style.opacity = 0;
	});

	function showDeathstarTip() {
		deathstarTip.style.opacity = 0.7;
		deathstarTip.style.transition = 'all .4s';
	};

	egghead.addEventListener ('mouseover', function() {
		tipTimer = setTimeout(showEggheadTip);
	});

	egghead.addEventListener ('mouseout', function() {
		clearTimeout(tipTimer);
		eggheadTip.style.opacity = 0;
	});

	function showEggheadTip() {
		eggheadTip.style.opacity = 0.7;
		eggheadTip.style.transition = 'all .4s';
	};
});