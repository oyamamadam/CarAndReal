/**
 * Created by CTinfotech on 11/27/2015.
 */

var basicinfo = "";
var ptype = "";
var cattype = "";
var rTitle = "";
var rTerrain = "";
var rBuilding = "";
var rLocation = "";
var rNear = "";
var rSize = "";
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
var vCount = "";
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
var cPublishOn = "";
var rContact = "";
var rEmail = "";
var rSubmit = "";
var rElectricity = "";
var rWater = "";
var clocation = ""
var sizeLength = "";
var sizeBreadth = "";
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
    clocation = "Location";
    cattype = "Category Type";
    rTitle = "Title";
    rTerrain = "Terrain in sq mts";
    rBuilding = "Building in sq mts";
    rLocation = "Location";
    rSize = "Size(area)";
    rNear = "Nearby";
    rCountry = "Country";
    rState = "State";
    rCity = "City";
    rooms = "Rooms";
    vCount = "Visitor Count";
    cPublishOn = "Publish On";
    bathrooms = "Bathrooms";
    rCondition = "Condition";
    rRating = "Rating";
    rSizePro = "Size Range Of Property";
    rSizeCon = "Size Range Of Construction";
    rBuilt = "3 years from the moment they built";
    ruploadpic = "Upload Pics";
    extraInfo = "Extras";
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
    rElectricity = "Electricity Service Available";
    rWater = "Water Services Available";
    sizeLength = "length";
    sizeBreadth = "breadth";

}
function ready_spa() {
    basicinfo = "Básica";
    ptype = "Viejo / Nuevo";
    cattype = "Categoría Tipo";
    rTitle = "Título";
    rTerrain = "Terreno en metros cuadrados";
    rBuilding = "Edificio en metros cuadrados";
    rLocation = "Ubicación";
    rSize = "Tamaño (área)";
    rNear = "Cerca";
    cPublishOn = "Publicará";
    rCountry = "País";
    rState = "Estado";
    rCity = "Ciudad";
    rooms = "Habitaciones";
    vCount = "Contador de visitantes";
    bathrooms = "Baños";
    rCondition = "Condición";
    rRating = "Estado";
    rSizePro = "Gama del tamaño de la propiedad";
    rSizeCon = "Gama del tamaño de la construcción";
    rBuilt = "Aniode Construccion";
    ruploadpic = "Subir fotos";
    extraInfo = "Extras";
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
    clocation = "Ubicación";
    rElectricity = "Servicio de Electricidad disponible";
    rWater = "Servicios de agua disponibles";
    sizeLength = "longitud";
    sizeBreadth = "amplitud";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        //document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('cattype').innerHTML = cattype;
        document.getElementById('rTitle').innerHTML = rTitle;
        document.getElementById('clocation').innerHTML = clocation;
        //document.getElementById('rTerrain').innerHTML = rTerrain;
        //document.getElementById('rBuilding').innerHTML = rBuilding;
        //document.getElementById('rLocation').innerHTML = rLocation;
        document.getElementById('rNear').innerHTML = rNear;
        document.getElementById('rSize').innerHTML = rSize;

        //document.getElementById('rCountry').innerHTML = rCountry;
        //document.getElementById('rState').innerHTML = rState;
        //document.getElementById('rCity').innerHTML = rCity;
        document.getElementById('rooms').innerHTML = rooms;
        document.getElementById('bathrooms').innerHTML = bathrooms;
        document.getElementById('rCondition').innerHTML = rCondition;
        document.getElementById('rRating').innerHTML = rRating;
        //document.getElementById('rSizePro').innerHTML = rSizePro;
        //document.getElementById('rSizeCon').innerHTML = rSizeCon;
        document.getElementById('rBuilt').innerHTML = rBuilt;
        document.getElementById('rMorgage').innerHTML = rMorgage;
        //document.getElementById('ruploadpic').innerHTML = ruploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        document.getElementById('rFlexible').innerHTML = rFlexible;
        document.getElementById('loan').innerHTML = loan;
        document.getElementById('vCount').innerHTML = vCount;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        //document.getElementById('pricetype').innerHTML = pricetype;
        document.getElementById('price').innerHTML = price;
        //document.getElementById('rComment').innerHTML = rComment;
        document.getElementById('cPublishOn').innerHTML = cPublishOn;
        document.getElementById('rPublishBy').innerHTML = rPublishBy;
        //document.getElementById('rContact').innerHTML = rContact;
        //document.getElementById('rEmail').innerHTML = rEmail;
        //document.getElementById('rSubmit').innerHTML = rSubmit;
        document.getElementById('rElectricity').innerHTML = rElectricity;
        document.getElementById('rWater').innerHTML = rWater;
    })
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var gdc_uid = window.localStorage.getItem("gdc_uid");
var gdc_firstname = window.localStorage.getItem("gdc_firstname");
var gdc_lastname = window.localStorage.getItem("gdc_lastname");
var gdc_username = gdc_firstname + " " + gdc_lastname;
var gdc_gender = window.localStorage.getItem("gdc_gender");
//alert(gdc_gender);
$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {

            //user_name.innerHTML = gdc_username;
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
        getRealDetail(rid);

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
});


function getRealDetail(rid) {

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
        data: '{"method":"SelectRealDetail", "real_id":"' + rid + '", "regi_id":"' + gdc_uid + '"}',
        success: function (data) {
            realDetailData(data);
            $.getScript('js/test.js');
            return true;
        },
        error: function (result) {
            navigator.notification.alert('Error',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function realDetailData(data) {
    //$("#imageData").children().remove();
    for (var i = 0; i < data.reallist.length; i++) {

        var real_id = data.reallist[i].real_id;
        var real_title_lis = data.reallist[i].real_title_lis;
        document.getElementById('realPropertyType').innerHTML = real_title_lis;
        var real_property = data.reallist[i].real_property;
        var real_pro_type = data.reallist[i].real_pro_type;
        document.getElementById('realName').innerHTML = real_pro_type + " (" + real_property + ")";
        var real_room = data.reallist[i].real_room;
        document.getElementById('realRooms').innerHTML = real_room;
        var real_location = data.reallist[i].real_location;
        var real_country = data.reallist[i].real_country;
        var real_state = data.reallist[i].real_state;
        var real_city = data.reallist[i].real_city;
        document.getElementById('realLocation').innerHTML = real_city + ", " + real_state + ", " + real_country;
        var real_near_by_loc = data.reallist[i].real_near_by_loc;
        document.getElementById('realNearBy').innerHTML = real_near_by_loc;

        var real_terrain = data.reallist[i].real_terrain;
        var real_building = data.reallist[i].real_building;
        document.getElementById('realTerrain').innerHTML = real_terrain + " sq lot " + " and " + real_building + " sq " + " " + real_pro_type;


//        document.getElementById('realBuilding').innerHTML = real_building;

        var real_baths = data.reallist[i].real_baths;
        document.getElementById('realBathrooms').innerHTML = real_baths;
        var real_condition = data.reallist[i].real_condition;
        document.getElementById('realCondition').innerHTML = real_condition;
        var real_rating = data.reallist[i].real_rating;
        document.getElementById('realRating').innerHTML = real_rating + "/10";
        var real_size_pro = data.reallist[i].real_size_pro;
        //document.getElementById('realSizeRangeOfProperty').innerHTML = real_size_pro + " Sq.";
        var real_size_con = data.reallist[i].real_size_con;
        //document.getElementById('realSizeRangeOfConstruction').innerHTML = real_size_con + " Sq.";
        var real_price = numberWithCommas(data.reallist[i].real_price);
        var real_price_type = data.reallist[i].real_price_type;
        if (real_price_type == "Dollares") {
            document.getElementById('realPrice').innerHTML = "&#36;" + real_price+' ';
        } else {
            document.getElementById('realPrice').innerHTML = "&#128;" + real_price+' ';
        }

        var real_three = data.reallist[i].real_three;
        document.getElementById('realYersMoment').innerHTML = real_three;
        var real_visitor = data.reallist[i].real_visitor;
        document.getElementById('realVisitorCount').innerHTML = real_visitor;
        var date = data.reallist[i].real_publish;


        var m_names = new Array("Jan", "Feb", "Mar", "Apl", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


        var kk = date.split(" ");
        var year = kk[0].split("-");
        var time = kk[1];

        var cc = parseInt(year[1]);
        var real_publish =m_names[cc]+'/'+ year[2]+'/'+year[0];


        document.getElementById('realPublish').innerHTML = real_publish +" "+ time;
        var name = data.reallist[i].name;
        document.getElementById('realPublishUname').innerHTML = name;
        var u_email = data.reallist[i].u_email;
        //document.getElementById('realPublishUemail').innerHTML = u_email;
        var real_status = data.reallist[i].real_status;
        var real_loan = data.reallist[i].real_loan;
        if (real_loan == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realLoan").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realLoan").src = string;
            $('.ul-left li:nth-child(1)').css("display",'none');
        }
        var real_rec = data.reallist[i].real_rec;
        if (real_rec == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realExchange").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realExchange").src = string;
            $('.ul-left li:nth-child(2)').css("display",'none');
        }
        var real_electricity = data.reallist[i].real_electricity;
        if (real_electricity == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realElectricity").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realElectricity").src = string;
            $('.ul-left li:nth-child(3)').css("display",'none');
        }

        var real_water = data.reallist[i].real_water;
        if (real_water == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realWater").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realWater").src = string;
            $('.ul-right li:nth-child(3)').css("display",'none');
        }

        var real_morgage = data.reallist[i].real_morgage;
        if (real_morgage == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realMorgage").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realMorgage").src = string;
            $('.ul-right li:nth-child(1)').css("display",'none');
        }

        var real_acc_flex = data.reallist[i].real_acc_flex;
        if (real_acc_flex == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("realFlexiblePrice").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("realFlexiblePrice").src = string;
            $('.ul-right li:nth-child(2)').css("display",'none');
        }

        /*var real_trade = data.reallist[i].real_trade;
         if (real_trade == "Yes") {
         var string = 'images/right-icon.png';
         document.getElementById("realAcceptTrade").src = string;
         } else {
         var string = 'images/wrong-icon.png';
         document.getElementById("realAcceptTrade").src = string;
         }*/
        var real_comment = data.reallist[i].real_comment;
        document.getElementById('realComment').innerHTML = real_comment;
        var u_phone = data.reallist[i].u_phone;
        $("#callPerson").append('<span style="font-weight:bold; width:40%; float:left;"></span><a href="tel:' + u_phone + '"><img src="images/contact-icon.png"></a><a href="sms:' + u_phone + '"><img src="images/sms-icon.png"></a>');
        var real_img = data.reallist[i].real_img;
        for (var j = 0; j < real_img.length; j++) {
            //alert(real_img[j]);
            $("#owl-demo2").append('<div class="item"><img src="' + real_img[j] + '"></div>');
        }
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}