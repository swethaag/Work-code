const min = 40;
const max = 1000;

const fname= document.querySelector("#inputFname");
window.onload = (event) => {
    console.log(fname)

  };
fname.addEventListener("input", ()=>{
    let nameInput =  document.querySelector("#inputFname").value

    if(!nameInput){
        document.querySelector(".nameFError").innerText = "Please Enter your name";
    }else if(nameInput.length < 3){
        document.querySelector(".nameFError").innerText = "Please Enter valid name"
    } else if(nameInput.length >= 3){
        document.querySelector(".nameFError").innerText = ""
    }

})



const validMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

const YourEmail = document.querySelector("#inputEmail");
YourEmail.addEventListener("input", () => {
    let mailError = document.querySelector(".emailError")
    let value = document.querySelector("#inputEmail").value;
    if(!value){
        mailError.innerText = "Please Enter Your Mail"
    }else if(!value.match(validMail)){
        mailError.innerText = "Please Enter Valid Mail"
    }else if(value.match(validMail)){
        mailError.innerText = ""
    }
});


const validNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


const phone = document.querySelector("#phone");
phone.addEventListener("input", () => {
    let mobileError = document.querySelector(".mobileError")
    let value = document.querySelector("#phone").value;
    if(!value){
        mobileError.innerText = "Please Enter Number"
    }else if(isNaN(value) === true){
        mobileError.innerText = "Please Enter Only Numbers"
    }
    else if(!value.match(validNumber)){
        mobileError.innerText = "Please Enter Valid Number"
    }
    else if(value.match(validNumber)){
        mobileError.innerText = ""
    }
})


