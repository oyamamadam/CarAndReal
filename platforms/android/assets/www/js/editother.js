/**
 * Created by CTINFO on 1/15/2016.
 */

var basicinfo = "";
var ptype = "";
var cattype = "";
var oTitle = "";
var oColor = "";
var olocation = "";
var oCondition = "";
var oRating = "";
var loan = "";
var trade = "";
var exchange = "";
var pricetype = "";
var price = "";
var ouploadpic = "";
var extraInfo = "";
var oAceept = "";
var oFlexible = "";
var oComment = "";
var oPublishBy = "";
var oContact = "";
var oEmail = "";
var oSubmit = "";

var selectOtherMsg = "";
var selectCatMsg = "";
var insertTitleMsg = "";
var insertColorMsg = "";
var insertLocationMsg = "";
var insertCountryMsg = "";
var insertStateMsg = "";
var insertCityMsg = "";
var selectConditionMsg = "";
var selectRatingMsg = "";
var insertPriceMsg = "";
var insertNameMsg = "";
var insertContactMsg = "";
var insertEmailMsg = "";
var msg_delete = "";
gdc_lang = window.localStorage.getItem("gdc_lang");
//alert(gdc_lang);
if (gdc_lang == null) {
    gdc_lang = "en";
}

if (gdc_lang == "en")
    ready_eng();
if (gdc_lang == "es")
    ready_spa();

function ready_eng() {
    msg_delete = "Are you sure, you want to delete?";
    basicinfo = "Basic Info";
    ptype = "Property Type";
    cattype = "Category Type";
    oTitle = "Title";
    oColor = "Color";
    olocation = "Location";
    oCondition = "Condition";
    oRating = "Rating";
    ouploadpic = "Upload Pics";
    extraInfo = "Extra";
    oAceept = "Accept Old As Payment";
    oFlexible = "Flexible Price";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    oComment = "Comment";
    oPublishBy = "Published By";
    oContact = "Contact No.";
    oEmail = "Email";
    oSubmit = "Submit";

    selectOtherMsg = "Please select other type.";
    selectCatMsg = "Please select category.";
    insertTitleMsg = "Please enter title.";
    insertColorMsg = "Please enter color.";
    insertLocationMsg = "Please enter location.";
    insertCountryMsg = "Please select country.";
    insertStateMsg = "Please select state.";
    insertCityMsg = "Please select city.";
    selectConditionMsg = "Please select condition.";
    selectRatingMsg = "Please select rating.";
    insertPriceMsg = "Please enter price.";
    insertNameMsg = "Please enter name.";
    insertContactMsg = "Please enter contact number.";
    insertEmailMsg = "Please enter email.";

}
function ready_spa() {
    msg_delete = "¿Estas seguro que quieres borrarlo?";
    basicinfo = "Básica";
    ptype = "Tipo De Propiedad";
    cattype = "Categoría Tipo";
    oTitle = "Título";
    oColor = "Color";
    olocation = "Ubicación";
    oCondition = "Condición";
    oRating = "Clasificación";
    ouploadpic = "Subir fotos";
    extraInfo = "Información Extra";
    oAceept = "Acepta el oro como medio de pago";
    oFlexible = "Precio Flexible";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "Tipo Precio";
    price = "Precio";
    oComment = "Comentario";
    oPublishBy = "Publicado por";
    oContact = "Contacto No.";
    oEmail = "Email";
    oSubmit = "Enviar";

    selectOtherMsg = "Por favor seleccione otro tipo.";
    selectCatMsg = "Por favor seleccione el tipo de categoría.";
    insertTitleMsg = "Por favor, introduzca el título.";
    insertColorMsg = "Por favor, introduzca el color.";
    insertLocationMsg = "Por favor, introduzca ubicación.";
    insertCountryMsg = "Por favor, seleccione el país.";
    insertStateMsg = "Por favor, seleccione el estado.";
    insertCityMsg = "Por favor seleccione la ciudad.";
    selectConditionMsg = "Por favor, seleccione condición.";
    selectRatingMsg = "Por favor, seleccione calificación.";
    insertPriceMsg = "Por favor, introduzca el precio.";
    insertNameMsg = "Por favor, introduzca su nombre.";
    insertContactMsg = "Por favor, introduzca el número de contacto.";
    insertEmailMsg = "Por favor, introduzca correo electrónico.";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        //document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('cattype').innerHTML = cattype;
        //document.getElementById('oTitle').innerHTML = oTitle;
        //document.getElementById('oColor').innerHTML = oColor;
        //document.getElementById('olocation').innerHTML = olocation;
        //document.getElementById('oCountry').innerHTML = oCountry;
        //document.getElementById('oState').innerHTML = oState;
        //document.getElementById('oCity').innerHTML = oCity;
        //document.getElementById('oCondition').innerHTML = oCondition;
        //document.getElementById('oRating').innerHTML = oRating;
        document.getElementById('ouploadpic').innerHTML = ouploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        //document.getElementById('oAceept').innerHTML = oAceept;
        document.getElementById('oFlexible').innerHTML = oFlexible;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('price').innerHTML = price;
        //document.getElementById('oComment').innerHTML = oComment;
        //document.getElementById('oPublishBy').innerHTML = oPublishBy;
        //document.getElementById('oContact').innerHTML = oContact;
        //document.getElementById('oEmail').innerHTML = oEmail;
        document.getElementById('oSubmit').innerHTML = oSubmit;
    })
}

$(document).ready(
    function () {
        $("#other_title").attr("placeholder", oTitle);
        //$("#other_color").attr("placeholder", oColor);
        //$("#other_location").attr("placeholder", olocation);
        $("#other_price").attr("placeholder", price);
        $("#other_comment").attr("placeholder", oComment);
        $("#u_name").attr("placeholder", oPublishBy);
        $("#u_phone").attr("placeholder", oContact);
        //$("#u_email").attr("placeholder", oEmail);

    }
);

document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}
function goToHome() {
    window.location.href = "index.html";
}
function goToMyPost() {
    var user = window.localStorage.getItem("gdc_email_id");
    if (user == null) {
        window.location.href = "login.html";
    } else {
        window.location.href = "userpost.html";
    }
}
function goToContactus() {
    window.location.href = "contactus.html";
}
function goToHelp() {
    window.location.href = "help.html";
}
function goToLogOut() {
    window.localStorage.clear();
    navigator.app.exitApp();
}
function goToCarList() {
    window.location.href = "car-listing.html";
}
function goToRealList() {
    window.location.href = "realestate-listing.html";
}
function goToOtherList() {
    window.location.href = "others-listing.html";
}
function goToMore() {
    window.location.href = "more.html";
}
var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
var gdc_gender = window.localStorage.getItem("gdc_gender");
var gdc_email = window.localStorage.getItem("gdc_email_id");
var gdc_mobile = window.localStorage.getItem("gdc_contactno");
var other_id = "";

$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            document.getElementById('profilename').innerHTML = gdc_username;
        }
        if (profile_image == null && gdc_gender == "male") {
            document.getElementById('profilegender').innerHTML = "images/g_male.png";
        } else if(profile_image == null && gdc_gender == "female") {
            //alert(profile_image);
            document.getElementById("profilegender").src = "images/g_female.png";
        }
        else {
            document.getElementById("profilegender").src = profile_image;
        }
    }
);
//Get Other Detail.
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        var oid = GetURLParameter('oid');
        getOtherDetail(oid);

    },
    receivedEvent: function (id) {

    }
};
app.initialize();



function getOtherDetail(oid) {
    //
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
        data: '{"method":"EditOtherDetail", "other_id":"' + oid + '", "regi_id":"' + gdc_uid + '"}',
        success: function (data) {
            otherDetailData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Server Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function selectOtherType(str) {

    var url = BASE_URL + APP_API + "?proType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divOtherType").html(result);
        }
    });
}
function selectCategoryType(str) {
    var url = BASE_URL + APP_API + "?other_category=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divCategoryType").html(result);
        }
    });
}

function selectCountry12(str) {
    var url = BASE_URL + APP_API + "?co_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divCountry").html(result);
        }
    });
}

function selectState12(real_country, real_state) {

    var url = BASE_URL + APP_API + "?ecountry_id=" + real_country + "&st_id=" + real_state;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
}

function selectCity12(real_state, real_city) {

    var url = BASE_URL + APP_API + "?estate_id=" + real_state + "&ci_id=" + real_city;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
}

function selectCondition(str) {
    //alert(str);
    var url = BASE_URL + APP_API + "?conditopnType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divConditionType").html(result);
        }
    });
}

function selectRating(str) {
    var url = BASE_URL + APP_API + "?ratingType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divRatingType").html(result);
        }
    });
}

var carArray = new Array();
function otherDetailData(data) {
    for (var i = 0; i < data.otherlist.length; i++) {
        other_id = data.otherlist[i].other_id;
        var other_type = data.otherlist[i].other_type;
        selectOtherType(other_type);
        var other_category = data.otherlist[i].other_category;
        selectCategoryType(other_category);
        var other_title = data.otherlist[i].other_title;
        document.getElementById("other_title").value = other_title;
        var other_color = data.otherlist[i].other_color;
        //document.getElementById("other_color").value = other_color;
        var other_location = data.otherlist[i].other_location;
        //document.getElementById("other_location").value = other_location;
        var other_country = data.otherlist[i].other_country;
        selectCountry12(other_country);
        var other_state = data.otherlist[i].other_state;
        selectState12(other_country, other_state);
        var other_city = data.otherlist[i].other_city;
        selectCity12(other_state, other_city);
        var other_condition = data.otherlist[i].other_condition;
        selectCondition(other_condition);
        var other_rating = data.otherlist[i].other_rating;
        selectRating(other_rating);
        var other_pri_type = data.otherlist[i].other_pri_type;
        if (other_pri_type == "Colones") {
            document.getElementById("other_pri_type").checked = true;
        } else {
            document.getElementById("other_pri_type").checked = false;
        }
        var other_price = data.otherlist[i].other_price;
        document.getElementById("other_price").value = other_price;
        var other_exchange = data.otherlist[i].other_exchange;
        if (other_exchange == "Yes") {
            document.getElementById("other_exchange").checked = true;
        } else {
            document.getElementById("other_exchange").checked = false;
        }

        var other_acpt_old = data.otherlist[i].other_acpt_old;
        //if (other_acpt_old == "Yes") {
        //    document.getElementById("other_acpt_old").checked = true;
        //} else {
        //    document.getElementById("other_acpt_old").checked = false;
        //}

        var other_flex_pri = data.otherlist[i].other_flex_pri;
        if (other_flex_pri == "Yes") {
            document.getElementById("other_flex_pri").checked = true;
        } else {
            document.getElementById("other_flex_pri").checked = false;
        }

        var other_loan = data.otherlist[i].other_loan;
        if (other_loan == "Yes") {
            document.getElementById("other_loan").checked = true;
        } else {
            document.getElementById("other_loan").checked = false;
        }

        var other_trade = data.otherlist[i].other_trade;
        //if (other_trade == "Yes") {
        //    document.getElementById("other_trade").checked = true;
        //} else {
        //    document.getElementById("other_trade").checked = false;
        //}

        var other_visitor = data.otherlist[i].other_visitor;
        var other_cont_name = data.otherlist[i].other_cont_name;
        document.getElementById("u_name").value = other_cont_name;
        var other_email = data.otherlist[i].other_email;
        //document.getElementById("u_email").value = other_email;
        var u_phone = data.otherlist[i].other_phone;
        document.getElementById("u_phone").value = u_phone;
        var other_comment = data.otherlist[i].other_comment;
        document.getElementById("other_comment").value = other_comment;
        var file_img = data.otherlist[i].other_img;
        for (var j = 0; j < file_img.length; j++) {
            $("#carImages").append('<li id="uploadPreviewLi' + j + '" ><div align="center"><img src="' + file_img[j] + '" id="uploadPreview' + j + '" name="uploadPreview' + j + '" width="300px" height="200px" style="margin:10px 0px"/> <a onclick="reBuildArray(' + j + ');" class="remove"><img src="images/deletepic.png"/></a></div></li>');
            convertImgToDataURLviaCanvas(file_img[j], j, "");
            if (j >= 3) {
                $("p").hide();
            }
        }
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}

function convertImgToDataURLviaCanvas(url, index, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        dataURL = dataURL.replace("data:image/png;base64,", "");
        carArray[index] = dataURL;
        canvas = null;
    };
    img.src = url;
}

var image_counter = 0;
var car_img0 = "";
var car_img1 = "";
var car_img2 = "";
var car_img3 = "";
var pictureSource;
var destinationType;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

var addIndex = 0;
var addcar_img = "";
function onPhotoURISuccess(imageURI) {

    for (var j = 0; j < carArray.length; j++) {
        var str = "#uploadPreviewLi" + j;
        $(str).remove();
        addIndex = j + 1;
    }

    carArray[addIndex] = imageURI;

    for (var j = 0; j < carArray.length; j++) {
        addcar_img = carArray[j];
        $("#carImages").append('<li id="uploadPreviewLi' + j + '"><div align="center"><img id="uploadPreview' + j + '" name="uploadPreview' + j + '" width="300px" height="200px" style="margin:10px 0px"/> <a onclick="reBuildArray(' + j + ');" class="remove"><img src="images/deletepic.png"/></a></div></li>');
        var liId = "uploadPreview" + j;
        liId = document.getElementById(liId);
        liId.style.display = 'block';
        liId.src = "data:image/jpeg;base64," + addcar_img;
        if (j >= 3) {
            $("p").hide();
        } else {
            $("p").show();
        }
    }
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL,
        sourceType: source
    });
}

function onFail(message) {
    navigator.notification.alert('Failed because: ' + message,null,'Alert','Ok');

}

var removecar_img = "";
function reBuildArray(str) {

    for (var j = 0; j < carArray.length; j++) {
        var divstr = "#uploadPreviewLi" + j;
        $(divstr).remove();
    }

    carArray.splice(str, 1);

    for (var j = 0; j < carArray.length; j++) {
        removecar_img = carArray[j];
        $("#carImages").append('<li id="uploadPreviewLi' + j + '"><div align="center"><img id="uploadPreview' + j + '" name="uploadPreview' + j + '" width="300px" height="200px" style="margin:10px 0px"/> <a onclick="reBuildArray(' + j + ');" class="remove"><img src="images/deletepic.png"/></a></div></li>');
        var liId = "uploadPreview" + j;
        liId = document.getElementById(liId);
        liId.style.display = 'block';
        liId.src = "data:image/jpeg;base64," + removecar_img;
        if (j >= 3) {
            $("p").hide();
        } else {
            $("p").show();
        }
    }
}


function selectClear(str) {
    document.getElementById(str).innerHTML = "";
}
function setPlaceHolderTitle() {
    $("#other_title").attr("placeholder", oTitle);
}
function setPlaceHolderPrice() {
    $("#other_price").attr("placeholder", price);
}
function setPlaceHolderComment() {
    $("#other_comment").attr("placeholder", oComment);
}
function setPlaceHolderPublishBy() {
    $("#u_name").attr("placeholder", oPublishBy);
}
function setPlaceHolderContact() {
    $("#u_phone").attr("placeholder", oContact);
}

//Update Other Detail.
function updateOtherDetail() {
    var regi_id = gdc_uid;
    var other_type = document.getElementById('proType').value;
    if ($.trim(other_type) == "") {
        navigator.notification.alert(selectOtherMsg,null,'Alert','Ok');
        $('#other_type').focus();
        document.getElementById('errfn').innerHTML = selectOtherMsg;
        return false;
    }
    var other_category = document.getElementById('other_category').value;
    if ($.trim(other_category) == "") {
        navigator.notification.alert(selectCatMsg,null,'Alert','Ok');
        $('#other_category').focus();
        document.getElementById('errfn1').innerHTML = selectCatMsg;
        return false;
    }
    var other_title = document.getElementById('other_title').value;
    if ($.trim(other_title).length == 0) {
        navigator.notification.alert(insertTitleMsg,null,'Alert','Ok');
        $('#other_title').focus();
        document.getElementById('errfn2').innerHTML = insertTitleMsg;
        return false;
    }
    var other_color = "";
    //var other_color = document.getElementById('other_color').value;
    //if ($.trim(other_color).length == 0) {
    //    alert(insertColorMsg);
    //    return false;
    //}
    var other_location = "";
    //var other_location = document.getElementById('other_location').value;
    //if ($.trim(other_location).length == 0) {
    //    alert(insertLocationMsg);
    //    return false;
    //}
    var other_country = document.getElementById('selectCountry').value;
    if ($.trim(other_country) == "") {
        navigator.notification.alert(insertCountryMsg,null,'Alert','Ok');
        $('#selectCountry').focus();
        document.getElementById('errfn3').innerHTML = insertCountryMsg;
        return false;
    }
    var other_state = document.getElementById('selectState').value;
    if ($.trim(other_state) == "") {
        navigator.notification.alert(insertStateMsg,null,'Alert','Ok');
        $('#selectState').focus();
        document.getElementById('errfn4').innerHTML = insertStateMsg;
        return false;
    }
    var other_city = document.getElementById('selectCity').value;
    if ($.trim(other_city) == "") {
        navigator.notification.alert(insertCityMsg,null,'Alert','Ok');
        $('#selectCity').focus();
        document.getElementById('errfn5').innerHTML = insertCityMsg;
        return false;
    }

    var other_rating = document.getElementById('real_rating').value;
    if ($.trim(other_rating) == "") {
        navigator.notification.alert(selectRatingMsg,null,'Alert','Ok');
        $('#other_rating').focus();
        document.getElementById('errfn6').innerHTML = selectRatingMsg;
        return false;
    }

    var other_condition = document.getElementById('real_condition').value;
    if ($.trim(other_condition) == "") {
        navigator.notification.alert(selectConditionMsg,null,'Alert','Ok');
        $('#other_condition').focus();
        document.getElementById('errfn7').innerHTML = selectConditionMsg;
        return false;
    }

    if (document.getElementById("other_pri_type").checked) {
        var other_pri_type = "Colones";
    } else {
        var other_pri_type = "Dollares";
    }
    var other_price = document.getElementById('other_price').value;
    if ($.trim(other_price).length == 0) {
        navigator.notification.alert(insertPriceMsg,null,'Alert','Ok');
        $('#other_price').focus();
        document.getElementById('errfn8').innerHTML = insertPriceMsg;
        return false;
    }
    if (document.getElementById("other_exchange").checked) {
        var other_exchange = "Yes";
    } else {
        var other_exchange = "No";
    }
    var other_acpt_old = "";
    //if (document.getElementById("other_acpt_old").checked) {
    //    var other_acpt_old = "Yes";
    //} else {
    //    var other_acpt_old = "No";
    //}

    if (document.getElementById("other_flex_pri").checked) {
        var other_flex_pri = "Yes";
    } else {
        var other_flex_pri = "No";
    }

    if (document.getElementById("other_loan").checked) {
        var other_loan = "Yes";
    } else {
        var other_loan = "No";
    }
    var other_trade = "";
    //if (document.getElementById("other_trade").checked) {
    //    var other_trade = "Yes";
    //} else {
    //    var other_trade = "No";
    //}

    var other_comment = document.getElementById('other_comment').value;
    var other_cont_name = document.getElementById('u_name').value;
    if ($.trim(other_cont_name).length == 0) {
        navigator.notification.alert(insertNameMsg,null,'Alert','Ok');
        $('#u_name').focus();
        document.getElementById('errfn9').innerHTML = insertNameMsg;
        return false;
    }
    var other_phone = document.getElementById('u_phone').value;
    if ($.trim(other_phone).length == 0) {
        navigator.notification.alert(insertContactMsg,null,'Alert','Ok');
        $('#u_phone').focus();
        document.getElementById('errfn10').innerHTML = insertContactMsg;
        return false;
    }
    var other_email = gdc_email;
    //if ($.trim(other_email).length == 0) {
    //    alert(insertEmailMsg);
    //    return false;
    //}
    var image = new Array();
    for (var i = 0; carArray.length > i; i++) {
        image.push({"other_images": carArray[i]})
    }
    if (carArray.length == 0) {
        var other_detail_update = '{"method":"UpdateOtherDetail", "other_id":"' + other_id + '", "regi_id":"' + regi_id + '", "other_type":"' + other_type + '", "other_category":"' + other_category + '", "other_title":"' + other_title + '", "other_cont_name":"' + other_cont_name + '", "other_email":"' + other_email + '", "other_phone":"' + other_phone + '", "other_location":"' + other_location + '", "other_country":"' + other_country + '", "other_state":"' + other_state + '", "other_city":"' + other_city + '", "other_color":"' + other_color + '", "other_pri_type":"' + other_pri_type + '", "other_price":"' + other_price + '", "other_condition":"' + other_condition + '", "other_rating":"' + other_rating + '", "other_exchange":"' + other_exchange + '", "other_acpt_old":"' + other_acpt_old + '", "other_flex_pri":"' + other_flex_pri + '", "other_trade":"' + other_trade + '","other_loan":"' + other_loan + '", "other_comment":"' + other_comment + '", "other_visitor":" ", "other_image":""}';
    } else {
        var other_detail_update = '{"method":"UpdateOtherDetail", "other_id":"' + other_id + '", "regi_id":"' + regi_id + '", "other_type":"' + other_type + '", "other_category":"' + other_category + '", "other_title":"' + other_title + '", "other_cont_name":"' + other_cont_name + '", "other_email":"' + other_email + '", "other_phone":"' + other_phone + '", "other_location":"' + other_location + '", "other_country":"' + other_country + '", "other_state":"' + other_state + '", "other_city":"' + other_city + '", "other_color":"' + other_color + '", "other_pri_type":"' + other_pri_type + '", "other_price":"' + other_price + '", "other_condition":"' + other_condition + '", "other_rating":"' + other_rating + '", "other_exchange":"' + other_exchange + '", "other_acpt_old":"' + other_acpt_old + '", "other_flex_pri":"' + other_flex_pri + '", "other_trade":"' + other_trade + '","other_loan":"' + other_loan + '", "other_comment":"' + other_comment + '", "other_visitor":"", "other_image":' + JSON.stringify(image) + '}';
    }
    // console.log(other_detail_update);
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: other_detail_update,
        success: function (data) {
            if (data.success == 0) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                return false;
            }
            if (data.success == 1) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                window.location.href = "userpost.html?type=othermenu";
            }
            if (data.success == 2) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                //alert();
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