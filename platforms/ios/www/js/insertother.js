/**
 * Created by CTINFO on 1/15/2016.
 */
var basicinfo = "";
var ptype = "";
var cattype = "";
var oTitle = "";
var oColor = "";
var olocation = "";
var oCountry = "";
var oState = "";
var oCity = "";
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
    basicinfo = "Basic Info";
    ptype = "Old / New";
    cattype = "Category Type";
    oTitle = "Title";
    oColor = "Color";
    olocation = "Location";
    oCountry = "Country";
    oState = "State";
    oCity = "City";
    oCondition = "Condition";
    oRating = "Rating";
    ouploadpic = "Upload Pics";
    extraInfo = "Extra Info";
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
    basicinfo = "Básica";
    ptype = "Viejo / Nuevo";
    cattype = "Categoría Tipo";
    oTitle = "Título";
    oColor = "Color";
    olocation = "Ubicación";
    oCountry = "País";
    oState = "Estado";
    oCity = "Ciudad";
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

$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            document.getElementById('profilename').innerHTML = gdc_username;
            document.getElementById("u_name").value = gdc_username;
            //document.getElementById("u_email").value = gdc_email;
            document.getElementById("u_phone").value = gdc_mobile;
        }
        if (gdc_gender == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            if (gdc_gender == "male") {
            } else {
                document.getElementById("profilegender").src = "images/female.png";
            }
        }
    }
);

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getOtherCatList();
        getCountryList();
    },
    receivedEvent: function (id) {

    }
};
app.initialize();


//Ashish
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
        alert("Image uploaded!");
    });
}
// Called when a photo is successfully retrieved

var carArray = new Array();
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
    alert('Failed because: ' + message);
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

//Ashish
function getOtherCatList() {

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"OtherCat"}',
        success: function (data) {
//                      alert(data);
            OtherCatData(data);
            return true;
        },
        error: function (result) {
            cordova.plugin.pDialog.dismiss();
            alert("Error");
            return false;
        }
    });
}

function getCountryList() {

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"Country"}',
        success: function (data) {
//                      alert(data);
            countryData(data);
            return true;
        },
        error: function (result) {
            cordova.plugin.pDialog.dismiss();
            alert("Error");
            return false;
        }
    });
}
function OtherCatData(data) {
    var obj = data.othercat;
    for (var i = 0; i < obj.length; i++) {
        $('#other_category').append($('<option>').text(obj[i].other_cat_name).attr('value', obj[i].other_cat_id));
    }

    cordova.plugin.pDialog.dismiss();
    return true;
}

function countryData(data) {
    var obj = data.country;
    for (var i = 0; i < obj.length; i++) {
        $('#selectCountry').append($('<option>').text(obj[i].counry_name).attr('value', obj[i].counry_id));
    }

    cordova.plugin.pDialog.dismiss();
    return true;
}

var state = 0;
function selectState12(str) {
    state = str;

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    var url = BASE_URL + APP_API + "?country_id=" + state;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
    cordova.plugin.pDialog.dismiss();
}
var state = 0;
function selectCity12(str) {
    city = str;

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    var url = BASE_URL + APP_API + "?state_id=" + city;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
    cordova.plugin.pDialog.dismiss();
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


function insertOtherDetail() {
    var regi_id = gdc_uid;
    var other_type = document.getElementById('other_type').value;
    if ($.trim(other_type) == "") {
        alert(selectOtherMsg);
        $('#other_type').focus();
        document.getElementById('errfn').innerHTML = selectOtherMsg;
        return false;
    }
    var other_category = document.getElementById('other_category').value;
    if ($.trim(other_category) == "") {
        alert(selectCatMsg);
        $('#other_category').focus();
        document.getElementById('errfn1').innerHTML = selectCatMsg;
        return false;
    }
    var other_title = document.getElementById('other_title').value;
    if ($.trim(other_title).length == 0) {
        alert(insertTitleMsg);
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
        alert(insertCountryMsg);
        $('#selectCountry').focus();
        document.getElementById('errfn3').innerHTML = insertCountryMsg;
        return false;
    }
    var other_state = document.getElementById('selectState').value;
    if ($.trim(other_state) == "") {
        alert(insertStateMsg);
        $('#selectState').focus();
        document.getElementById('errfn7').innerHTML = insertStateMsg;
        return false;
    }
    var other_city = document.getElementById('selectCity').value;
    if ($.trim(other_city) == "") {
        alert(insertCityMsg);
        $('#selectCity').focus();
        document.getElementById('errfn8').innerHTML = insertCityMsg;
        return false;
    }
    var other_condition = document.getElementById('other_condition').value;
    if ($.trim(other_condition) == "") {
        alert(selectConditionMsg);
        $('#other_condition').focus();
        document.getElementById('errfn6').innerHTML = selectConditionMsg;
        return false;
    }
    var other_rating = document.getElementById('other_rating').value;
    if ($.trim(other_rating) == "") {
        alert(selectRatingMsg);
        $('#other_rating').focus();
        document.getElementById('errfn9').innerHTML = selectRatingMsg;
        return false;
    }
    //var other_pri_type = document.getElementById('other_pri_type').value;
    if (document.getElementById("other_pri_type").checked) {
        var other_pri_type = "Colones";
    } else {
        var other_pri_type = "Dollares";
    }
    var other_price = document.getElementById('other_price').value;
    if ($.trim(other_price).length == 0) {
        alert(insertPriceMsg);
        $('#other_price').focus();
        document.getElementById('errfn10').innerHTML = insertPriceMsg;
        return false;
    }

    if (document.getElementById("other_exchange").checked) {
        var other_exchange = "Yes";
    } else {
        var other_exchange = "No";
    }
    //var other_exchange = document.getElementById('other_exchange').value;
    //var other_acpt_old = document.getElementById('other_acpt_old').value;
    var other_acpt_old = "";
    //if (document.getElementById("other_acpt_old").checked) {
    //    var other_acpt_old = "Yes";
    //} else {
    //    var other_acpt_old = "No";
    //}
    //var other_flex_pri = document.getElementById('other_flex_pri').value;
    if (document.getElementById("other_flex_pri").checked) {
        var other_flex_pri = "Yes";
    } else {
        var other_flex_pri = "No";
    }

    //var other_trade = document.getElementById('other_trade').value;
    var other_trade = "";
    //if (document.getElementById("other_trade").checked) {
    //    var other_trade = "Yes";
    //} else {
    //    var other_trade = "No";
    //}

    //var other_loan = document.getElementById('other_loan').value;
    if (document.getElementById("other_loan").checked) {
        var other_loan = "Yes";
    } else {
        var other_loan = "No";
    }

    var other_comment = document.getElementById('other_comment').value;
    var other_cont_name = document.getElementById('u_name').value;
    if ($.trim(other_cont_name).length == 0) {
        alert(insertNameMsg);
        $('#u_name').focus();
        document.getElementById('errfn9').innerHTML = insertNameMsg;
        return false;
    }
    var other_phone = document.getElementById('u_phone').value;
    if ($.trim(other_phone).length == 0) {
        alert(insertContactMsg);
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
    //console.log(JSON.stringify(image));
    if (carArray.length == 0) {
        var others_detail = '{"method":"InsertOtherDetails", "regi_id":"' + regi_id + '", "other_type":"' + other_type + '", "other_category":"' + other_category + '", "other_title":"' + other_title + '", "other_cont_name":"' + other_cont_name + '", "other_email":"' + other_email + '", "other_phone":"' + other_phone + '", "other_location":"' + other_location + '", "other_country":"' + other_country + '", "other_state":"' + other_state + '", "other_city":"' + other_city + '", "other_color":"' + other_color + '", "other_pri_type":"' + other_pri_type + '", "other_price":"' + other_price + '", "other_condition":"' + other_condition + '", "other_rating":"' + other_rating + '", "other_exchange":"' + other_exchange + '", "other_acpt_old":"' + other_acpt_old + '", "other_flex_pri":"' + other_flex_pri + '", "other_trade":"' + other_trade + '","other_loan":"' + other_loan + '", "other_visitor":" ", "other_comment":"' + other_comment + '", "other_image": ""}';
    } else {
        var others_detail = '{"method":"InsertOtherDetails", "regi_id":"' + regi_id + '", "other_type":"' + other_type + '", "other_category":"' + other_category + '", "other_title":"' + other_title + '", "other_cont_name":"' + other_cont_name + '", "other_email":"' + other_email + '", "other_phone":"' + other_phone + '", "other_location":"' + other_location + '", "other_country":"' + other_country + '", "other_state":"' + other_state + '", "other_city":"' + other_city + '", "other_color":"' + other_color + '", "other_pri_type":"' + other_pri_type + '", "other_price":"' + other_price + '", "other_condition":"' + other_condition + '", "other_rating":"' + other_rating + '", "other_exchange":"' + other_exchange + '", "other_acpt_old":"' + other_acpt_old + '", "other_flex_pri":"' + other_flex_pri + '", "other_trade":"' + other_trade + '","other_loan":"' + other_loan + '", "other_visitor":" ", "other_comment":"' + other_comment + '", "other_image": ' + JSON.stringify(image) + '}';
    }

    //console.log(others_detail);

    cordova.plugin.pDialog.init({
        theme: 'HOLO_LIGHT',
        progressStyle: 'SPINNER',
        cancelable: false,
        title: 'Please Wait...',
        message: 'Loading ...'
    });

    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: others_detail,
        success: function (data) {
            if (data.success == 0) {
                cordova.plugin.pDialog.dismiss();
                alert(data.message);
                return false;
            }
            if (data.success == 1) {
                cordova.plugin.pDialog.dismiss();
                alert(data.message);
                window.location.href = "userpost.html?type=othermenu";
            }
            if (data.success == 2) {
                cordova.plugin.pDialog.dismiss();
                alert(data.message);
                return false;
            }
        },
        error: function (result) {
            cordova.plugin.pDialog.dismiss();
            alert("Error");
            return false;
        }
    });

}