var ulListUsers = document.querySelector('ul');

function fetchData(url, callBack) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callBack(request.response);
        }
    };
    request.send();
}


function showFilms(response) {
    console.log(response);
    const movies = response.results;

    for (let i = 0; i < movies.length; i++) {
        ulListFilms.innerHTML += ``
    }
}


fetchData('https://randomuser.me/api/?results=8', showUsers);