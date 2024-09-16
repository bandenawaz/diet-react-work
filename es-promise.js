const weatherData = new Promise((resolve, reject) => {

    //Simulating api call
    setTimeout(() =>{
        const success = true;
        if(success){
            resolve({temperature: 30, city: 'Mangalore'});
        }else{
            reject('Error fetching weather data');
        }

    }, 2000);
});

weatherData
    .then(data => console.log('Weather :', data))
    .catch(err => console.error(err));


    //Chaining promise
    const getUser = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>resolve({userId: 1, name: 'Azmat'}),2000);
        });
    };

    const getPosts = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(['Post1', 'Post2','Post3']), 2000);
        });
    };

    getUser()
        .then(user => {

            console.log('User :', user);
            return getPosts(user.userId);

        })
        .then(posts => console.log('Posts :', posts))
        .catch(err => console.error(err));