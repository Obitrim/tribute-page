let paginationBtns = document.querySelectorAll(".page-btn");
let biographyBooksContainer = document.querySelector('.bibliography__books');

let booksPerPage = 8;
let books = [
	    "Understanding the Purpose and Power of Men",
	    "Understanding the Purpose and Power of Woman",
	    "The Most Important Person on Earth",
	    "Purpose and Power of Love and Marriage",
	    "The Fatherhood Principle",
	    "Myles Munroe on Relationship",
	    "The Burden of Freedom",
	    "Waiting and Dating",
	    "Kingdom Parenting",
	    "God's Big Idea",
	    "Rediscovering the Kingdom",
	    "Kingdom Principles: Preparing for Kingdom Experience and Expansion",
	    "Applying the Kingdom: Rediscovering the Priority of God for Mankind",
	    "Understanding the Purpose and Power of Prayer",
	    "Rediscovering Faith",
	    "Purpose and Power of Praise and Worship",
	    "Rediscovering Kingdom Worship",
	    "Understanding Your Potential",
	    "Uncover Your Potential: You are More than You Realize",
	    "Releasing Your Potential: Exposing the Hidden You",
	    "Maximizing Your Potential",
	    "The Pursuit of Purpose",
	    "Unleash Your Purpose",
	    "Becoming a Leader",
	    "The Spirit of Leadership",
	    "The Principles and Power of Vision",
	    "Principles and Benefits of Change",
	    "In Charge",
	    "Overcoming Crisis",
	    "The Glory of Living: Keys to Releasing Your Personal Glory",
	    "Purpose And Power Of Authority",
	    "Power Of Character In Leadership: How Values, Morals, Ethics, and Principles Affect Leaders",
	    "Kingdom Citizenship",
	    "Passing It On"
];


/*========================================
=            Assigning Events            =
========================================*/

for(let i = 0; i < paginationBtns.length; i++){
	paginationBtns[i].addEventListener('click', loadPages);
}

window.addEventListener('load', evt => {
	renderPage();
});

window.addEventListener('load', initAOS);

/*========================================
=            Event Handlers              =
========================================*/

/**
 * displays pages of content
 *
 *
 * @param {Object} evt click Event object
 */
function loadPages(evt){
	let pageStartIndex, pageEndIndex;

	// indicate active pagination button
	for(let i = 0; i < paginationBtns.length; i++){
		paginationBtns[i].classList.remove('active');
	}

	evt.target.classList.add('active');

	pageNum = evt.target.getAttribute('data-page-num');
	pageStartIndex = (pageNum - 1) * booksPerPage;
	pageEndIndex = pageStartIndex + booksPerPage;
	pageEndIndex = pageEndIndex > books.length ? books.length : pageEndIndex;

	renderPage(pageStartIndex, pageEndIndex);
}


/**
 * displays pages of content
 *
 *
 * @param {Number} from start index
 * @param {Number} to end index (inclusive);
 */

function renderPage(from = 0, to = booksPerPage ){
	let  pagesHTML = '';

	books
	  .slice(from, to)
	  .forEach(item => {
	  	pagesHTML += `<li class="bibliography__book" data-aos="fade-in-left">${item}</li>`;
	  });

	biographyBooksContainer.innerHTML = pagesHTML;
}


function initAOS(evt){
	AOS.init();
}