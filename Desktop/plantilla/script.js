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


function showUsers(response) {
    console.log(response);
    const usersWeb = response.results;
  

    for (let i = 0; i < usersWeb.length; i++) {
        ulListUsers.innerHTML += `<div class="container-fluid">
        <div class="row" id="home">
          <div class="col-5 col-md-12" id="user">
            <div class="img">
              <a>
                <img src="${usersWeb[i].picture.large}" alt="">
              </a>
            </div>
            <div class="Name">
              <a>
                ${usersWeb[i].name.title}
                ${usersWeb[i].name.first}
                ${usersWeb[i].name.last}
              </a>
            </div>
            <div class="info" >
                ${usersWeb[i].phone}
            </div>
            <div class="mail">
                ${usersWeb[i].email}
            </div>
            <div>
                ${usersWeb[i].dob.date.substring(0,10)}
            </div>
            <div>
                ${usersWeb[i].location.postcode},
                ${usersWeb[i].location.street},
                ${usersWeb[i].location.city},
                ${usersWeb[i].location.state}

            </div>

            
            
          </div>
        </div>
      </div>`
    }
}


fetchData('https://randomuser.me/api/?results=8', showUsers);