/**
 * Created by CTINFO on 1/30/2016.
 */
var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_gender = window.localStorage.getItem("gdc_gender");
var gdc_email = window.localStorage.getItem("gdc_email_id");
var gdc_mobile = window.localStorage.getItem("gdc_contactno");
var profile_image = window.localStorage['profile-image'];
//alert(gdc_lastname);
//var gdc_password = window.localStorage.getItem("gdc_contactno");
var gdc_username = gdc_firstname + " " + gdc_lastname;
$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('firstname').innerHTML = "";
            document.getElementById('lastname').innerHTML = "";
            document.getElementById('usermobile').innerHTML = "Mobile";
            document.getElementById('useremail').innerHTML = "Email";
        } else {
            //document.getElementById('username').innerHTML = gdc_username;
            document.getElementById('firstname').value = gdc_firstname;
            document.getElementById('lastname').value = gdc_lastname;
            //document.getElementById('usermobile').innerHTML = gdc_mobile;
            document.getElementById("usermobile").value = gdc_mobile;
            //document.getElementById('useremail').innerHTML = gdc_email;
            document.getElementById("useremail").value = gdc_email;
        }

        if (profile_image == null && gdc_gender == "male") {
            document.getElementById('profilepic').innerHTML = "images/g_male.png";
        } else if(profile_image == null && gdc_gender == "female") {
            //alert(profile_image);
            document.getElementById("profilepic").src = "images/g_female.png";
        }
        else {
            document.getElementById("profilepic").src = profile_image;
        }

    }
);
//gdc_gender = "female"
if (gdc_gender == "male") {
    document.getElementById("male").checked = true;
    document.getElementById("female").checked = false;
} else {
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = true;
}

function goToGender() {
    if (document.getElementById('male').checked) {
        //var gender = document.getElementById('male').value;
        document.getElementById("profilepic").src = "images/g_male.png";
    }
    if (document.getElementById('female').checked) {
        //var gender = document.getElementById('female').value;
        document.getElementById("profilepic").src = "images/g_female.png";
    }
}

//function onPhotoDataSuccess(imageData) {
//    var smallImage = document.getElementById('smallImage');
//    smallImage.style.display = 'block';
//    smallImage.src = "data:image/jpeg;base64," + imageData;
//
//}

//function getPhoto(source) {
//    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
//        quality: 50,
//        destinationType: destinationType.DATA_URL,
//        sourceType: source
//    });
//}




//var pictureSource;   // picture source
//var destinationType; // sets the format of returned value

//document.addEventListener("deviceready",onDeviceReady,false);

//function onDeviceReady() {
//    pictureSource=navigator.camera.PictureSourceType;
//    destinationType=navigator.camera.DestinationType;
//}

//function onPhotoURISuccess(imageURI) {
//    var largeImage = document.getElementById('profilepic');
//    //alert(imageURI);
//    largeImage.style.display = 'block';
//    largeImage.src = imageURI;
//}
////function getPhoto(source) {
//    // Retrieve image file location from specified source
//    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
//        destinationType: destinationType.FILE_URI,
//        sourceType: source });
//}
//function onFail(message) {
//    alert('Failed because: ' + message);
//}






function goToUpdateProfile() {

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var contactno = document.getElementById('usermobile').value;
    var email_id = document.getElementById('useremail').value;
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

        //cordova.plugin.pDialog.init({
        //    theme: 'HOLO_LIGHT',
        //    progressStyle: 'SPINNER',
        //    cancelable: false,
        //    title: 'Please Wait...',
        //    message: 'Loading ...'
        //});

        $("#preloader").css('display','blcok');

        $.ajax({
            url: BASE_URL + APP_API,
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: '{"method":"UpdateProfile", "uid":"' + gdc_uid + '","first_name":"' + firstname + '","last_name":"' + lastname + '", "gender":"' + gender + '", "contact_no":"' + contactno + '", "email_id":"' + email_id + '"}',
            success: function (data) {
                if (data.success == 0) {
                    //cordova.plugin.pDialog.dismiss();
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');
                    //alert();
                    return false;
                }
                if (data.success == 1) {
                    //cordova.plugin.pDialog.dismiss();
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');
                    //alert();
                    //window.location.href ="verifynumber.html";

                    window.location.href = "profile.html";
                    window.localStorage.setItem("gdc_uid", data.userinfo.regi_id);
                    window.localStorage.setItem("gdc_firstname", data.userinfo.first_name);
                    window.localStorage.setItem("gdc_lastname", data.userinfo.last_name);
                    window.localStorage.setItem("gdc_gender", data.userinfo.gender);
                    window.localStorage.setItem("gdc_contactno", data.userinfo.cotact_no);
                    window.localStorage.setItem("gdc_email_id", data.userinfo.email_id);
                }
                if (data.success == 2) {
                    //cordova.plugin.pDialog.dismiss();
                    navigator.notification.alert(data.message,null,'Alert','Ok');
                    $("#preloader").css('display','none');
                    return false;
                }
            },
            error: function (result) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert('Server Error',null,'Alert','Ok');
                $("#preloader").css('display','none');
                return false;
            }
        });


    }
    else {
        navigator.notification.alert('Invalid Email Address',null,'Alert','Ok');
        $("#preloader").css('display','none');
        //alert('');
        return false;
    }

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