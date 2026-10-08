// JavaScript Document// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (10 images)
const slides = [
	{ src: 'images/cat.jpeg', 
 	  alt: 'catInSuitecase',
	  caption: 'When I left for my Girl Scout trip in 2022 there were some hard goodbyes'
	},
	{ src: 'images/hotelNight.jpeg', 
 	  alt: 'moonOverHotel',
	  caption: 'I was all alone in a new land'
	},
	{ src: 'images/coro.jpeg', 
 	  alt: 'townAroundLake',
	  caption: 'Excited for new journeys'
	},
	{ src: 'images/ampatheater.jpeg',
	  alt: 'verona',
	  caption: 'But as the youngest it was hard to fit in'
	},
	{ src: 'images/palece.jpeg',
	  alt: 'palece',
	  caption: 'Slowly connecting with others'
	},
	{ src: 'images/goodNight.jpeg',
	  alt: 'bigBeerBarel',
	  caption: 'From forming inside jokes'
	},
	{ src: 'images/clocktowerveiw.jpeg',
	  alt: 'veiwFromClockTower',
	  caption: 'To enduring fights in beautiful locations'
	},
	{ src: 'images/moutHike.jpeg',
	  alt: 'hikerOnTrail',
	  caption: 'Hiking the Alps alone'
	},
	{ src: 'images/swissBeef.jpeg',
	  alt: 'cowsOnHill',
	  caption: 'Well... not completely alone'
	},
	{ src: 'images/outChatue.jpeg',
	  alt: 'ourChalet',
	  caption: 'To reach the place all Girl Scouts call home'
	},
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src; //replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
	caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);