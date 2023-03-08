const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
        const username = loginInput.value;
       console.log(username);
}
onLoginSubmit()

loginForm.addEventListener("submit", onLoginSubmit);