document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

	var adventure = document.getElementById('adventure');
	var friendship = document.getElementById('friendship');
	var identity = document.getElementById('identity');
	var nostalgia = document.getElementById('nostalgia');
	var spontaneity = document.getElementById('spontaneity');

	var adventureInfo = document.getElementById('adventureInfo')

	// color hats on hover
	adventure.addEventListener('mouseover', function() {
		adventure.src="images/adventure-color.png";
	});

	adventure.addEventListener('mouseout', function() {
		adventure.src="images/adventure-bw.png";
	});

	friendship.addEventListener('mouseover', function () {
		friendship.src="images/friendship-color.png";
	});

	friendship.addEventListener('mouseout', function() {
		friendship.src="images/friendship-bw.png";
	});

	identity.addEventListener('mouseover', function() {
		identity.src="images/identity-color.png";
	});

	identity.addEventListener('mouseout', function() {
		identity.src="images/identity-bw.png";
	});

	nostalgia.addEventListener('mouseover', function() {
		nostalgia.src="images/nostalgia-color.png";
	});

	nostalgia.addEventListener('mouseout', function() {
		nostalgia.src="images/nostalgia-bw.png";
	});

	spontaneity.addEventListener('mouseover', function() {
		spontaneity.src="images/spontaneity-color.png";
	});

	spontaneity.addEventListener('mouseout', function() {
		spontaneity.src="images/spontaneity-bw.png";
	});

	// popup info boxes on click
	adventure.addEventListener('click', function() {
		adventureInfo.style.display="block";
		friendshipInfo.style.display="none";
		identityInfo.style.display="none";
		nostalgiaInfo.style.display="none";
		spontaneityInfo.style.display="none";
	});

	friendship.addEventListener('click', function() {
		friendshipInfo.style.display="block";
		adventureInfo.style.display="none";
		identityInfo.style.display="none";
		nostalgiaInfo.style.display="none";
		spontaneityInfo.style.display="none";
	});

	identity.addEventListener('click', function() {
		identityInfo.style.display="block";
		friendshipInfo.style.display="none";
		adventureInfo.style.display="none";
		nostalgiaInfo.style.display="none";
		spontaneityInfo.style.display="none";
	});

	nostalgia.addEventListener('click', function() {
		nostalgiaInfo.style.display="block";
		friendshipInfo.style.display="none";
		identityInfo.style.display="none";
		adventureInfo.style.display="none";
		spontaneityInfo.style.display="none";
	});

	spontaneity.addEventListener('click', function() {
		spontaneityInfo.style.display="block";
		friendshipInfo.style.display="none";
		identityInfo.style.display="none";
		nostalgiaInfo.style.display="none";
		adventureInfo.style.display="none";
	});

	// close info boxes when you click the 'x'
	adventureClose.addEventListener('click', function() {
		adventureInfo.style.display="none";
	})

	friendshipClose.addEventListener('click', function() {
		friendshipInfo.style.display="none";
	})

	identityClose.addEventListener('click', function() {
		identityInfo.style.display="none";
	})

	nostalgiaClose.addEventListener('click', function() {
		nostalgiaInfo.style.display="none";
	})

	spontaneityClose.addEventListener('click', function() {
		spontaneityInfo.style.display="none";
	})
});