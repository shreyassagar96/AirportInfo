const options = {
	method: 'GET',

	headers: {
		'X-RapidAPI-Key': '8ba989fa42msh5280cee6f83a122p14468ajsn90cc98ca0e73',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

const cityname = (iata) => {
	cityName.innerHTML = iata
	fetch('https://airport-info.p.rapidapi.com/airport?iata=' + iata, options)
		.then(response => response.json())
		.then(response => {

			cityName.innerHTML = response.city
			city.innerHTML = response.city
			country.innerHTML = response.country
			country_iso.innerHTML = response.country_iso
			county.innerHTML = response.county
			iata1.innerHTML = response.iata
			icao.innerHTML = response.icao
			id.innerHTML = response.id
			latitude.innerHTML = response.latitude
			location.innerHTML = response.location
			longitude.innerHTML = response.longitude
			name2.innerHTML = response.name
			phone.innerHTML = response.phone
			postal_code.innerHTML = response.postal_code
			state.innerHTML = response.state
			uct.innerHTML = response.uct
			website.innerHTML = response.website
			console.log(response)
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	cityname(airport.value)
})
cityname("DEL")

