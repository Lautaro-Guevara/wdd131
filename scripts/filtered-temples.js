const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires, Argentina",
		dedicated: "1986, January, 17",
		area: 11969,
		imageUrl:"https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/320%2C/0/default"
	},
	{
		templeName: "Recife Brasil",
		location: "Recife, Brasil",
		dedicated: "1986, January, 10",
		area: 37243,
		imageUrl:"https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/320%2C/0/default"
	},
	{
		templeName: "Bogota Colombia",
		location: "Bogota, Colombia",
		dedicated: "1986, January, 10",
		area: 53500,
		imageUrl:"https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/320%2C/0/default"
	}
  ];

const homeLink = document.querySelector('#home');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largerLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

homeLink.addEventListener('click', () => {
	createTempleCard(temples)
});

oldLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.dedicated < '1900, January, 1'))
});

newLink.addEventListener('click', () =>{
	createTempleCard(temples.filter(temple => temple.dedicated > '2000, December, 31'))
})

largerLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});


smallLink.addEventListener('click', () =>{
	createTempleCard(temples.filter(temple => temple.area < 10000))
} );




    const templeContainer = document.querySelector('.temple-container');
	function createTempleCard(filteredTemple) {
		templeContainer.innerHTML= " "
		filteredTemple.forEach((temple) => {
		const templeCard = document.createElement('div');
		templeCard.classList.add('temple-card');
		
		// Temple Name
		const nameElement = document.createElement('h3');
		nameElement.textContent = temple.templeName;

		templeCard.appendChild(nameElement);
		
		// Location
		const locationElement = document.createElement('p');
		locationElement.innerHTML = `<span class="label"> Location: </span> ${temple.location} `;
		templeCard.appendChild(locationElement);
		
		// Dedication Date
		const dedicationElement = document.createElement('p');
		dedicationElement.innerHTML = `<span class="label"> Dedication: </span> ${temple.dedicated}`;
		templeCard.appendChild(dedicationElement);
		
		// Area
		const areaElement = document.createElement('p');
		areaElement.innerHTML = `<span class="label"> Area: </span> ${temple.area} square feet`;
		templeCard.appendChild(areaElement);
		
		// Figure
		const figureElement = document.createElement('figure');
		templeCard.appendChild(figureElement);

		// Image
		const imageElement = document.createElement('img');
		imageElement.src = temple.imageUrl;
		imageElement.alt = temple.templeName;
		imageElement.loading = 'lazy'; // Native lazy loading
		figureElement.appendChild(imageElement);

		templeContainer.appendChild(templeCard);
	});
	}
