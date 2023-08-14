


document.getElementById('submitBtn').addEventListener('click', function(){
//    get the email address inside the input fild
//  always remember to use .value to get text from input fild
    const userEmail = document.getElementById('userEmail')
    const email = userEmail.value;
    // console.log(email) 
    // get the password
    const userPassword = document.getElementById('userPassword')
    const password = userPassword.value;
    // console.log(email, password)

    // do not try this this way is not valid
    // verify email and password
    if(email === "hablu@gmail.com" && password === "hablu"){
        window.location.href = 'bank.html';
    }else{
        alert ('password vule gesis')
    }
})
