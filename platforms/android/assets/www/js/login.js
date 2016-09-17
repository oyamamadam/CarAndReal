document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    //alert('back');
    //finish();
    //return true;
    navigator.app.exitApp();
}
function checkLogin() {
    var user = window.localStorage.getItem("gdc_email_id");
    //alert(user);
    if (user == null) {

    } else {
        window.location.href = "index.html";
    }
}

function goToSignUp() {
    window.location.href = "signup.html";
    return true;
}
function goToForget() {
    window.location.href = "forgot.html";
    return true;
}

function iwilldolater() {
    window.location.href = "index.html";
    return true;
}

var login = function () {
    if (!window.cordova) {
        var appId = prompt("Enter FB Application ID", "");
        facebookConnectPlugin.browserInit(appId);
    }
    facebookConnectPlugin.login(["email"],
        function (response) {
            //alert("A");
            //alert(JSON.stringify(response));
            apiTest();
        },
        function (response) {
            //alert("B");
            //alert(JSON.stringify(response));
        }
    );

}

var showDialog = function () {
    facebookConnectPlugin.showDialog({method: "feed"},
        function (response) {
            //alert(JSON.stringify(response));
        },
        function (response) {
            //alert(JSON.stringify(response));
        });
}

var apiTest = function () {
    //facebookConnectPlugin.api("me/?fields=id,name,email,gender", ["public_profile"],
        facebookConnectPlugin.api("me/?fields=id,name,email,gender,picture.width(160).height(160)", ["public_profile"],
        function (response) {
            //alert("C")
            //alert(JSON.stringify(response));
            //alert(response.name);
            var fullname = response.name;
            var contactno = "0";
            var email_id = response.email;
            var password = "123456";
            var birthday = response.birthday;
            var gender = response.gender;
            var profile_image = response.picture.data.url;

            window.localStorage['profile-image'] = profile_image;
            //alert(response.birthday);
            //alert(response.gender);
            goSocialLogin(fullname, gender, contactno, email_id, password);
        },
        function (response) {
            //alert("D")
            //alert(JSON.stringify(response))
        }
    );
}

var logPurchase = function () {
    facebookConnectPlugin.logPurchase(1.99, "USD",
        function (response) {
            //alert(JSON.stringify(response))
        },
        function (response) {
            //alert(JSON.stringify(response))
        });
}

var logEvent = function () {
    // For more information on AppEvent param structure see
    // https://developers.facebook.com/docs/ios/app-events
    // https://developers.facebook.com/docs/android/app-events
    facebookConnectPlugin.logEvent("Purchased",
        {
            NumItems: 1,
            Currency: "USD",
            ContentType: "shoes",
            ContentID: "HDFU-8452"
        }, null,
        function (response) {
            //alert(JSON.stringify(response))
        },
        function (response) {
            //alert(JSON.stringify(response))
        });
}

var getAccessToken = function () {
    facebookConnectPlugin.getAccessToken(
        function (response) {
            //alert(JSON.stringify(response))
        },
        function (response) {
            //alert(JSON.stringify(response))
        });
}

var getStatus = function () {
    facebookConnectPlugin.getLoginStatus(
        function (response) {
            //alert(JSON.stringify(response))
        },
        function (response) {
            //alert(JSON.stringify(response))
        });
}

var logout = function () {
    facebookConnectPlugin.logout(
        function (response) {
            //alert("1");
            //alert(JSON.stringify(response))
        },
        function (response) {
            //alert("2");
            //alert(JSON.stringify(response))
        });
}
var first_name = "";
var last_name = "";
function goSocialLogin(name, gender, contact_no, email_id, password) {
    var index = name.indexOf(" ");
    first_name = name.substr(0, index);
    last_name = name.substr(index + 1);

    var app = {
        initialize: function () {
            this.bindEvents();
        },
        bindEvents: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function () {
            app.receivedEvent('deviceready');
            goSocialLoginUser(first_name, last_name, gender, contact_no, email_id, password);
        },
        receivedEvent: function (id) {

        }
    };
    app.initialize();


}

function goSocialLoginUser(first_name, last_name, gender, contact_no, email_id, password) {

    var socialLogin = '{"method":"SingUpSocial", "first_name":"' + first_name + '","last_name":"' + last_name + '", "gender":"' + gender + '", "contact_no":"' + contact_no + '", "email_id":"' + email_id + '", "password":"' + password + '"}';
    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: socialLogin,
        success: function (data) {

            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');

            if (data.success == 0) {
                navigator.notification.alert(data.message,null,'Alert','Ok');
                return false;
            }
            if (data.success == 1) {
                logout();
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
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function goToLogin() {
    var email_id = document.getElementById('email_id').value;
    var password = document.getElementById('password').value;
    if ($.trim(email_id).length == 0) {
        navigator.notification.alert('Please enter valid email address',null,'Alert','Ok');
        return false;
    }

    if (validateEmail(email_id)) {
        if ($.trim(password).length == 0) {
            navigator.notification.alert('Please enter password',null,'Alert','Ok');
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
                    goLoginUser(email_id, password);
                },
                receivedEvent: function (id) {

                }
            };
            app.initialize();


        }
    }
    else {
        navigator.notification.alert('Invalid Email Address',null,'Alert','Ok');
        return false;
    }
}

function goLoginUser(email_id, password) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"UserLogin", "email_id":"' + email_id + '", "password":"' + password + '"}',
        success: function (data) {
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            if (data.success == 1) {
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
                //var gdc_lang = window.localStorage.getItem("gdc_lang");
                //alert(gdc_lang);
            }
            else {
                navigator.notification.alert('Please enter valid email address or password',null,'Alert','Ok');
                return false;
            }
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
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