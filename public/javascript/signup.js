const signupFormHandler = async function(event) {
  console.log("Hello" , event);

    event.preventDefault();
    const usernameEl = document.querySelector('#username-signup').value.trim();
    const passwordEl = document.querySelector('#password-signup').value.trim();
    console.log(usernameEl, passwordEl);

    fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
          username: usernameEl,
          password: passwordEl
        }),
        headers: { "Content-Type": "application/json" }
      })
  
      .then(function(){
        document.location.replace("/dashboard");
      })
      .catch(error => console.log(error));

    
  }
  
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
