const form = document.getElementById("form")
const name = document.getElementById("name")
const pass = document.getElementById("pass")
const confirmpass = document.getElementById("repass")
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    //trim to remove whitespace
    const namevalue = name.value.trim();
    const passwordvalue = pass.value.trim();
    const confirmvalue = confirmpass.value.trim();
    let nameflag;
    let passwordflag;
    let confirmpasswordflag;
    if (namevalue === '') {
        setErrorFor(name, "Please enter your name")
    } else {
        setSuccessFor(name);
        nameflag = true;
    }

    if (passwordvalue === '') {
        setErrorFor(pass, "Please enter your password");
    } else if (!isPassword(passwordvalue)) {
        setErrorFor(pass, "Atleast one number, one uppercase, lowercase letter, and atleast 8 character");
    } else {
        setSuccessFor(pass);  // Before password value passed, password Element should pass
        passwordflag = true;
    }
    if (confirmvalue === '') {
        setErrorFor(confirmpass, "Please enter confirm password");
    } else if (confirmvalue!= passwordvalue) {
        setErrorFor(confirmpass, "confirm password not match");
    } else {
        setSuccessFor(confirmpass);
        confirmpasswordflag = true;
    }

    if (nameflag == true && passwordflag == true && confirmpasswordflag == true) {
        document.getElementById('button').disabled == false;
        alert("Registered Successfully")
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form-control error'   // Syntax error, before it was "ClassName"
        small.innerText = message;
        small.style.visibility = "visible"; //Error message was hidden, so i add visible

        if (message.length > 34) { // If message was more long, message move top of the input so move to bottom
            small.style.bottom = "-15px"
        }
        else {
            small.style.bottom = "0"
        }
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success'   // Syntax error, before it was "ClassName"
        const small = formControl.querySelector('small')
        small.innerText = "";
        small.style.visibility = "hidden"; //Hide error message, after input valid
    }

    function isPassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }
    
}