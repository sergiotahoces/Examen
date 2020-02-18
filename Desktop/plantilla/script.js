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
        ulListUsers.innerHTML += `<div class="container-fluid all">
        <div class="row" id="home">
          <div class="col-5 col-md-5" id="user">
            <div class="img">
              <a>
                <img src="${usersWeb[i].picture.large}" class="img">
              </a>
            </div>
        </div>
        <div class="Information">
            <div class="Name">
              <a>
                ${usersWeb[i].name.title}
                ${usersWeb[i].name.first}
                ${usersWeb[i].name.last}
              </a>
            </div>
            <div class="info fas fa-phone-square-alt" >
            <i class="fas fa-phone"></i>
                ${usersWeb[i].phone}
            </div>
            <div class="mail">
            <i class="fas fa-envelope"></i>
                ${usersWeb[i].email}
            </div>
            <div>
            <i class="fas fa-birthday-cake"></i>
                ${usersWeb[i].dob.date.substring(8,10)}-${usersWeb[i].dob.date.substring(5,7)}-${usersWeb[i].dob.date.substring(0,4)}

            </div>
            <div>
            <i class="fas fa-map"></i>
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