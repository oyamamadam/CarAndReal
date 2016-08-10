/**
 * Created by CTINFO on 1/30/2016.
 */
var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_gender = window.localStorage.getItem("gdc_gender");
var gdc_email = window.localStorage.getItem("gdc_email_id");
var gdc_mobile = window.localStorage.getItem("gdc_contactno");
//alert(gdc_lastname);
var gdc_username = gdc_firstname + " " + gdc_lastname;
$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('username').innerHTML = "Profile";
            document.getElementById('usermobile').innerHTML = "Mobile";
            document.getElementById('useremail').innerHTML = "Email";
        } else {
            document.getElementById('username').innerHTML = gdc_username;
            document.getElementById('usermobile').innerHTML = gdc_mobile;
            document.getElementById('useremail').innerHTML = gdc_email;
        }
        if (gdc_gender == null) {
            document.getElementById('username').innerHTML = "Profile";
        } else {
            if (gdc_gender == "male") {

            } else {
                document.getElementById("profilepic").src = "images/g_female.png";
            }
        }
    }
);
