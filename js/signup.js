//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function(e) {
  
    e.preventDefault()
  
    let username = document.getElementById("username");
  
    let email = document.getElementById("email");
  
    let password = document.getElementById("password")
  
  
    let myRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    /*Vérification des champs du formulaire*/
    if (username.value != "" && password.value != "" && myRegex.test(email.value) == true) {
      //Récupération de l'objet contact et du tableau des produits(id)
      let body = {
          username : username.value,
          password : password.value,
          email : email.value
      }

      fetch('http://localhost:3000/api/auth/singup', {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(body)
      
      }).then (response => {
        return response.json();
      })
      
      .then (function(){
        document.location="forum.html";
      })
      
      .catch(function (error) {
        console.log(error);
      })
    }
    
  else {
    var error = document.getElementById("error")
    error.innerHTML = 'Veuillez remplir tous les champs correctement'
  }
  })