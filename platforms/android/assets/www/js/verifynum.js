/**
 * Created by CTinfotech on 11/23/2015.
 */
document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady(){
    document.addEventListener("backbutton", onBackKeyDown, true);
}

function onBackKeyDown(){
    navigator.app.backHistory();
}

function goVerify() {
    var verifynumber = document.getElementById('verifynumber').value;
    //alert(verifynumber);
    if ($.trim(verifynumber).length == 0) {
        alert('Please enter valid verify number');
        return false;
    }
        $.ajax({
                    url: BASE_URL + APP_API,
                    type: 'POST',
                    dataType: 'json',
                    contentType: "application/json",
                    data: '{"method":"VerifyNumber", "verifynumber":"' + verifynumber + '"}',
                    success: function (data) {
                        if (data.success == 0) {
                            alert(data.message);
                            window.location.href ="index.html";
                            return false;
                        }
                        if (data.success == 1) {
                            alert(data.message);
                            window.location.href ="index.html";
                            return false;
                        }
                    },
                    error: function (result) {
                        alert("Mobile Number Not Verify, Please Try Again!");
                        return false;
                    }
            });
}