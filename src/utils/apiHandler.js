const BASE_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2'

const getOptions = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': import.meta.env.VITE_GOOGLE_TRANSLATE_API,
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "es");
// encodedParams.append("source", "en");


export const getData = async (url) => {
    const { data } = await fetch(`${BASE_URL}/${url}`, getOptions)
								.then(response => response.json())
								.then(response=>response)
								.catch(err => console.error(err))
    return data;
}


export const postData = async (url, body) => {
    const { data } = await fetch(`${BASE_URL}/${url}`, {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key': import.meta.env.VITE_GOOGLE_TRANSLATE_API,
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		},
		body: body
	})
	.then(response => response.json())
	.then(response=>response)
	.catch(err => console.error(err))

    return data;
}