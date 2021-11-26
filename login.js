function validate(formObj) {
    // put your validation code here
    // it will be a series of if statements
    var alerta = [];
    error = 0;
    if (formObj.firstName.value == "") {
       formObj.firstName.focus();
       alerta.push("You must enter a first name");
    }
    if(formObj.lastName.value == "") {
       alerta.push("You must enter a last name");
          formObj.lastName.focus();
          error =1;
    }
    if(formObj.email.value ==""){
       alerta.push("You must enter a email value");
          formObj.email.focus();
          error=1
    }
    console.log("test")
    if (error == 1){
       alert("Your form is successfully submitted");
       var alerts = '';
       for (let i = 0; i < alerta.length; i++) {
          alerts = alerts + alerta[i]+"\n";
       }
       console.log(alerta);
       alert(alerts);
       return false;
    }
    return true;
 }

 function erase(formObj2){
    if(formObj2.value == "Please enter your comments"){
       formObj2.value ="";
    }
 }

 function processB(){
    console.log("hello");
    form = document.getElementById('addForm');
    fn = form.firstName.value;
    //alert(fn);
    alert(fn + " " + form.lastName.value + " is " +form.nickname.value);
 }