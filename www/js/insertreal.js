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
var rCountry = "";
var rState = "";
var rCity = "";
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

var selType = "";
var selCate = "";
var selCountry = "";
var selState = "";
var selCity = "";
var selRating = "";
var selCondition = "";
var excellent = "";
var good = "";
var okay = "";
var regular = "";
var old = "";
var _new = "";

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
    ptype = "Old / New";
    cattype = "Category Type";
    rTitle = "Title";
    rTerrain = "Terrain in sq mts";
    rBuilding = "Building in sq mts";
    rLocation = "Location";
    rNear = "Nearby";
    rCountry = "Country";
    rState = "State";
    rCity = "City";
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
    pricetype = "";
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

    selType = " Select Type";
    selCate = "Select Category ";
    selCity = "Select City";
    selCountry = "Select Country";
    selState = "Select Start";
    selRating = "Select Rating";
    selCondition = "Select Condition";
    excellent = "Excellent";
    good = "Good";
    okay = "Okay";
    regular = "Regular";
    old = "Old";
    _new = " New";


    successMsg = "Congratulation, Details Successfully Submitted.";
    errorMsg = "Sorry, There is some problem, please try again.";

}
function ready_spa() {
    basicinfo = "Básica";
    ptype = "Viejo / Nuevo";
    cattype = "Categoría Tipo";
    rTitle = "Título";
    rTerrain = "Terreno en metros cuadrados";
    rBuilding = "Edificio en metros cuadrados";
    rLocation = "Ubicación";
    rNear = "Cerca";
    rCountry = "País";
    rState = "Estado";
    rCity = "Ciudad";
    rooms = "Habitaciones";
    bathrooms = "Baños";
    rCondition = "Condición";
    rRating = "Clasificación";
    rSizePro = "Gama del tamaño de la propiedad";
    rSizeCon = "Gama del tamaño de la construcción";
    rBuilt = "año de construcción";
    ruploadpic = "Subir fotos";
    extraInfo = "Extras";
    rMorgage = "Hipoteca";
    rFlexible = "Precio Flexible";
    loan = "Préstamo";
    trade = "Comercio";
    exchange = "Intercambiar";
    pricetype = "";
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

    selType = " Seleccionar el tipo de";
    selCate = "Seleccionar categoría ";
    selCity = "Seleccionar Ciudad";
    selCountry = "Seleccionar país";
    selState = "Seleccionar Estado";
    selRating = "Seleccione el grado";
    selCondition = "Seleccione Condición";
    excellent = "Excelente";
    good = "mejor";
    okay = "bueno";
    regular = "Regular";
    old = "antiguo";
    _new = "nuevo";

    successMsg = "Enhorabuena, detalles se sometieron con éxito.";
    errorMsg = "Lo sentimos, hay algún problema, por favor intente de nuevo.";
}
display();

function display() {
    $(document).ready(function () {

        document.getElementById('basicinfo').innerHTML = basicinfo;
        document.getElementById('selType').innerHTML = selType;
        document.getElementById('selOld').innerHTML = old;
        document.getElementById('selNew').innerHTML = _new;
        document.getElementById('proCate').innerHTML = selCate;
        document.getElementById('selCountry').innerHTML = selCountry;
        document.getElementById('selState').innerHTML = selState;
        document.getElementById('selCity').innerHTML = selCity;
        document.getElementById('selRating').innerHTML = selRating;
        document.getElementById('selCondition').innerHTML = selCondition;
        document.getElementById('excellent').innerHTML = excellent;
        document.getElementById('good').innerHTML = good;
        document.getElementById('okay').innerHTML = okay;
        document.getElementById('regular').innerHTML = regular;
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


        $('#proType-button span').html(selType);
        //document.getElementById('selType').innerHTML = selType;
        $('#propertyType-button span').html(selCate);
        //document.getElementById('propertyType').innerHTML = selCate;
        $('#selectCountry-button span').html(selCountry);
        //document.getElementById('selCountry').innerHTML = selCountry;
        $('#selectCity-button span').html(selCity);
        //document.getElementById('selCity').innerHTML = selCity;
        $('#selectState-button span').html(selState);
        //document.getElementById('selState').innerHTML = selState;
        $('#real_rating-button span').html(selRating);
        $('#real_condition-button span').html(selCondition);
        //document.getElementById('selRating').innerHTML = selRating;

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
        ;

    }
);


document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}

//Ashish
var pictureSource;
var destinationType;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}


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
        sourceType: source,
        targetWidth: 200
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
//Ashish

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


var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getRealCatList();
        getCountryList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();


function getRealCatList() {

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
        data: '{"method":"RealPro"}',
        success: function (data) {
//                      alert(data);
            proData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function getCountryList() {

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
        data: '{"method":"Country"}',
        success: function (data) {
//                      alert(data);
            countryData(data);
            return true;
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function proData(data) {
    var obj = data.realfilter;
    for (var i = 0; i < obj.length; i++) {
        $('#propertyType').append($('<option>').text(obj[i].real_pro_name).attr('value', obj[i].real_pro_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}
function countryData(data) {
    var obj = data.country;
    for (var i = 0; i < obj.length; i++) {
        $('#selectCountry').append($('<option>').text(obj[i].counry_name).attr('value', obj[i].counry_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}


function selectState12(str) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?country_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectCity12(str) {

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?state_id=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div6").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
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

function goInsertReal() {
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
        document.getElementById('errfn3').innerHTML = insertBuiltMsg;
        return false;
    }

    var real_terrain = document.getElementById('real_terrain').value;
    if ($.trim(real_terrain).length == 0) {
        navigator.notification.alert(insertTerrainMsg,null,'Alert','Ok');
        $('#real_terrain').focus();
        document.getElementById('errfn4').innerHTML = insertTerrainMsg;
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
    var real_country = document.getElementById('selectCountry').value;
    if ($.trim(real_country) == "") {
        navigator.notification.alert(insertCountryMsg,null,'Alert','Ok');
        $('#selectCountry').focus();
        document.getElementById('errfn6').innerHTML = insertCountryMsg;
        return false;
    }
    var real_state = document.getElementById('selectState').value;
    if ($.trim(real_state) == "") {
        navigator.notification.alert(insertStateMsg,null,'Alert','Ok');
        $('#selectState').focus();
        document.getElementById('errfn7').innerHTML = insertStateMsg;
        return false;
    }
    var real_city = document.getElementById('selectCity').value;
    if ($.trim(real_city) == "") {
        navigator.notification.alert(insertCityMsg,null,'Alert','Ok');
        $('#selectCity').focus();
        document.getElementById('errfn8').innerHTML = insertCityMsg;
        return false;
    }

    var real_near_by_loc = document.getElementById('real_near_by_loc').value;
    if ($.trim(real_near_by_loc).length == 0) {
        navigator.notification.alert(insertNearbyMsg,null,'Alert','Ok');
        $('#real_near_by_loc').focus();
        document.getElementById('errfn9').innerHTML = insertNearbyMsg;
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
        document.getElementById('errfn12').innerHTML = selectRatingMsg;
        return false;
    }

    var real_condition = document.getElementById('real_condition').value;
    if ($.trim(real_condition) == "") {
        navigator.notification.alert(selectConditionMsg,null,'Alert','Ok');

        $('#real_condition').focus();
        document.getElementById('errfn13').innerHTML = selectConditionMsg;
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
    var real_price = document.getElementById('real_price').value;
    if ($.trim(real_price).length == 0) {
        navigator.notification.alert(insertPriceMsg,null,'Alert','Ok');
        $('#real_price').focus();
        document.getElementById('errfn14').innerHTML = insertPriceMsg;
        return false;
    }

    //var real_loan = document.getElementById('real_loan').value;
    if (document.getElementById("real_loan").checked) {
        var real_loan = "Yes";
    } else {
        var real_loan = "No";
    }
    //var real_morgage = document.getElementById('real_morgage').value;
    if (document.getElementById("real_morgage").checked) {
        var real_morgage = "Yes";
    } else {
        var real_morgage = "No";
    }

    //var real_rec = document.getElementById('real_rec').value;
    if (document.getElementById("real_rec").checked) {
        var real_rec = "Yes";
    } else {
        var real_rec = "No";
    }

    //var real_electricity = document.getElementById('real_electricity').value;
    if (document.getElementById("real_electricity").checked) {
        var real_electricity = "Yes";
    } else {
        var real_electricity = "No";
    }

    //var real_water = document.getElementById('real_water').value;
    if (document.getElementById("real_water").checked) {
        var real_water = "Yes";
    } else {
        var real_water = "No";
    }

    //var real_acc_flex = document.getElementById('real_acc_flex').value;
    if (document.getElementById("real_acc_flex").checked) {
        var real_acc_flex = "Yes";
    } else {
        var real_acc_flex = "No";
    }

    //var real_trade = document.getElementById('real_trade').value;
    var real_trade = "";
    //if (document.getElementById("real_trade").checked) {
    //    var real_trade = "Yes";
    //} else {
    //    var real_trade = "No";
    //}

    var name = document.getElementById('u_name').value;
    if ($.trim(name).length == 0) {
        navigator.notification.alert(insertNameMsg,null,'Alert','Ok');
        $('#u_name').focus();
        document.getElementById('errfn15').innerHTML = insertNameMsg;
        return false;
    }
    var u_phone = document.getElementById('u_phone').value;
    if ($.trim(u_phone).length == 0) {
        navigator.notification.alert(insertContactMsg,null,'Alert','Ok');
        $('#u_phone').focus();
        document.getElementById('errfn16').innerHTML = insertContactMsg;
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
        image.push({"reals_images": carArray[i]})
    }
    if (carArray.length == 0) {
        var real_detail = '{"method":"InsertRealEstateDetail", "regi_id":"' + regi_id + '", "real_property":"' + real_property + '", "real_title_lis":"' + real_title_lis + '", "real_pro_type":"' + real_pro_type + '", "real_terrain":"' + real_terrain + '", "real_building":"' + real_building + '", "real_location":"' + real_location + '", "real_near_by_loc":"' + real_near_by_loc + '", "real_country":"' + real_country + '", "real_state":"' + real_state + '", "real_city":"' + real_city + '", "real_room":"' + real_room + '", "real_baths":"' + real_baths + '", "real_condition":"' + real_condition + '", "real_rating":"' + real_rating + '", "real_loan":"' + real_loan + '", "real_rec":"' + real_rec + '", "real_size_pro":"' + real_size_pro + '", "real_size_con":"' + real_size_con + '", "real_electricity":"' + real_electricity + '", "real_water":"' + real_water + '", "real_morgage":"' + real_morgage + '","real_three":"' + real_three + '", "real_acc_flex":"' + real_acc_flex + '", "real_comment":"' + real_comment + '", "real_name":"' + name + '", "real_phone":"' + u_phone + '", "real_email":"' + u_email + '", "real_trade":"' + real_trade + '", "real_price_type":"' + real_price_type + '", "real_price":"' + real_price + '", "real_visitor":"", "real_image":""}';
    } else {
        var real_detail = '{"method":"InsertRealEstateDetail", "regi_id":"' + regi_id + '", "real_property":"' + real_property + '", "real_title_lis":"' + real_title_lis + '", "real_pro_type":"' + real_pro_type + '", "real_terrain":"' + real_terrain + '", "real_building":"' + real_building + '", "real_location":"' + real_location + '", "real_near_by_loc":"' + real_near_by_loc + '", "real_country":"' + real_country + '", "real_state":"' + real_state + '", "real_city":"' + real_city + '", "real_room":"' + real_room + '", "real_baths":"' + real_baths + '", "real_condition":"' + real_condition + '", "real_rating":"' + real_rating + '", "real_loan":"' + real_loan + '", "real_rec":"' + real_rec + '", "real_size_pro":"' + real_size_pro + '", "real_size_con":"' + real_size_con + '", "real_electricity":"' + real_electricity + '", "real_water":"' + real_water + '", "real_morgage":"' + real_morgage + '","real_three":"' + real_three + '", "real_acc_flex":"' + real_acc_flex + '", "real_comment":"' + real_comment + '", "real_name":"' + name + '", "real_phone":"' + u_phone + '", "real_email":"' + u_email + '", "real_trade":"' + real_trade + '", "real_price_type":"' + real_price_type + '", "real_price":"' + real_price + '", "real_visitor":"", "real_image":' + JSON.stringify(image) + '}';
    }
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
        data: real_detail,
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