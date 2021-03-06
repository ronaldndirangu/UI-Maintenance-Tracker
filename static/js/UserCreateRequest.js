// user can create requests
let post_request = document.getElementById('create_request')
post_request.addEventListener('submit', createrequest);

function createrequest(e) {
    //function to create a user request
    e.preventDefault();
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let request_type = document.getElementById('request_type').value;
    let token = window.localStorage.getItem('token');
    //endpoint to enable user to create a request
    fetch('https://young-depths-42728.herokuapp.com/api/v2/users/requests', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'token': token
            },
            body: JSON.stringify({
                title: title,
                description: description,
                request_type: request_type
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.response != undefined) {
                //response if request is unsuccessful
                document.getElementById('output').style.color = 'red'
                document.getElementById('output').innerHTML = data.response
            }
            if(data.response === "request created successfully"){
                document.getElementById('output').style.color = 'green'
                document.getElementById('output').innerHTML = data.response
                document.getElementById("create_request").reset();
            }
        })
}