/**
 * Created by CTINFO on 2/8/2016.
 */
document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
// device APIs are available
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
    $.post("http://ctinfotech.com.md-in-37.webhostbox.net/car_admin/upload.php", {imageData: imageData}, function (data) {
        navigator.notification.alert('Image uploaded!',null,'Alert','Ok');

    });
}
// Called when a photo is successfully retrieved
var car_image = new Array();
var image_counter = 0;
var car_img1 = "";
var car_img2 = "";
var car_img3 = "";
var car_img4 = "";
var carArray = new Array();
function onPhotoURISuccess(imageURI) {
    if (image_counter == 4) {
        $("p").hide();
    }
    navigator.notification.alert(image_counter,null,'Alert','Ok');

    if (image_counter == 1) {
        car_image[image_counter] = imageURI;
        car_img1 = imageURI;
        $("ul").append("<li><img id='uploadPreview1' name='uploadPreview1'> <a onclick='removeDiv(1);' class='remove'>×</a></li>");
        var uploadPreview1 = document.getElementById('uploadPreview1');
        uploadPreview1.style.display = 'block';
        uploadPreview1.src = "data:image/jpeg;base64," + car_img1;
        carArray[image_counter] = car_img1;
    }
    if (image_counter == 2) {
        car_image[image_counter] = imageURI;
        car_img2 = imageURI;
        $("ul").append("<li><img id='uploadPreview2' name='uploadPreview2'> <a onclick='removeDiv(2);' class='remove'>×</a></li>");
        var uploadPreview2 = document.getElementById('uploadPreview2');
        uploadPreview2.style.display = 'block';
        uploadPreview2.src = "data:image/jpeg;base64," + car_img2;
        carArray[image_counter] = car_img2;
    }
    if (image_counter == 3) {
        car_image[image_counter] = imageURI;
        car_img3 = imageURI;
        $("ul").append("<li><img id='uploadPreview3' name='uploadPreview3'> <a onclick='removeDiv(3);' class='remove'>×</a></li>");
        var uploadPreview3 = document.getElementById('uploadPreview3');
        uploadPreview3.style.display = 'block';
        uploadPreview3.src = "data:image/jpeg;base64," + car_img3;
        carArray[image_counter] = car_img3;
    }
    if (image_counter == 4) {
        car_image[image_counter] = imageURI;
        car_img4 = imageURI;
        $("ul").append("<li><img id='uploadPreview4' name='uploadPreview4'> <a onclick='removeDiv(4);' class='remove'>×</a></li>");
        var uploadPreview4 = document.getElementById('uploadPreview4');
        uploadPreview4.style.display = 'block';
        uploadPreview4.src = "data:image/jpeg;base64," + car_img4;
        carArray[image_counter] = car_img4;
        image_counter = 1;
    }

}

function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}

function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}

function getPhoto(source) {
    image_counter = image_counter + 1;
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        sourceType: source
    });
}

function onFail(message) {
    navigator.notification.alert('Failed because: ' + message,null,'Alert','Ok');

}
$(document).ready(function () {
//        $("button").click(function(){
//            $("ul").append("<li><img src='images/g_female.png'> <a href='javascript:void(0);' class='remove'>×</a></li>");
//        });

    $(document).on("click", "a.remove", function () {
        $(this).parent().remove();
    });
});
function removeDiv(str) {
    navigator.notification.alert(str,null,'Alert','Ok');

    image_counter = str;
    if (image_counter <= 4) {
        $("p").show();
    }
    $(this).parent().remove();
}