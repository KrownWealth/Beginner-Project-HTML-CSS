// adding variables for all the id errors

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var dobError = document.getElementById('dob-error');
var roleError = document.getElementById('role-error');
var optionError = document.getElementById('option-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

// name
function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;

}

// email
function validateEmail(){
    var email = document.getElementById('contact-email').value;

//check the conditions if the format for inputting email is correct

if(!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
    emailError.innerHTML = 'Email Invalid'
    return false;
}

    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

// age
function validateDOB(){
    
    // get the date from the text box
    var dob= document.getElementById('contact-dob').value;

    //validation pattern using Regular Expression Regex dd/MM/yy
    if (regex.test(dob)) {
        var parts = dob.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        dobError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }

            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
 
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            dobError.innerHTML = "";
            return true;
        } else {
            dobError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
            return false;
        }
    }
}


//role
function validateRole (){
   var role = document.getElementById('roleSelect').value;
   if(role.value == ""){
    roleError.innerHTML = "Please select an option";
    return false;
   }
   roleError.innerHTML = "Valid";
    return true;

   }
   
//message
function validateMessage (){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false
    }
    messageError.innerHTML =  '<i class="fa fa-check-circle"></i>';
    return true;

}

//submit
function validateForm(){
    if(!validateName() || !validateEmail() || !validateDOB() || !validateRole() || !validateMessage()){
        submitError.innerHTML = 'Please fix error to submit';
        return false;
    }
}
