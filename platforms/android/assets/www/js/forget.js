/**
 * Created by CTinfotech on 11/23/2015.
 */
document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}
function goForget() {
    var email_id = document.getElementById('emailid').value;
    //alert(email_id);
    if ($.trim(email_id).length == 0) {
        navigator.notification.alert('Please enter valid email address',null,'Alert','Ok');
        return false;
    }

    if (validateEmail(email_id)) {

        var app = {
            initialize: function () {
                this.bindEvents();
            },
            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            onDeviceReady: function () {
                app.receivedEvent('deviceready');
                forgetUser(email_id);
            },
            receivedEvent: function (id) {

            }
        };
        app.initialize();

    }
    else {

        navigator.notification.alert('Invalid Email Address',null,'Alert','Ok');
        return false;
    }

}

function forgetUser(email_id) {

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
        data: '{"method":"ForgetPassword", "email_id":"' + email_id + '"}',
        success: function (data) {
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            if (data.success == 0) {
                navigator.notification.alert(data.message,null,'Alert','Ok');
                alert(data.message);
                return false;
            }
            if (data.success == 1) {
                navigator.notification.alert(data.message,null,'Alert','Ok');
                return false;
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
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}