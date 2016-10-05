/**
 * Created by CTinfotech on 11/28/2015.
 */

var basicinfo = "";
var ptype = "";
var cattype = "";
var rTitle = "";
var rTerrain = "";
var rBuilding = "";
var rLocation = "";
var rNear = "";
var rooms = "";
var bathrooms = "";
var rCondition = "";
var rRating = "";
var rSizePro = "";
var rSizeCon = "";
var rBuilt = "";
var loan = "";
var trade = "";
var exchange = "";
var pricetype = "";
var price = "";
var ruploadpic = "";
var extraInfo = "";
var rMorgage = "";
var rFlexible = "";
var rComment = "";
var rPublishBy = "";
var rContact = "";
var rEmail = "";
var rSubmit = "";
var rElectricity = "";
var rWater = "";

var selectOtherMsg = "";
var selectCatMsg = "";
var insertTitleMsg = "";
var insertTerrainMsg = "";
var insertBuildingMsg = "";
var insertSizeProMsg = "";
var insertSizeConMsg = "";
var insertLocationMsg = "";
var insertNearbyMsg = "";
var insertCountryMsg = "";
var insertStateMsg = "";
var insertCityMsg = "";
var insertRoomMsg = "";
var insertBathroomMsg = "";
var selectConditionMsg = "";
var selectRatingMsg = "";
var insertPriceMsg = "";
var insertBuiltMsg = "";
var insertNameMsg = "";
var insertContactMsg = "";
var insertEmailMsg = "";

var successMsg = "";
var errorMsg = "";


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
    ptype = "Property Type";
    cattype = "Category Type";
    rTitle = "Title";
    rTerrain = "Terrain in sq mts";
    rBuilding = "Building in sq mts";
    rLocation = "Location";
    rNear = "Nearby";
    rooms = "Rooms";
    bathrooms = "Bathrooms";
    rCondition = "Condition";
    rRating = "Rating";
    rSizePro = "Size Range Of Property";
    rSizeCon = "Size Range Of Construction";
    rBuilt = "Year of build";
    ruploadpic = "Upload Pics";
    extraInfo = "Extra";
    rMorgage = "Mortgage";
    rFlexible = "Flexible Price";
    loan = "Loan";
    trade = "Trade";
    exchange = "Exchange";
    pricetype = "Price Type";
    price = "Price";
    rComment = "Comment";
    rPublishBy = "Published By";
    rContact = "Contact No.";
    rEmail = "Email";
    rSubmit = "Submit";
    rElectricity = "Electricity Service Available";
    rWater = "Water Services Available";
    selectOtherMsg = "Please select other type.";
    selectCatMsg = "Please select category.";
    insertTitleMsg = "Please enter title.";
    insertTerrainMsg = "Please enter terrain.";
    insertBuildingMsg = "Please enter building.";
    insertSizeProMsg = "Please enter size range of property.";
    insertSizeConMsg = "Please enter size range of construction.";
    insertLocationMsg = "Please enter location.";
    insertNearbyMsg = "Please enter nearby location.";
    insertCountryMsg = "Please select country.";
    insertStateMsg = "Please select state.";
    insertCityMsg = "Please select city.";
    insertRoomMsg = "Please enter room.";
    insertBathroomMsg = "Please enter bathroom.";
    selectConditionMsg = "Please select condition.";
    selectRatingMsg = "Please select rating.";
    insertPriceMsg = "Please enter price.";
    insertBuiltMsg = "Please enter 3 years from the moment they built.";
    insertNameMsg = "Please enter name.";
    insertContactMsg = "Please enter contact number.";
    insertEmailMsg = "Please enter email.";

    successMsg = "Congratulation, Details Successfully Updated.";
    errorMsg = "Sorry, There is some problem, please try again.";

}
function ready_spa() {
    basicinfo = "Básica";
    ptype = "Tipo De Propiedad";
    cattype = "Categoría Tipo";
    rTitle = "Título";
    rTerrain = "Terreno en metros cuadrados";
    rBuilding = "Edificio en metros cuadrados";
    rLocation = "Ubicación";
    rNear = "Cerca";
    rooms = "Habitaciones";
    bathrooms = "Baños";
    rCondition = "Condición";
    rRating = "Clasificación";
    rSizePro = "Gama del tamaño de la propiedad";
    rSizeCon = "Gama del tamaño de la construcción";
    rBuilt = "año de construcción";
    ruploadpic = "Subir fotos";
    extraInfo = "Información Extra";
    rMorgage = "Hipoteca";
    rFlexible = "Precio Flexible";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "Tipo Precio";
    price = "Precio";
    rComment = "Comentario";
    rPublishBy = "Publicado por";
    rContact = "Contacto No.";
    rEmail = "Email";
    rSubmit = "Enviar";
    rElectricity = "Servicio de Electricidad disponible";
    rWater = "Servicios de agua disponibles";
    selectOtherMsg = "Por favor seleccione otro tipo.";
    selectCatMsg = "Por favor seleccione el tipo de categoría.";
    insertTitleMsg = "Por favor, introduzca el título.";
    insertTerrainMsg = "Por favor, introduzca el terreno.";
    insertBuildingMsg = "Por favor, introduzca edificio.";
    insertSizeProMsg = "Por favor, introduzca rango de tamaño de la propiedad.";
    insertSizeConMsg = "Por favor, introduzca rango de tamaño de la construcción.";
    insertLocationMsg = "Por favor, introduzca ubicación.";
    insertNearbyMsg = "Por favor, introduzca las cercanías.";
    insertCountryMsg = "Por favor, seleccione el país.";
    insertStateMsg = "Por favor, seleccione el estado.";
    insertCityMsg = "Por favor seleccione la ciudad.";
    insertRoomMsg = "Por favor, introduzca habitación.";
    insertBathroomMsg = "Por favor, introduzca baño.";
    selectConditionMsg = "Por favor, seleccione condición.";
    selectRatingMsg = "Por favor, seleccione calificación.";
    insertPriceMsg = "Por favor, introduzca el precio.";
    insertBuiltMsg = "Por favor, introduzca 3 años a partir del momento en que se construyeron.";
    insertNameMsg = "Por favor, introduzca su nombre.";
    insertContactMsg = "Por favor, introduzca el número de contacto.";
    insertEmailMsg = "Por favor, introduzca correo electrónico.";

    successMsg = "Enhorabuena, detalles Actualizado con éxito.";
    errorMsg = "Lo sentimos, hay algún problema, por favor intente de nuevo.";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        //document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('cattype').innerHTML = cattype;
        //document.getElementById('rTitle').innerHTML = rTitle;
        //document.getElementById('rTerrain').innerHTML = rTerrain;
        //document.getElementById('rBuilding').innerHTML = rBuilding;
        //document.getElementById('rLocation').innerHTML = rLocation;
        //document.getElementById('rNear').innerHTML = rNear;
        //document.getElementById('rCountry').innerHTML = rCountry;
        //document.getElementById('rState').innerHTML = rState;
        //document.getElementById('rCity').innerHTML = rCity;
        //document.getElementById('rooms').innerHTML = rooms;
        //document.getElementById('bathrooms').innerHTML = bathrooms;
        //document.getElementById('rCondition').innerHTML = rCondition;
        //document.getElementById('rRating').innerHTML = rRating;
        //document.getElementById('rSizePro').innerHTML = rSizePro;
        //document.getElementById('rSizeCon').innerHTML = rSizeCon;
        //document.getElementById('rBuilt').innerHTML = rBuilt;
        document.getElementById('rMorgage').innerHTML = rMorgage;
        document.getElementById('ruploadpic').innerHTML = ruploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        document.getElementById('rFlexible').innerHTML = rFlexible;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('price').innerHTML = price;
        //document.getElementById('rComment').innerHTML = rComment;
        //document.getElementById('rPublishBy').innerHTML = rPublishBy;
        //document.getElementById('rContact').innerHTML = rContact;
        //document.getElementById('rEmail').innerHTML = rEmail;
        document.getElementById('rSubmit').innerHTML = rSubmit;
        document.getElementById('rElectricity').innerHTML = rElectricity;
        document.getElementById('rWater').innerHTML = rWater;
    })
}

$(document).ready(
    function () {
        $("#real_title_lis").attr("placeholder", rTitle);
        $("#real_terrain").attr("placeholder", rTerrain);
        $("#real_building").attr("placeholder", rBuilding);
        //$("#real_location").attr("placeholder", rLocation);
        $("#real_near_by_loc").attr("placeholder", rNear);
        $("#real_room").attr("placeholder", rooms);
        $("#real_baths").attr("placeholder", bathrooms);
        //$("#real_size_pro").attr("placeholder", rSizePro);
        //$("#real_size_con").attr("placeholder", rSizeCon);
        $("#real_three").attr("placeholder", rBuilt);
        $("#real_price").attr("placeholder", price);
        $("#real_comment").attr("placeholder", rComment);
        $("#u_name").attr("placeholder", rPublishBy);
        $("#u_phone").attr("placeholder", rContact);
        //$("#u_email").attr("placeholder", rEmail);

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
    //alert(user);
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
    //alert("Logout");
    window.localStorage.clear();
    navigator.app.exitApp();
    //window.location.href ="login.html";
    //return true;
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

//$(document).ready(function () {
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"RealPro"}',
//        success: function (data) {
////                      alert(data);
//            proData(data);
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//});
//$(document).ready(function () {
//    $.ajax({
//        url: BASE_URL + APP_API,
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json",
//        data: '{"method":"Country"}',
//        success: function (data) {
////                      alert(data);
//            countryData(data);
//            return true;
//        },
//        error: function (result) {
//            alert("Error");
//            return false;
//        }
//    });
//});
//function proData(data) {
//    var obj = data.realfilter;
//    for (var i = 0; i < obj.length; i++) {
//        $('#propertyType').append($('<option>').text(obj[i].real_pro_name).attr('value', obj[i].real_pro_id));
//    }
//    return true;
//}
//function countryData(data) {
//    var obj = data.country;
//    for (var i = 0; i < obj.length; i++) {
//        $('#selectCountry').append($('<option>').text(obj[i].counry_name).attr('value', obj[i].counry_id));
//    }
//    return true;
//}

function selectProType(str) {
    var url = BASE_URL + APP_API + "?proType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divProType").html(result);
        }
    });
}

function selectCateType(str) {
    var url = BASE_URL + APP_API + "?catType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divCatType").html(result);
        }
    });
}
var country = 0;
function selectCountry12(str) {
    country = str;
    var url = BASE_URL + APP_API + "?co_id=" + country;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divCountry").html(result);
        }
    });
}

function selectState12(real_country, real_state) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?ecountry_id=" + real_country + "&st_id=" + real_state;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectCity12(real_state, real_city) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?estate_id=" + real_state + "&ci_id=" + real_city;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectCondition(str) {
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

// Get Real Estate Detail
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
        var rid = GetURLParameter('rid');
        getRealDetailForEdit(rid);

    },
    receivedEvent: function (id) {

    }
};
app.initialize();


function getRealDetailForEdit(rid) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');


    var getData = '{"method":"EditRealEstateDetail", "real_id":"' + rid + '", "regi_id":"' + gdc_uid + '"}';
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: getData,
        success: function (data) {
            realDetailEditData(data);
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

var carArray = new Array();
var editreal_id = 0
function realDetailEditData(data) {
    //$("#imageData").children().remove();
    for (var i = 0; i < data.reallist.length; i++) {

        editreal_id = data.reallist[i].real_id;
        var real_title_lis = data.reallist[i].real_title_lis;
        document.getElementById("real_title_lis").value = real_title_lis;
        var real_property = data.reallist[i].real_property;
        selectProType(real_property);
        var real_pro_type = data.reallist[i].real_pro_type;
        selectCateType(real_pro_type);
        var real_terrain = data.reallist[i].real_terrain;
        document.getElementById("real_terrain").value = real_terrain;
        var real_building = data.reallist[i].real_building;
        document.getElementById("real_building").value = real_building;
        var real_location = data.reallist[i].real_location;
        //document.getElementById("real_location").value = real_location;
        var real_near_by_loc = data.reallist[i].real_near_by_loc;
        document.getElementById("real_near_by_loc").value = real_near_by_loc;
        var real_country = data.reallist[i].real_country;
        selectCountry12(real_country);
        var real_state = data.reallist[i].real_state;
        selectState12(real_country, real_state);
        var real_city = data.reallist[i].real_city;
        selectCity12(real_state, real_city);
        var real_room = data.reallist[i].real_room;
        document.getElementById("real_room").value = real_room;
        var real_baths = data.reallist[i].real_baths;
        document.getElementById("real_baths").value = real_baths;
        var real_condition = data.reallist[i].real_condition;
        selectCondition(real_condition);
        var real_rating = data.reallist[i].real_rating;
        selectRating(real_rating);
        var real_size_pro = data.reallist[i].real_size_pro;
        //document.getElementById("real_size_pro").value = real_size_pro;
        var real_size_con = data.reallist[i].real_size_con;
        //document.getElementById("real_size_con").value = real_size_con;
        var real_price_type = data.reallist[i].real_price_type;
        if (real_price_type == "Colones") {
            document.getElementById("real_price_type").checked = true;
        } else {
            document.getElementById("real_price_type").checked = false;
        }
        var real_price = data.reallist[i].real_price;
        document.getElementById("real_price").value = real_price;
        var real_three = data.reallist[i].real_three;
        document.getElementById("real_three").value = real_three;
        var real_loan = data.reallist[i].real_loan;
        if (real_loan == "Yes") {
            document.getElementById("real_loan").checked = true;
        } else {
            document.getElementById("real_loan").checked = false;
        }
        var real_rec = data.reallist[i].real_rec;
        if (real_rec == "Yes") {
            document.getElementById("real_rec").checked = true;
        } else {
            document.getElementById("real_rec").checked = false;
        }
        var real_electricity = data.reallist[i].real_electricity;
        if (real_electricity == "Yes") {
            document.getElementById("real_electricity").checked = true;
        } else {
            document.getElementById("real_electricity").checked = false;
        }
        var real_water = data.reallist[i].real_water;
        if (real_water == "Yes") {
            document.getElementById("real_water").checked = true;
        } else {
            document.getElementById("real_water").checked = false;
        }
        var real_morgage = data.reallist[i].real_morgage;
        if (real_morgage == "Yes") {
            document.getElementById("real_morgage").checked = true;
        } else {
            document.getElementById("real_morgage").checked = false;
        }
        var real_acc_flex = data.reallist[i].real_acc_flex;
        //alert(real_acc_flex);
        if (real_acc_flex == "Yes") {
            document.getElementById("real_acc_flex").checked = true;
        } else {
            document.getElementById("real_acc_flex").checked = false;
        }
        var real_trade = data.reallist[i].real_trade;
        //if (real_trade == "Yes") {
        //    document.getElementById("real_trade").checked = true;
        //} else {
        //    document.getElementById("real_trade").checked = false;
        //}
        var name = data.reallist[i].name;
        document.getElementById("u_name").value = name;
        var u_phone = data.reallist[i].u_phone;
        document.getElementById("u_phone").value = u_phone;
        var u_email = data.reallist[i].u_email;
        //document.getElementById("u_email").value = u_email;
        var real_comment = data.reallist[i].real_comment;
        document.getElementById("real_comment").value = real_comment;
        var file_img = data.reallist[i].real_img;
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
    $("#real_title_lis").attr("placeholder", rTitle);
}
function setPlaceHolderTerrain() {
    $("#real_terrain").attr("placeholder", rTerrain);
}
function setPlaceHolderBuild() {
    $("#real_building").attr("placeholder", rBuilding);
}
function setPlaceHolderNearLoc() {
    $("#real_near_by_loc").attr("placeholder", rNear);
}
function setPlaceHolderRoom() {
    $("#real_room").attr("placeholder", rooms);
}
function setPlaceHolderBath() {
    $("#real_baths").attr("placeholder", bathrooms);
}
function setPlaceHolderPrice() {
    $("#real_price").attr("placeholder", price);
}
function setPlaceHolderThree() {
    $("#real_three").attr("placeholder", rBuilt);
}

function setPlaceHolderComment() {
    $("#real_comment").attr("placeholder", rComment);
}
function setPlaceHolderPublishBy() {
    $("#u_name").attr("placeholder", rPublishBy);
}
function setPlaceHolderContact() {
    $("#u_phone").attr("placeholder", rContact);
}

//Update Real Estate Data.
function goUpdateReal() {
    var regi_id = gdc_uid;

    var real_property = document.getElementById('proType').value;
    if ($.trim(real_property) == "") {
        navigator.notification.alert(selectOtherMsg,null,'Alert','Ok');
        $('#proType').focus();
        document.getElementById('errfn').innerHTML = selectOtherMsg;
        return false;
    }
    var real_pro_type = document.getElementById('propertyType').value;
    if ($.trim(real_pro_type) == "") {
        navigator.notification.alert(selectCatMsg,null,'Alert','Ok');
        $('#propertyType').focus();
        document.getElementById('errfn1').innerHTML = selectCatMsg;
        return false;
    }
    var real_title_lis = document.getElementById('real_title_lis').value;
    if ($.trim(real_title_lis).length == 0) {
        navigator.notification.alert(insertTitleMsg,null,'Alert','Ok');
        $('#real_title_lis').focus();
        document.getElementById('errfn2').innerHTML = insertTitleMsg;
        return false;
    }

    var real_three = document.getElementById('real_three').value;
    if ($.trim(real_three).length == 0) {
        navigator.notification.alert(insertBuiltMsg,null,'Alert','Ok');
        $('#real_three').focus();
        document.getElementById('errfn33').innerHTML = insertBuiltMsg;
        return false;
    }

    var real_terrain = document.getElementById('real_terrain').value;
    if ($.trim(real_terrain).length == 0) {
        navigator.notification.alert(insertTerrainMsg,null,'Alert','Ok');
        $('#real_terrain').focus();
        document.getElementById('errfn44').innerHTML = insertTerrainMsg;
        return false;
    }
    var real_building = document.getElementById('real_building').value;
    if ($.trim(real_building).length == 0) {
        navigator.notification.alert(insertBuildingMsg,null,'Alert','Ok');
        $('#real_building').focus();
        document.getElementById('errfn5').innerHTML = insertBuildingMsg;
        return false;
    }
    var real_location = "";

    var real_near_by_loc = document.getElementById('real_near_by_loc').value;
    if ($.trim(real_near_by_loc).length == 0) {
        navigator.notification.alert(insertNearbyMsg,null,'Alert','Ok');
        $('#real_near_by_loc').focus();
        document.getElementById('errfn13').innerHTML = insertNearbyMsg;
        return false;
    }
    var real_country = document.getElementById('selectCountry').value;
    if ($.trim(real_country) == "") {
        navigator.notification.alert(insertCountryMsg,null,'Alert','Ok');
        $('#selectCountry').focus();
        document.getElementById('errfn3').innerHTML = insertCountryMsg;
        return false;
    }
    var real_state = document.getElementById('selectState').value;
    if ($.trim(real_state) == "") {
        navigator.notification.alert(insertStateMsg,null,'Alert','Ok');
        $('#selectState').focus();
        document.getElementById('errfn4').innerHTML = insertStateMsg;
        return false;
    }
    var real_city = document.getElementById('selectCity').value;
    if ($.trim(real_city) == "") {
        navigator.notification.alert(insertCityMsg,null,'Alert','Ok');
        $('#selectCity').focus();
        document.getElementById('errfn5').innerHTML = insertCityMsg;
        return false;
    }
    var real_room = document.getElementById('real_room').value;
    if ($.trim(real_room).length == 0) {
        navigator.notification.alert(insertRoomMsg,null,'Alert','Ok');
        $('#real_room').focus();
        document.getElementById('errfn10').innerHTML = insertRoomMsg;
        return false;
    }
    var real_baths = document.getElementById('real_baths').value;
    if ($.trim(real_baths).length == 0) {
        navigator.notification.alert(insertBathroomMsg,null,'Alert','Ok');
        $('#real_baths').focus();
        document.getElementById('errfn11').innerHTML = insertBathroomMsg;
        return false;
    }

    var real_rating = document.getElementById('real_rating').value;
    if ($.trim(real_rating) == "") {
        navigator.notification.alert(selectRatingMsg,null,'Alert','Ok');
        $('#real_rating').focus();
        document.getElementById('errfn6').innerHTML = selectRatingMsg;
        return false;
    }

    var real_condition = document.getElementById('real_condition').value;
    if ($.trim(real_condition) == "") {
        navigator.notification.alert(selectConditionMsg,null,'Alert','Ok');
        $('#real_condition').focus();
        document.getElementById('errfn7').innerHTML = selectConditionMsg;
        return false;
    }

    var real_size_pro = "";
    //var real_size_pro = document.getElementById('real_size_pro').value;
    //if ($.trim(real_size_pro).length == 0) {
    //    alert(insertSizeProMsg);
    //    return false;
    //}
    var real_size_con = "";
    //var real_size_con = document.getElementById('real_size_con').value;
    //if ($.trim(real_size_con).length == 0) {
    //    alert(insertSizeConMsg);
    //    return false;
    //}
    if (document.getElementById("real_price_type").checked) {
        var real_price_type = "Colones";
    } else {
        var real_price_type = "Dollares";
    }
    //alert(real_price_type);
    var real_price = document.getElementById('real_price').value;
    if ($.trim(real_price).length == 0) {
        navigator.notification.alert(insertPriceMsg,null,'Alert','Ok');
        $('#real_price').focus();
        document.getElementById('errfn14').innerHTML = insertPriceMsg;
        return false;
    }

    if (document.getElementById("real_loan").checked) {
        var real_loan = "Yes";
    } else {
        var real_loan = "No";
    }
    //alert("Loan: "+real_loan);
    if (document.getElementById("real_morgage").checked) {
        var real_morgage = "Yes";
    } else {
        var real_morgage = "No";
    }
    //alert("real_morgage: "+real_morgage);
    if (document.getElementById("real_rec").checked) {
        var real_rec = "Yes";
    } else {
        var real_rec = "No";
    }
    //alert("real_rec: "+real_rec);
    if (document.getElementById("real_electricity").checked) {
        var real_electricity = "Yes";
    } else {
        var real_electricity = "No";
    }
    //alert("real_electricity: "+real_electricity);
    if (document.getElementById("real_water").checked) {
        var real_water = "Yes";
    } else {
        var real_water = "No";
    }
    // alert("real_water: "+real_water);
    //Ashi
    if (document.getElementById("real_acc_flex").checked) {
        var real_acc_flex = "Yes";
        //alert("real_acc_flex: "+real_acc_flex);
    } else {
        var real_acc_flex = "No";
        //alert("real_acc_flex: "+real_acc_flex);
    }
    //alert("real_acc_flex: "+real_acc_flex);
    var real_trade = "";
    //if (document.getElementById("real_trade").checked) {
    //    var real_trade = "Yes";
    //} else {
    //    var real_trade = "No";
    //}

    //var name = document.getElementById('u_name').value;
    //var u_phone = document.getElementById('u_phone').value;
    //var u_email = document.getElementById('u_email').value;
    var name = document.getElementById('u_name').value;
    if ($.trim(name).length == 0) {
        navigator.notification.alert(insertNameMsg,null,'Alert','Ok');

        $('#u_name').focus();
        document.getElementById('errfn9').innerHTML = insertNameMsg;
        return false;
    }
    var u_phone = document.getElementById('u_phone').value;
    if ($.trim(u_phone).length == 0) {
        navigator.notification.alert(insertContactMsg,null,'Alert','Ok');
        $('#u_phone').focus();
        document.getElementById('errfn10').innerHTML = insertContactMsg;
        return false;
    }
    var u_email = gdc_email;
    //if ($.trim(u_email).length == 0) {
    //    alert(insertEmailMsg);
    //    return false;
    //}
    var real_comment = document.getElementById('real_comment').value;
    var image = new Array();
    for (var i = 0; carArray.length > i; i++) {
        image.push({"real_images": carArray[i]})
    }
    if (carArray.length == 0) {
        var im_data = '{"method":"UpdateRealEstateDetail", "regi_id":"' + regi_id + '","real_id":"' + editreal_id + '", "real_property":"' + real_property + '", ' + '"real_title_lis":"' + real_title_lis + '", "real_pro_type":"' + real_pro_type + '", ' + '"real_terrain":"' + real_terrain + '", "real_building":"' + real_building + '", ' + '"real_location":"' + real_location + '", "real_near_by_loc":"' + real_near_by_loc + '", "real_country":"' + real_country + '", "real_state":"' + real_state + '", "real_city":"' + real_city + '", "real_room":"' + real_room + '", "real_baths":"' + real_baths + '", "real_condition":"' + real_condition + '", "real_rating":"' + real_rating + '", "real_loan":"' + real_loan + '", "real_rec":"' + real_rec + '", "real_size_pro":"' + real_size_pro + '", "real_size_con":"' + real_size_con + '", "real_electricity":"' + real_electricity + '", "real_water":"' + real_water + '", "real_morgage":"' + real_morgage + '","real_three":"' + real_three + '", ' + '"real_acc_flex":"' + real_acc_flex + '", "real_comment":"' + real_comment + '", "name":"' + name + '",  "u_phone":"' + u_phone + '", ' + '"u_email":"' + u_email + '", "real_trade":"' + real_trade + '", "real_price_type":"' + real_price_type + '", "real_price":"' + real_price + '", "real_image":""}';
    } else {
        var im_data = '{"method":"UpdateRealEstateDetail", "regi_id":"' + regi_id + '","real_id":"' + editreal_id + '", "real_property":"' + real_property + '", ' + '"real_title_lis":"' + real_title_lis + '", "real_pro_type":"' + real_pro_type + '", ' + '"real_terrain":"' + real_terrain + '", "real_building":"' + real_building + '", ' + '"real_location":"' + real_location + '", "real_near_by_loc":"' + real_near_by_loc + '", "real_country":"' + real_country + '", "real_state":"' + real_state + '", "real_city":"' + real_city + '", "real_room":"' + real_room + '", "real_baths":"' + real_baths + '", "real_condition":"' + real_condition + '", "real_rating":"' + real_rating + '", "real_loan":"' + real_loan + '", "real_rec":"' + real_rec + '", "real_size_pro":"' + real_size_pro + '", "real_size_con":"' + real_size_con + '", "real_electricity":"' + real_electricity + '", "real_water":"' + real_water + '", "real_morgage":"' + real_morgage + '","real_three":"' + real_three + '", ' + '"real_acc_flex":"' + real_acc_flex + '", "real_comment":"' + real_comment + '", "name":"' + name + '",  "u_phone":"' + u_phone + '", ' + '"u_email":"' + u_email + '", "real_trade":"' + real_trade + '", "real_price_type":"' + real_price_type + '", "real_price":"' + real_price + '", "real_image":' + JSON.stringify(image) + '}';
    }
    //console.log(im_data);
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
        data: im_data,
        success: function (data) {
            if (data.success == 0) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(errorMsg,null,'Alert','Ok');
                $("#preloader").css('display','none');
                return false;
            }
            if (data.success == 1) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(successMsg,null,'Alert','Ok');
                $("#preloader").css('display','none');
                window.location.href = "userpost.html?type=realmenu";
            }
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert(errorMsg,null,'Alert','Ok');
            $("#preloader").css('display','none');

            return false;
        }
    });
}
