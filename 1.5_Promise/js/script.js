console.log('You are at '+window.location);




const getData = new Promise ((resolve) => {
	const data = 'String(anything)'

	setTimeout(() => {
		resolve(data)
	}, 1000)
})

getData
   
    .then(result => {
    	return '' + result
    })
    .then(data => {
    	return data.toLowerCase()
    })
    .then(console.log)
