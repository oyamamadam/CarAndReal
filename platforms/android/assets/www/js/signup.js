document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);

    window.plugins.sim.getSimInfo(successCallback, errorCallback);

}

function successCallback(result) {
    //alert("Ashish : "+result.phoneNumber);
    var number =  result.phoneMumber;
    if (!number)
    {
        //document.getElementById('contactno').setAttribute('value', 'eg: 70741771');
    }else {
        document.getElementById('contactno').setAttribute('value', result.phoneNumber);
    }
}

function errorCallback(error) {
    navigator.notification.alert(error,null,'Alert','Ok');
}
function onBackKeyDown() {
    //alert('back');
    //finish();
    //return false;
    navigator.app.backHistory();

}
//function checkLogin() {
//    var user = window.localStorage.getItem("gdc_email_id");
//    if (user == null) {
//    } else {
//        window.location.href = "index.html";
//    }
//}
function iwilldolater() {
    window.location.href = "index.html";
    return true;
}

function goToSignUp() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var contactno = document.getElementById('contactno').value;
    var email_id = document.getElementById('emailid').value;
    var password = document.getElementById('password').value;
    if (document.getElementById('male').checked) {
        var gender = document.getElementById('male').value;
    }
    if (document.getElementById('female').checked) {
        var gender = document.getElementById('female').value;
    }
    if ($.trim(firstname).length == 0) {
        navigator.notification.alert('Please enter first name.',null,'Alert','Ok');
        return false;
    }
    if ($.trim(lastname).length == 0) {
        navigator.notification.alert('Please enter last name.',null,'Alert','Ok');
        return false;
    }
    if ($.trim(contactno).length == 0) {
        navigator.notification.alert('Please enter contact no.',null,'Alert','Ok');
        return false;
    }
    if ($.trim(contactno).length < 10) {
        navigator.notification.alert('Please enter valid contact no.',null,'Alert','Ok');
        return false;
    }
    if ($.trim(email_id).length == 0) {
        navigator.notification.alert('Please enter valid email address.',null,'Alert','Ok');
        return false;
    }

    if (validateEmail(email_id)) {
        if (validatePassword(password)) {
            if (document.getElementById('tccheck').checked == false) {
                navigator.notification.alert('You must agree to the terms first.',null,'Alert','Ok');
                return false;
            }
            else {
                var app = {
                    initialize: function () {
                        this.bindEvents();
                    },
                    bindEvents: function () {
                        document.addEventListener('deviceready', this.onDeviceReady, false);
                    },
                    onDeviceReady: function () {
                        app.receivedEvent('deviceready');
                        signUp(firstname, lastname, gender, contactno, email_id, password);
                    },
                    receivedEvent: function (id) {

                    }
                };
                app.initialize();
            }
        }
    }
    else {
        navigator.notification.alert('Invalid Email Address',null,'Alert','Ok');

        return false;
    }

}

function signUp(firstname, lastname, gender, contactno, email_id, password) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','none');

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"SingUp", "first_name":"' + firstname + '","last_name":"' + lastname + '", "gender":"' + gender + '", "contact_no":"' + contactno + '", "email_id":"' + email_id + '", "password":"' + password + '"}',
        success: function (data) {
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            if (data.success == 0) {
                navigator.notification.alert(data.message,null,'Alert','Ok');
                return false;
            }
            if (data.success == 1) {
                //window.location.href ="verifynumber.html";
                //alert(data.userinfo.first_name);
                //alert(data.userinfo.last_name);
                window.location.href = "index.html";
                window.localStorage.setItem("gdc_uid", data.userinfo.regi_id);
                window.localStorage.setItem("gdc_firstname", data.userinfo.first_name);
                window.localStorage.setItem("gdc_lastname", data.userinfo.last_name);
                window.localStorage.setItem("gdc_gender", data.userinfo.gender);
                window.localStorage.setItem("gdc_contactno", data.userinfo.contact_no);
                window.localStorage.setItem("gdc_email_id", data.userinfo.email_id);
                window.localStorage.setItem("gdc_lang", "en");
            }
            if (data.success == 2) {
                navigator.notification.alert(data.message,null,'Alert','Ok');
                return false;
            }
        },
        error: function (result) {
            navigator.notification.alert('Error',null,'Alert','Ok');
            return false;
        }
    });
}

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
function validatePassword(password) {
    if (password != "") {
        if (password.length < 6) {
            navigator.notification.alert('Error: Password must contain at least six characters!',null,'Alert','Ok');
            //password.focus();
            return false;
        }
        re = /[0-9]/;
        if (!re.test(password)) {
            navigator.notification.alert('Error: password must contain at least one number (0-9)!',null,'Alert','Ok');
            //form.pwd1.focus();
            return false;
        }
        re = /[a-z]/;
        if (!re.test(password)) {
            navigator.notification.alert('Error: password must contain at least one lowercase letter (a-z)!',null,'Alert','Ok');
            //form.pwd1.focus();
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(password)) {
            navigator.notification.alert('Error: password must contain at least one uppercase letter (A-Z)!',null,'Alert','Ok');
            //form.pwd1.focus();
            return false;
        }
    } else {
        navigator.notification.alert('Please enter password!',null,'Alert','Ok');
        //form.pwd1.focus();
        return false;
    }

    //alert("You entered a valid password: " + password);
    return true;
}