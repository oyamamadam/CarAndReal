/**
 * Created by CTinfotech on 11/27/2015.
 */

var basicinfo = "";
var ptype = "";
var make = "";
var carmodel = "";
var filstyle = "";
var fuel = "";
var transmission = "";
var engine = "";
var year = "";
var pricetype = "";
var odometerType = "";
var price = "";
var icolor = "";
var ecolor = "";
var clocation = ""
var vCount = "";
var kilometar = "";
var carcountry = "";
var carstate = "";
var carcity = "";
var doors = "";
var cCondition = "";
var cRating = "";
var cUploadpic = "";
var extraInfo = "";
var withPlate = "";
var cPlate = "";
var loan = "";
var cAccept = "";
var trade = "";
var exchange = "";
var cComment = "";
var cPublishBy = "";
var cPublishOn = "";
var cContact = "";
var cEmail = "";
var cSubmit = "";
var cPowerLock = ""
var cTintWin = "";
var cPowerWin = "";
var cAlarm = "";
var cAClim = "";
var cSunRoof = "";
var cTurbo = "";
var cHalogan = "";
var cDisco = "";
var cDescent = "";
var cRear = "";
var cFront = "";
var cMultifunctional = "";
var cMemory = "";
var cXenon = "";
var cRain = "";
var cTire = "";
var cAduSte = "";
var cRadioCon = "";
var cHydraulic = "";
var cPowerSeat = "";
var cElectricGls = "";
var cTripCom = "";
var cElectricAdj = "";
var cAir = "";
var cElectricMir = "";
var cAbs = "";
var cWinDff = "";
var cRims = "";
var cLeaSeat = "";
var cCassette = "";
var cCruise = "";
var cElectronic = "";
var cChangeDual = "";
var cRearSen = "";
var cRadioInSte = "";
var cAutoFold = "";
var cXenLed = "";
var cSmartKey = "";
var cCruse = "";
var cBluetooth = "";
var cCentLock = "";
var cTintedGla = "";
var cBreaks = "";
var cIntelligent = "";

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
    ptype = "Type";
    make = "Make";
    carmodel = "Model";
    filstyle = "Style";
    fuel = "Fuel";
    transmission = "Transmission";
    engine = "Engine";
    year = "Year";
    pricetype = "Price Type";
    odometerType = "Odometer";
    price = "Price";
    icolor = "Interior Color";
    ecolor = "Exterior Color";
    clocation = "Location";
    vCount = "Visitor Count";
    cPublishOn = "Publish On";
    kilometar = "Kilometer / Miles"
    carcountry = "Country";
    carstate = "State";
    carcity = "City";
    doors = "Doors";
    cUploadpic = "Upload Pics";
    cCondition = "Condition";
    cRating = "Rating";
    extraInfo = "Extras";
    //extraInfo = "Extra Info";
    withPlate = "With Plates";
    cPlate = "Car Plate No.";
    loan = "Loan";
    cAccept = "Accept Old Car";
    trade = "Trade";
    exchange = "Exchange";
    //cComment = "Comment";
    cPublishBy = "Published By";
    cContact = "Contact No.";
    cEmail = "Email";
    cSubmit = "Submit";
    cPowerLock = "Power Lock"
    cTintWin = "Tint Windows";
    cPowerWin = "Power Windows";
    cAlarm = "Alarm";
    cAClim = "A/C Climatized (Independent A/C)";
    cSunRoof = "Sunroof /Panoramic Roof";
    cTurbo = "Turbo";
    cHalogan = "Halogen";
    cDisco = "Compact Disc (DVD)";
    cDescent = "Descent Control";
    cRear = "Rear View Camera";
    cFront = "Front Sensor";
    cMultifunctional = "Multifunction steering wheel";
    cMemory = "Memory Seats";
    cXenon = "Xenon, Bi-Xenon";
    cRain = "Rain Sensor";
    cTire = "Tire Pressure Monitor";
    cAduSte = "Adjustable Steering";
    cRadioCon = "Radio Con USB/AUX";
    cHydraulic = "Hydraulic steering";
    cPowerSeat = "Power Seats";
    cElectricGls = "Electric Glasses";
    cTripCom = "Trip Computer";
    cElectricAdj = "Electric Adjust Seat";
    cAir = "Air Bags";
    cElectricMir = "Electric Mirror";
    cAbs = "ABS";
    cWinDff = "Windows Defogger";
    cRims = "Rims";
    cLeaSeat = "Leather Seats";
    cCassette = "Cassette";
    cCruise = "Cruise Control";
    cElectronic = "Electronic Stability Control";
    cChangeDual = "Changes Dual Box ( Tiptronic)";
    cRearSen = "Rear Sensor";
    cRadioInSte = "Radio In Steering Controls";
    cAutoFold = "Auto-Folding Mirrors";
    cXenLed = "Xenon Led";
    cSmartKey = "Smart Key Fob";
    cCruse = "Cruise Control";
    cBluetooth = "Bluetooth";
    cCentLock = "Central Locking";
    cTintedGla = "Tinted Glasses";
    cBreaks = "Brakes";
    cIntelligent = "Intelligent/Start Button Key";
}
function ready_spa() {
    basicinfo = "Básica";
    ptype = "Tipo";
    make = "Hacer";
    carmodel = "Modelo";
    filstyle = "Estilo";
    fuel = "Combustible";
    transmission = "Transmisión";
    engine = "Motor";
    year = "Año";
    pricetype = "Tipo Precio";
    odometerType = "Cuentakilómetros";
    price = "Precio";
    icolor = "Color Interior";
    ecolor = "Color Exterior";
    clocation = "Ubicación";
    vCount = "Contador de visitantes";
    cPublishOn = "En publicará";
    kilometar = "Kilómetro / Millas";
    carcountry = "País";
    carstate = "Estado";
    carcity = "Ciudad";
    doors = "Puertas";
    cCondition = "Condición";
    cRating = "Clasificación";
    extraInfo = "Extras";
    withPlate = "Con Las Placas";
    cPlate = "Placa auto No.";
    loan = "Préstamo";
    cAccept = "Acepta el coche viejo";
    cUploadpic = "Subir fotos";
    trade = "Comercio";
    exchange = "Intercambiar";
    //cComment = "Comentario";
    cPublishBy = "Publicado por";
    cContact = "Contacto No.";
    cEmail = "Email";
    cSubmit = "Enviar";
    cPowerLock = "Bloqueo de alimentación"
    cTintWin = "Tinte de Windows";
    cPowerWin = "Ventanas eléctricas";
    cAlarm = "Alarma";
    cAClim = "A/C Climatizada (Independent A/C)";
    cSunRoof = "Techo corredizo/Techo panorámico";
    cTurbo = "Turbo";
    cHalogan = "halógeno";
    cDisco = "Disco Compacto (DVD)";
    cDescent = "Control de descenso";
    cRear = "Cámara de visión trasera";
    cFront = "Sensor Frontal";
    cMultifunctional = "Volante multifunción";
    cMemory = "Asientos De la memoria";
    cXenon = "Xenón, Bi-Xenon";
    cRain = "Sensor de lluvia";
    cTire = "Monitor de la presión de los neumáticos";
    cAduSte = "Dirección Regulable";
    cRadioCon = "Con Radio USB/AUX";
    cHydraulic = "La dirección hidráulica";
    cPowerSeat = "Asientos Eléctricos";
    cElectricGls = "Vidrios eléctricos";
    cTripCom = "Computadora de viaje";
    cElectricAdj = "Ajuste eléctrico del asiento";
    cAir = "Bolsas de aire";
    cElectricMir = "Espejo eléctrico";
    cAbs = "Abdominales";
    cWinDff = "Ventanas Desempañador";
    cRims = "Llantas";
    cLeaSeat = "Asientos de piel";
    cCassette = "Casete";
    cCruise = "Control de Velocidad";
    cElectronic = "Control Electrónico De Estabilidad";
    cChangeDual = "Caja de cambios de doble (Tiptronic)";
    cRearSen = "Sensor Trasero";
    cRadioInSte = "En Radio Controles de dirección";
    cAutoFold = "Espejos plegables automáticamente";
    cXenLed = "Xenon Led";
    cSmartKey = "Llavero inteligente";
    cCruse = "Control de Velocidad";
    cBluetooth = "Bluetooth";
    cCentLock = "Cierre centralizado";
    cTintedGla = "Vidrios Polarizados";
    cBreaks = "Frenos";
    cIntelligent = "Inteligente / START Botón";

}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('make').innerHTML = make;
        //document.getElementById('carmodel').innerHTML = carmodel;
        document.getElementById('filstyle').innerHTML = filstyle;
        document.getElementById('fuel').innerHTML = fuel;
        document.getElementById('transmission').innerHTML = transmission;
        document.getElementById('engine').innerHTML = engine;
        //document.getElementById('year').innerHTML = year;
        //document.getElementById('pricetype').innerHTML = pricetype;
        //document.getElementById('odometerType').innerHTML = odometerType;
        document.getElementById('price').innerHTML = price;
        document.getElementById('icolor').innerHTML = icolor;
        document.getElementById('ecolor').innerHTML = ecolor;
        document.getElementById('clocation').innerHTML = clocation;
        document.getElementById('vCount').innerHTML = vCount;

        document.getElementById('kilometar').innerHTML = kilometar;
        //document.getElementById('carcountry').innerHTML = carcountry;
        //document.getElementById('carstate').innerHTML = carstate;
        //document.getElementById('carcity').innerHTML = carcity;
        document.getElementById('doors').innerHTML = doors;
        document.getElementById('cCondition').innerHTML = cCondition;
        document.getElementById('cRating').innerHTML = cRating;
        //document.getElementById('cUploadpic').innerHTML = cUploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        //document.getElementById('withPlate').innerHTML = withPlate;
        //document.getElementById('cPlate').innerHTML = cPlate;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('cAccept').innerHTML = cAccept;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        //document.getElementById('cComment').innerHTML = cComment;
        document.getElementById('cPublishOn').innerHTML = cPublishOn;
        document.getElementById('cPublishBy').innerHTML = cPublishBy;

        //document.getElementById('cContact').innerHTML = cContact;
        //document.getElementById('cEmail').innerHTML = cEmail;
        //document.getElementById('cSubmit').innerHTML = cSubmit;

        document.getElementById('cPowerLock').innerHTML = cPowerLock;
        document.getElementById('cTintWin').innerHTML = cTintWin;
        document.getElementById('cPowerWin').innerHTML = cPowerWin;
        document.getElementById('cAlarm').innerHTML = cAlarm;
        document.getElementById('cAClim').innerHTML = cAClim;
        document.getElementById('cSunRoof').innerHTML = cSunRoof;
        document.getElementById('cTurbo').innerHTML = cTurbo;
        document.getElementById('cHalogan').innerHTML = cHalogan;
        document.getElementById('cDisco').innerHTML = cDisco;
        document.getElementById('cDescent').innerHTML = cDescent;
        document.getElementById('cRear').innerHTML = cRear;
        document.getElementById('cFront').innerHTML = cFront;
        document.getElementById('cMultifunctional').innerHTML = cMultifunctional;
        document.getElementById('cMemory').innerHTML = cMemory;
        document.getElementById('cXenon').innerHTML = cXenon;
        document.getElementById('cRain').innerHTML = cRain;
        document.getElementById('cTire').innerHTML = cTire;
        document.getElementById('cAduSte').innerHTML = cAduSte;
        document.getElementById('cRadioCon').innerHTML = cRadioCon;
        document.getElementById('cHydraulic').innerHTML = cHydraulic;
        document.getElementById('cPowerSeat').innerHTML = cPowerSeat;
        document.getElementById('cElectricGls').innerHTML = cElectricGls;
        document.getElementById('cElectricAdj').innerHTML = cElectricAdj;
        document.getElementById('cAir').innerHTML = cAir;
        document.getElementById('cElectricMir').innerHTML = cElectricMir;
        document.getElementById('cAbs').innerHTML = cAbs;
        document.getElementById('cWinDff').innerHTML = cWinDff;
        document.getElementById('cRims').innerHTML = cRims;
        document.getElementById('cLeaSeat').innerHTML = cLeaSeat;
        document.getElementById('cMemory').innerHTML = cMemory;
        document.getElementById('cCassette').innerHTML = cCassette;
        document.getElementById('cCruise').innerHTML = cCruise;
        document.getElementById('cTripCom').innerHTML = cTripCom;
        document.getElementById('cElectronic').innerHTML = cElectronic;
        document.getElementById('cChangeDual').innerHTML = cChangeDual;
        document.getElementById('cRearSen').innerHTML = cRearSen;
        document.getElementById('cRadioInSte').innerHTML = cRadioInSte;
        document.getElementById('cAutoFold').innerHTML = cAutoFold;
        document.getElementById('cXenLed').innerHTML = cXenLed;
        document.getElementById('cSmartKey').innerHTML = cSmartKey;
        document.getElementById('cCruse').innerHTML = cCruse;
        document.getElementById('cBluetooth').innerHTML = cBluetooth;
        document.getElementById('cCentLock').innerHTML = cCentLock;
        document.getElementById('cTintedGla').innerHTML = cTintedGla;
        document.getElementById('cBreaks').innerHTML = cBreaks;
        document.getElementById('cIntelligent').innerHTML = cIntelligent;
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
        var cid = GetURLParameter('cid');
        getCarDetail(cid);

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


function getCarDetail(cid) {
    //{"method":"SelectCarDetail", "car_id":"3"}
    //alert("Cid: " + cid);

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
        data: '{"method":"SelectCarDetail", "car_id":"' + cid + '", "regi_id":"' + gdc_uid + '"}',
        success: function (data) {
            carDetailData(data);
            //$.getScript('js/jquery-1.9.1.min.js');
            //$.getScript('js/owl.carousel.js');
            $.getScript('js/test.js');

            return true;
        },
        error: function (result) {
            //alert("Error");
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            return false;
        }
    });
}
function carDetailData(data) {
    //$("#imageData").children().remove();
    for (var i = 0; i < data.carlist.length; i++) {

        var car_id = data.carlist[i].car_id;
        var car_make_name = data.carlist[i].car_make_name;
        var car_model_name = data.carlist[i].car_model_name;
        //document.getElementById('carModel').innerHTML = car_model_name;
        var car_year = data.carlist[i].car_year;
        //document.getElementById('carYear').innerHTML = car_year;
        document.getElementById('carName').innerHTML = car_model_name + ' (' + car_year + ')';
        var car_type = data.carlist[i].car_type;
        document.getElementById('carType').innerHTML = car_type;
        var car_style_name = data.carlist[i].car_style_name;
        document.getElementById('carStyle').innerHTML = car_style_name;
        var car_fuel = data.carlist[i].car_fuel;
        document.getElementById('carFuel').innerHTML = car_fuel;
        var car_transmission = data.carlist[i].car_transmission;
        document.getElementById('carTransmission').innerHTML = car_transmission;
        var car_engine = data.carlist[i].car_engine;
        document.getElementById('carMoter').innerHTML = car_engine + " CC";
        var car_price = numberWithCommas(data.carlist[i].car_price);
        var car_price_type = data.carlist[i].car_price_type;
        if (car_price_type == "Dollares") {
            document.getElementById('carPrice').innerHTML = "&#36;" + car_price+' ';
        } else {
            document.getElementById('carPrice').innerHTML = "&#128;" + car_price+' ';
        }
        var car_int_color = data.carlist[i].car_int_color;
        document.getElementById('carInteriorColor').innerHTML = car_int_color;
        var car_ext_color = data.carlist[i].car_ext_color;
        document.getElementById('carExteriorColor').innerHTML = car_ext_color;
        var country_name = data.carlist[i].country_name;
        var state_name = data.carlist[i].state_name;
        var city_name = data.carlist[i].city_name;
        document.getElementById('carLocation').innerHTML = city_name + ", " + state_name + ", " + country_name;
        var car_doors = data.carlist[i].car_doors;
        document.getElementById('carDoors').innerHTML = car_doors;
        var car_condition = data.carlist[i].car_condition;
        document.getElementById('carCondition').innerHTML = car_condition;
        var car_rating = data.carlist[i].car_rating;
        document.getElementById('carRating').innerHTML = car_rating + "/10";
        var date = data.carlist[i].car_lising_create;
        //var car_lising_create = data.carlist[i].car_lising_create;
        var m_names = new Array("Jan", "Feb", "Mar", "Apl", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

        var aa = date.split("-");
        var cc = parseInt(aa[1]);
        var car_lising_create = m_names[cc] + '/'+aa[2]+'/'+aa[0];




        document.getElementById('carPublish').innerHTML = car_lising_create;
        var name = data.carlist[i].name;
        document.getElementById('carPublishUname').innerHTML = name;
        var u_email = data.carlist[i].u_email;
        //document.getElementById('carPublishUemail').innerHTML = u_email;
        var car_with_plate = data.carlist[i].car_with_plate;
        var car_plate = data.carlist[i].car_plate;
        var lastDigit = car_plate % 10.;
        if (car_with_plate == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carPlate").src = string;
            document.getElementById('carPlateNumber').innerHTML = cPlate + " ***" + lastDigit;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carPlate").src = string;
            document.getElementById('carPlateNumber').innerHTML = "No " + cPlate;
            $('.ul-left li:nth-child(1)').css("display",'none');
        }

        var car_loan = data.carlist[i].car_loan;
        if (car_loan == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carLoan").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carLoan").src = string;
            $('.ul-left li:nth-child(2)').css("display",'none');
        }
        var car_acpt_old = data.carlist[i].car_acpt_old;
        //if (car_acpt_old == "Yes") {
        //    var string = 'images/right-icon.png';
        //    document.getElementById("carAccept").src = string;
        //} else {
        //    var string = 'images/wrong-icon.png';
        //    document.getElementById("carAccept").src = string;
        //}
        var car_exchange = data.carlist[i].car_exchange;
        if (car_exchange == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carExchange").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carExchange").src = string;
            $('.ul-left li:nth-child(3)').css("display",'none');
        }
        var car_listing = data.carlist[i].car_listing;
        document.getElementById('carVisitorCount').innerHTML = car_listing;
        var car_km = data.carlist[i].car_km;

        var car_odometer = data.carlist[i].car_odometer;

        //alert(car_odometer);
        document.getElementById('carKm').innerHTML = car_km + " " + car_odometer;

        var car_pow_lock = data.carlist[i].car_pow_lock;
        if (car_pow_lock == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carPowerLock").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carPowerLock").src = string;
            $('.ul-left li:nth-child(4)').css("display",'none');
        }

        var car_ele_seat = data.carlist[i].car_ele_seat;
        if (car_ele_seat == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carElecAdSeat").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carElecAdSeat").src = string;
            $('.ul-left li:nth-child(14)').css("display",'none');
        }

        var car_tint_win = data.carlist[i].car_tint_win;
        if (car_tint_win == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carTintWin").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carTintWin").src = string;
            $('.ul-left li:nth-child(5)').css("display",'none');
        }

        var car_air_bag = data.carlist[i].car_air_bag;
        if (car_air_bag == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carAirBag").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carAirBag").src = string;
            $('.ul-left li:nth-child(15)').css("display",'none');
        }
        var car_pow_win = data.carlist[i].car_pow_win;
        if (car_pow_win == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carpowerWin").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carpowerWin").src = string;
            $('.ul-left li:nth-child(6)').css("display",'none');
        }
        var car_ele_mir = data.carlist[i].car_ele_mir;
        if (car_ele_mir == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carElecMir").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carElecMir").src = string;
            $('.ul-left li:nth-child(16)').css("display",'none');
        }
        var car_alarm = data.carlist[i].car_alarm;
        if (car_alarm == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carAlarm").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carAlarm").src = string;
            $('.ul-left li:nth-child(7)').css("display",'none');
        }
        var car_abs = data.carlist[i].car_abs;
        if (car_abs == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carABS").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carABS").src = string;
            $('.ul-left li:nth-child(17)').css("display",'none');
        }
        var car_ac = data.carlist[i].car_ac;
        if (car_ac == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carAC").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carAC").src = string;
            $('.ul-left li:nth-child(18)').css("display",'none');
        }
        var car_win_difo = data.carlist[i].car_win_difo;
        if (car_win_difo == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carWinDff").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carWinDff").src = string;
            $('.ul-left li:nth-child(19)').css("display",'none');
        }
        var car_sunroof = data.carlist[i].car_sunroof;
        if (car_sunroof == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carSunRoof").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carSunRoof").src = string;
            $('.ul-left li:nth-child(9)').css("display",'none');
        }
        var car_rims = data.carlist[i].car_rims;
        if (car_rims == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRims").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRims").src = string;
            $('.ul-left li:nth-child(20)').css("display",'none');
        }
        var car_turbo = data.carlist[i].car_turbo;
        if (car_turbo == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carTurbo").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carTurbo").src = string;
            $('.ul-left li:nth-child(10)').css("display",'none');
        }
        var car_lea_seat = data.carlist[i].car_lea_seat;
        if (car_lea_seat == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carLeatherSeat").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carLeatherSeat").src = string;
            $('.ul-left li:nth-child(21)').css("display",'none');
        }
        var car_halo = data.carlist[i].car_halo;
        if (car_halo == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carHalogen").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carHalogen").src = string;
            $('.ul-left li:nth-child(11)').css("display",'none');
        }
        var car_cas = data.carlist[i].car_cas;
        if (car_cas == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carCassette").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carCassette").src = string;
            $('.ul-left li:nth-child(22)').css("display",'none');
        }
        var car_dvd = data.carlist[i].car_dvd;
        if (car_dvd == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carDisco").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carDisco").src = string;
            $('.ul-left li:nth-child(12)').css("display",'none');
        }
        var car_cru_con = data.carlist[i].car_cru_con;
        if (car_cru_con == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carCruise").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carCruise").src = string;
            $('.ul-left li:nth-child(23)').css("display",'none');
        }
        var car_usb = data.carlist[i].car_usb;
        if (car_usb == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRadioConUSB").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRadioConUSB").src = string;
            $('.ul-right li:nth-child(17)').css("display",'none');
        }
        var car_rtv = data.carlist[i].car_rtv;
        if (car_rtv == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRTV").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRTV").src = string;
            $('.ul-left li:nth-child(24)').css("display",'none');
        }
        var car_cont_elect = data.carlist[i].car_cont_elect;
        if (car_cont_elect == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carControl").src = string;

        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carControl").src = string;
            $('.ul-left li:nth-child(25)').css("display",'none');
        }
        var car_cont_desce = data.carlist[i].car_cont_desce;
        if (car_cont_desce == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carDescentControl").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carDescentControl").src = string;
            $('.ul-left li:nth-child(13)').css("display",'none');
        }
        var car_triptonic = data.carlist[i].car_triptonic;
        if (car_triptonic == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carChangesDual").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carChangesDual").src = string;
            $('.ul-right li:nth-child(5)').css("display",'none');
        }
        var car_rear_cam = data.carlist[i].car_rear_cam;
        if (car_rear_cam == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRearViewCam").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRearViewCam").src = string;
            $('.ul-right li:nth-child(1)').css("display",'none');

        }
        var car_rear_sen = data.carlist[i].car_rear_sen;
        if (car_rear_sen == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRearSensor").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRearSensor").src = string;
            $('.ul-right li:nth-child(4)').css("display",'none');
        }
        var car_front_sen = data.carlist[i].car_front_sen;
        if (car_front_sen == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carFrontSensor").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carFrontSensor").src = string;
            $('.ul-right li:nth-child(2)').css("display",'none');
        }
        var car_radio_string = data.carlist[i].car_radio_string;
        if (car_radio_string == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRadio").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRadio").src = string;
            $('.ul-right li:nth-child(6)').css("display",'none');
        }
        var car_vol_multi = data.carlist[i].car_vol_multi;
        if (car_vol_multi == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carMulStrWheel").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carMulStrWheel").src = string;
            $('.ul-right li:nth-child(3)').css("display",'none');
        }
        var car_ac_climate = data.carlist[i].car_ac_climate;
        if (car_ac_climate == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carACClimatized").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carACClimatized").src = string;
            $('.ul-left li:nth-child(8)').css("display",'none');
        }
        var car_mem_seat = data.carlist[i].car_mem_seat;
        if (car_mem_seat == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carMemorySeat").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carMemorySeat").src = string;
            $('.ul-right li:nth-child(7)').css("display",'none');
        }
        var car_auto_fold_mir = data.carlist[i].car_auto_fold_mir;
        if (car_auto_fold_mir == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carAutoFoldable").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carAutoFoldable").src = string;
            $('.ul-right li:nth-child(8)').css("display",'none');
        }
        var car_xenon = data.carlist[i].car_xenon;
        if (car_xenon == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carXenon").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carXenon").src = string;
            $('.ul-right li:nth-child(9)').css("display",'none');
        }
        var car_xenon_led = data.carlist[i].car_xenon_led;
        if (car_xenon_led == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carXenonLed").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carXenonLed").src = string;
            $('.ul-right li:nth-child(10)').css("display",'none');
        }
        var car_rain_sen = data.carlist[i].car_rain_sen;
        if (car_rain_sen == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carRainSensor").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carRainSensor").src = string;
            $('.ul-right li:nth-child(11)').css("display",'none');
        }
        var car_smt_keyof = data.carlist[i].car_smt_keyof;
        if (car_smt_keyof == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carSmartKey").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carSmartKey").src = string;
            $('.ul-right li:nth-child(12)').css("display",'none');
        }
        var car_tire_pressure = data.carlist[i].car_tire_pressure;
        if (car_tire_pressure == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carTireMoni").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carTireMoni").src = string;
            $('.ul-right li:nth-child(13)').css("display",'none');
        }
        var car_cru_cont = data.carlist[i].car_cru_cont;
        if (car_cru_cont == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carCruseControl").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carCruseControl").src = string;
            $('.ul-right li:nth-child(14)').css("display",'none');
        }
        var car_ad_ster = data.carlist[i].car_ad_ster;
        if (car_ad_ster == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carAdjustSteering").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carAdjustSteering").src = string;

            $('.ul-right li:nth-child(15)').css("display",'none');

        }
        var car_blue = data.carlist[i].car_blue;
        if (car_blue == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carBluetooth").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carBluetooth").src = string;
            $('.ul-right li:nth-child(16)').css("display",'none');
        }
        var car_trade = data.carlist[i].car_trade;
        //if (car_trade == "Yes") {
        //    var string = 'images/right-icon.png';
        //    document.getElementById("carAcceptTrade").src = string;
        //} else {
        //    var string = 'images/wrong-icon.png';
        //    document.getElementById("carAcceptTrade").src = string;
        //}

        var car_hydo_ster = data.carlist[i].car_hydo_ster;
        if (car_hydo_ster == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carHydraulicSteering").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carHydraulicSteering").src = string;
            $('.ul-right li:nth-child(18)').css("display",'none');
        }
        var car_cen_lock = data.carlist[i].car_cen_lock;
        if (car_cen_lock == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carCentralLocking").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carCentralLocking").src = string;
            $('.ul-right li:nth-child(19)').css("display",'none');
        }
        var car_pow_seat = data.carlist[i].car_pow_seat;
        if (car_pow_seat == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carPowerSeats").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carPowerSeats").src = string;
            $('.ul-right li:nth-child(20)').css("display",'none');
        }
        var car_tint_glass = data.carlist[i].car_tint_glass;
        if (car_tint_glass == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carTintedGlasses").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carTintedGlasses").src = string;
            $('.ul-right li:nth-child(21)').css("display",'none');
        }

        var car_ele_glass = data.carlist[i].car_ele_glass;
        if (car_ele_glass == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carElectricGlasses").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carElectricGlasses").src = string;
            $('.ul-right li:nth-child(22)').css("display",'none');
        }

        var car_brake = data.carlist[i].car_brake;
        if (car_brake == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carBrakes").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carBrakes").src = string;
            $('.ul-right li:nth-child(23)').css("display",'none');
        }

        var car_trip_com = data.carlist[i].car_trip_com;
        if (car_trip_com == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carTripComputer").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carTripComputer").src = string;
            $('.ul-right li:nth-child(24)').css("display",'none');
        }

        var car_strt_btn = data.carlist[i].car_strt_btn;
        if (car_strt_btn == "Yes") {
            var string = 'images/right-icon.png';
            document.getElementById("carStartButtonKey").src = string;
        } else {
            var string = 'images/wrong-icon.png';
            document.getElementById("carStartButtonKey").src = string;
            $('.ul-right li:nth-child(25)').css("display",'none');
        }
        var car_comment = data.carlist[i].car_comment;
        document.getElementById('carComment').innerHTML = car_comment;
       // document.getElementById('carComment1').innerHTML = car_comment;

        var u_phone = data.carlist[i].u_phone;
        $("#callPerson").append('<span style="font-weight:bold; width:40%; float:left;"></span><a href="tel:' + u_phone + '"><img src="images/contact-icon.png"></a><a href="sms:' + u_phone + '"><img src="images/sms-icon.png"></a>');
        var u_email = data.carlist[i].u_email;
        var file_img = data.carlist[i].file_img;
        //var image1 = file_img[0];
        //console.log("Size" + file_img.size);
        //alert("Size"+file_img.length);
        for (var j = 0; j < file_img.length; j++) {
            // alert(file_img[j]);
            $("#owl-demo2").append('<div class="item"><img src="' + file_img[j] + '"></div>');
        }
    }
    $("#preloader").css('display','none');
    //cordova.plugin.pDialog.dismiss();
    return true;
}