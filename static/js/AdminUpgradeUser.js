// Upgrade user to admin
let upgrade_user = document.getElementById('upgrade_user');
upgrade_user.addEventListener('submit', user_admin);

function user_admin(e){
    //function to upgrade a user to admin
    e.preventDefault();
    let email = document.getElementById('email').value;
    let token = window.localStorage.getItem('token');
    //fetch endpoint to upgrade user
    fetch('https://young-depths-42728.herokuapp.com/api/v2/auth/admin', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.response != undefined) {
                //if request not successful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response
            }
            if(data.response === "User Upgraded"){
                //if request successful
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response;
            }
        })
}