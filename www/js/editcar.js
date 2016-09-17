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

var selectMsg = "";
var selectCarMakMsg = "";
var insertModelMsg = "";
var insertStyleMsg = "";
var insertFuelMsg = "";
var insertTrasMsg = "";
var insertCarEngMsg = "";
var insertYearMsg = "";
var insertCountryMsg = "";
var insertStateMsg = "";
var insertCityMsg = "";
var selectConditionMsg = "";
var selectRatingMsg = "";
var insertPriceMsg = "";
var insertIntCol = "";
var insertExtCol = "";
var insertKiloMsg = "";
var insertCarDorMsg = "";
var insertCarPlatNoMsg = "";
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
    ptype = "Old / New";
    make = "Make";
    carmodel = "Model";
    filstyle = "Style";
    fuel = "Fuel";
    transmission = "Transmission";
    engine = "Car Engine in CC";
    year = "Year";
    pricetype = "Price Type";
    odometerType = "Odometer";
    price = "Price";
    icolor = "Interior Color";
    ecolor = "Exterior Color";
    kilometar = "Kilometer / Miles"
    carcountry = "Country";
    carstate = "State";
    carcity = "City";
    doors = "Doors";
    cUploadpic = "Upload Pics";
    cCondition = "Condition";
    cRating = "Rating";
    extraInfo = "Extra";
    withPlate = "With Plates";
    cPlate = "Plate Number";
    loan = "Loan";
    cAccept = "Accept Old Car";
    trade = "Trade";
    exchange = "Exchange";
    cComment = "Comment";
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

    selectMsg = "Please select car type.";
    selectCarMakMsg = "Please select car make.";
    insertModelMsg = 'Please select car model.';
    insertStyleMsg = 'Please select car style.';
    insertFuelMsg = 'Please select car fuel.';
    insertTrasMsg = 'Please select car transmission.';
    insertCarEngMsg = 'Please enter car engine(in CC).';
    insertYearMsg = 'Please enter car year.'
    insertPriceMsg = 'Please enter car price.';
    insertIntCol = 'Please enter car interior color.';
    insertExtCol = 'Please enter car exterior color.';
    insertKiloMsg = 'Please enter car meter reading.';
    insertCarDorMsg = 'Please select car doors.';
    insertCarPlatNoMsg = 'Please enter car plate no.';
    insertCountryMsg = "Please select country.";
    insertStateMsg = "Please select state.";
    insertCityMsg = "Please select city.";
    selectConditionMsg = "Please select condition.";
    selectRatingMsg = "Please select rating.";
    insertNameMsg = "Please enter name.";
    insertContactMsg = "Please enter contact number.";
    insertEmailMsg = "Please enter email.";

}

function ready_spa() {
    msg_delete = "¿Estas seguro que quieres borrarlo?";
    basicinfo = "Básica";
    ptype = "Viejo / Nuevo";
    make = "Hacer";
    carmodel = "Modelo";
    filstyle = "Estilo";
    fuel = "Combustible";
    transmission = "Transmisión";
    engine = "Motor de coche de CC";
    year = "Año";
    pricetype = "Tipo Precio";
    odometerType = "Cuentakilómetros";
    price = "Precio";
    icolor = "Color Interior";
    ecolor = "Color Exterior";
    kilometar = "Kilómetro / Millas";
    carcountry = "País";
    carstate = "Estado";
    carcity = "Ciudad";
    doors = "Puertas";
    cCondition = "Condición";
    cRating = "Clasificación";
    extraInfo = "Información Extra";
    withPlate = "Con Las Placas";
    cPlate = "Número de placa";
    loan = "Préstamo";
    cAccept = "Acepta el coche viejo";
    cUploadpic = "Subir fotos";
    trade = "Comercio";
    exchange = "Intercambiar";
    cComment = "Comentario";
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
    selectMsg = "Por favor, seleccione el tipo de coche.";
    selectCarMakMsg = "Por favor, seleccione El coche hace.";
    insertModelMsg = 'Por favor, seleccione el modelo del coche.';
    insertStyleMsg = 'Por favor, seleccione el estilo del coche.';
    insertFuelMsg = 'Por favor, seleccione de combustible del coche.';
    insertTrasMsg = 'Por favor seleccione la transmisión del coche.';
    insertCarEngMsg = 'Por favor, introduzca motor de un coche (en CC).';
    insertYearMsg = 'Por favor, introduzca año del coche.'
    insertPriceMsg = 'Por favor, introduzca el precio del coche.';
    insertIntCol = 'Por favor, introduzca coche color interior.';
    insertExtCol = 'Por favor, introduzca el color exterior del coche.';
    insertKiloMsg = 'Por favor, introduzca la lectura del medidor coche.';
    insertCarDorMsg = 'Por favor, seleccione las puertas del vehículo.';
    insertCarPlatNoMsg = 'Por favor, introduzca la placa del coche no.';
    insertCountryMsg = "Por favor, seleccione el país.";
    insertStateMsg = "Por favor, seleccione el estado.";
    insertCityMsg = "Por favor seleccione la ciudad.";
    selectConditionMsg = "Por favor, seleccione condición.";
    selectRatingMsg = "Por favor, seleccione calificación.";
    insertNameMsg = "Por favor, introduzca su nombre.";
    insertContactMsg = "Por favor, introduzca el número de contacto.";
    insertEmailMsg = "Por favor, introduzca correo electrónico.";
}
display();

function display() {
    $(document).ready(function () {
        document.getElementById('basicinfo').innerHTML = basicinfo;
        //document.getElementById('ptype').innerHTML = ptype;
        //document.getElementById('make').innerHTML = make;
        //document.getElementById('carmodel').innerHTML = carmodel;
        //document.getElementById('filstyle').innerHTML = filstyle;
        //document.getElementById('fuel').innerHTML = fuel;
        //document.getElementById('transmission').innerHTML = transmission;
        //document.getElementById('engine').innerHTML = engine;
        //document.getElementById('year').innerHTML = year;
        document.getElementById('pricetype').innerHTML = pricetype;
        document.getElementById('odometerType').innerHTML = odometerType;
        //document.getElementById('price').innerHTML = price;
        //document.getElementById('icolor').innerHTML = icolor;
        //document.getElementById('ecolor').innerHTML = ecolor;
        //document.getElementById('kilometar').innerHTML = kilometar;
        //document.getElementById('carcountry').innerHTML = carcountry;
        //document.getElementById('carstate').innerHTML = carstate;
        //document.getElementById('carcity').innerHTML = carcity;
        //document.getElementById('doors').innerHTML = doors;
        //document.getElementById('cCondition').innerHTML = cCondition;
        //document.getElementById('cRating').innerHTML = cRating;
        document.getElementById('cUploadpic').innerHTML = cUploadpic;
        document.getElementById('extraInfo').innerHTML = extraInfo;
        document.getElementById('withPlate').innerHTML = withPlate;
        //document.getElementById('cPlate').innerHTML = cPlate;
        document.getElementById('loan').innerHTML = loan;
        //document.getElementById('cAccept').innerHTML = cAccept;
        //document.getElementById('trade').innerHTML = trade;
        document.getElementById('exchange').innerHTML = exchange;
        //document.getElementById('cComment').innerHTML = cComment;
        //document.getElementById('cPublishBy').innerHTML = cPublishBy;
        //document.getElementById('cContact').innerHTML = cContact;
        //document.getElementById('cEmail').innerHTML = cEmail;
        document.getElementById('cSubmit').innerHTML = cSubmit;
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

$(document).ready(
    function () {
        $("#car_engine").attr("placeholder", engine);
        $("#car_year").attr("placeholder", year);
        $("#car_price").attr("placeholder", price);
        $("#car_int_color").attr("placeholder", icolor);
        $("#car_ext_color").attr("placeholder", ecolor);
        $("#car_km").attr("placeholder", kilometar);
        $("#car_plate").attr("placeholder", cPlate);
        $("#car_comment").attr("placeholder", cComment);
        $("#u_name").attr("placeholder", cPublishBy);
        $("#u_phone").attr("placeholder", cContact);
        //$("#u_email").attr("placeholder", cEmail);
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
var editcar_id = "";

$(document).ready(
    function () {
        if (gdc_username == null) {
            document.getElementById('profilename').innerHTML = "Profile";
        } else {
            document.getElementById('profilename').innerHTML = gdc_username;
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
function selectProType(str) {

    var url = BASE_URL + APP_API + "?proType=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divProType").html(result);
        }
    });
}

function selectMakeType(car_make_id) {
    var url = BASE_URL + APP_API + "?car_make_id=" + car_make_id;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divMakeType").html(result);
        }
    });
}

function selectModelType(car_make_id, car_model_id) {
    var url = BASE_URL + APP_API + "?car_make_name=" + car_make_id + "&car_model_name=" + car_model_id;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divModel").html(result);
        }
    });
}
function selectStyleType(car_style_id) {
    var url = BASE_URL + APP_API + "?car_style_name=" + car_style_id;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divStyle").html(result);
        }
    });
}

function selectFuelType(car_fuel) {
    var url = BASE_URL + APP_API + "?car_fuel=" + car_fuel;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divFuel").html(result);
        }
    });
}

function selectTransmissionType(car_transmission) {
    var url = BASE_URL + APP_API + "?car_transmission=" + car_transmission;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divTransmission").html(result);
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
    $("#preloader").css('display','none');
    //cordova.plugin.pDialog.dismiss();
}

function selectDoors(str) {
    var url = BASE_URL + APP_API + "?car_doors=" + str;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divDoorType").html(result);
        }
    });
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
function selectPlateStatus(str) {
    var inputs = document.getElementById('car_plate');
    if (str == "Yes") {
        document.getElementById("car_with_plate").checked = true;
        inputs.disabled = false;
    } else {
        document.getElementById("car_with_plate").checked = false;
        inputs.disabled = true;
        document.getElementById("car_with_plate").value = "";
    }
}

function selectPlateStatusNew() {
    var inputs = document.getElementById('car_plate');
    if (document.getElementById("car_with_plate").checked) {
        inputs.disabled = false;
        $("#car_plate").attr("placeholder", cPlate);
        $('#car_plate').focus();
    } else {
        var fn = $('#car_plate');
        fn.val('');
        inputs.disabled = true;
        $("#car_plate").attr("placeholder", cPlate);
    }
}

function selectPlateStatusFilter() {
    var plate_status = document.getElementById("car_with_plate").checked;

    if (plate_status == true) {
        document.getElementById("car_with_plate").checked = true;
        document.getElementById('car_plate').disabled = false;
    }
    else {
        document.getElementById("car_with_plate").checked = false;
        document.getElementById('car_plate').disabled = true;
        document.getElementById("car_plate").value = "";
    }
}
//Get Car Detail.
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

function getCarDetail(cid) {
    //{"method":"SelectCarDetail", "car_id":"3"}
    //alert("Cid: " + cid);
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
        data: '{"method":"EditCarDetail", "car_id":"' + cid + '", "regi_id":"' + gdc_uid + '"}',
        success: function (data) {
            carDetailData(data);
            return true;
        },
        error: function (result) {
            navigator.notification.alert('Server Error',null,'Error','Ok');
            return false;
        }
    });
}

var carArray = new Array();
function carDetailData(data) {
    for (var i = 0; i < data.carlist.length; i++) {
        editcar_id = data.carlist[i].car_id;
        var car_type = data.carlist[i].car_type;
        selectProType(car_type);
        var car_make_id = data.carlist[i].car_make_name;
        selectMakeType(car_make_id);
        var car_model_id = data.carlist[i].car_model_name;
        selectModelType(car_make_id, car_model_id);
        var car_style_id = data.carlist[i].car_style_name;
        //alert(car_style_id);
        selectStyleType(car_style_id);
        var car_fuel = data.carlist[i].car_fuel;
        selectFuelType(car_fuel);
        var car_transmission = data.carlist[i].car_transmission;
        selectTransmissionType(car_transmission);
        var car_engine = data.carlist[i].car_engine;
        document.getElementById("car_engine").value = car_engine;
        var car_year = data.carlist[i].car_year;
        document.getElementById("car_year").value = car_year;
        var car_price_type = data.carlist[i].car_price_type;
        if (car_price_type == "Colones") {
            document.getElementById("car_price_type").checked = true;
        } else {
            document.getElementById("car_price_type").checked = false;
        }

        var car_odometer = data.carlist[i].car_odometer;
        //alert(car_odometer);
        if (car_odometer == "Km") {
            document.getElementById("car_odometer").checked = true;
        } else {
            document.getElementById("car_odometer").checked = false;
        }

        var car_price = data.carlist[i].car_price;
        document.getElementById("car_price").value = car_price;
        var car_int_color = data.carlist[i].car_int_color;
        document.getElementById("car_int_color").value = car_int_color;
        var car_ext_color = data.carlist[i].car_ext_color;
        document.getElementById("car_ext_color").value = car_ext_color;
        var car_km = data.carlist[i].car_km;
        document.getElementById("car_km").value = car_km;
        var country_name = data.carlist[i].country_name;
        selectCountry12(country_name);
        var state_name = data.carlist[i].state_name;
        selectState12(country_name, state_name);
        var city_name = data.carlist[i].city_name;
        selectCity12(state_name, city_name);
        var car_doors = data.carlist[i].car_doors;
        selectDoors(car_doors);
        var car_condition = data.carlist[i].car_condition;
        selectCondition(car_condition);
        var car_rating = data.carlist[i].car_rating;
        selectRating(car_rating);
        var car_with_plate = data.carlist[i].car_with_plate;
        selectPlateStatus(car_with_plate);
        var car_plate = data.carlist[i].car_plate;
        var inputs = document.getElementById('car_plate');
        if (car_with_plate == "Yes") {
            inputs.disabled = false;
            document.getElementById("car_plate").value = car_plate;
        } else {
            inputs.disabled = true;
            document.getElementById("car_plate").value = car_plate;
        }
        var car_loan = data.carlist[i].car_loan;
        if (car_loan == "Yes") {
            document.getElementById("car_loan").checked = true;
        } else {
            document.getElementById("car_loan").checked = false;
        }

        var car_acpt_old = data.carlist[i].car_acpt_old;
        //if (car_acpt_old == "Yes") {
        //    document.getElementById("car_acpt_old").checked = true;
        //} else {
        //    document.getElementById("car_acpt_old").checked = false;
        //}

        var car_exchange = data.carlist[i].car_exchange;
        if (car_exchange == "Yes") {
            document.getElementById("car_exchange").checked = true;
        } else {
            document.getElementById("car_exchange").checked = false;
        }

        var car_pow_lock = data.carlist[i].car_pow_lock;
        if (car_pow_lock == "Yes") {
            document.getElementById("car_pow_lock").checked = true;
        } else {
            document.getElementById("car_pow_lock").checked = false;
        }

        var car_tint_win = data.carlist[i].car_tint_win;
        if (car_tint_win == "Yes") {
            document.getElementById("car_tint_win").checked = true;
        } else {
            document.getElementById("car_tint_win").checked = false;
        }

        var car_pow_win = data.carlist[i].car_pow_win;
        if (car_pow_win == "Yes") {
            document.getElementById("car_pow_win").checked = true;
        } else {
            document.getElementById("car_pow_win").checked = false;
        }

        var car_alarm = data.carlist[i].car_alarm;
        if (car_alarm == "Yes") {
            document.getElementById("car_alarm").checked = true;
        } else {
            document.getElementById("car_alarm").checked = false;
        }

        var car_ac = data.carlist[i].car_ac;
        if (car_ac == "Yes") {
            document.getElementById("car_ac").checked = true;
        } else {
            document.getElementById("car_ac").checked = false;
        }

        var car_ac_climate = data.carlist[i].car_ac_climate;
        if (car_ac_climate == "Yes") {
            document.getElementById("car_ac_climate").checked = true;
        } else {
            document.getElementById("car_ac_climate").checked = false;
        }

        var car_sunroof = data.carlist[i].car_sunroof;
        if (car_sunroof == "Yes") {
            document.getElementById("car_sunroof").checked = true;
        } else {
            document.getElementById("car_sunroof").checked = false;
        }

        var car_turbo = data.carlist[i].car_turbo;
        if (car_turbo == "Yes") {
            document.getElementById("car_turbo").checked = true;
        } else {
            document.getElementById("car_turbo").checked = false;
        }

        var car_halo = data.carlist[i].car_halo;
        if (car_halo == "Yes") {
            document.getElementById("car_halo").checked = true;
        } else {
            document.getElementById("car_halo").checked = false;
        }

        var car_dvd = data.carlist[i].car_dvd;
        if (car_dvd == "Yes") {
            document.getElementById("car_dvd").checked = true;
        } else {
            document.getElementById("car_dvd").checked = false;
        }

        var car_rtv = data.carlist[i].car_rtv;
        if (car_rtv == "Yes") {
            document.getElementById("car_rtv").checked = true;
        } else {
            document.getElementById("car_rtv").checked = false;
        }

        var car_cont_desce = data.carlist[i].car_cont_desce;
        if (car_cont_desce == "Yes") {
            document.getElementById("car_cont_desce").checked = true;
        } else {
            document.getElementById("car_cont_desce").checked = false;
        }

        var car_rear_cam = data.carlist[i].car_rear_cam;
        if (car_rear_cam == "Yes") {
            document.getElementById("car_rear_cam").checked = true;
        } else {
            document.getElementById("car_rear_cam").checked = false;
        }

        var car_front_sen = data.carlist[i].car_front_sen;
        if (car_front_sen == "Yes") {
            document.getElementById("car_front_sen").checked = true;
        } else {
            document.getElementById("car_front_sen").checked = false;
        }

        var car_vol_multi = data.carlist[i].car_vol_multi;
        if (car_vol_multi == "Yes") {
            document.getElementById("car_vol_multi").checked = true;
        } else {
            document.getElementById("car_vol_multi").checked = false;
        }

        var car_mem_seat = data.carlist[i].car_mem_seat;
        if (car_mem_seat == "Yes") {
            document.getElementById("car_mem_seat").checked = true;
        } else {
            document.getElementById("car_mem_seat").checked = false;
        }

        var car_xenon = data.carlist[i].car_xenon;
        if (car_xenon == "Yes") {
            document.getElementById("car_xenon").checked = true;
        } else {
            document.getElementById("car_xenon").checked = false;
        }

        var car_rain_sen = data.carlist[i].car_rain_sen;
        if (car_rain_sen == "Yes") {
            document.getElementById("car_rain_sen").checked = true;
        } else {
            document.getElementById("car_rain_sen").checked = false;
        }

        var car_tire_pressure = data.carlist[i].car_tire_pressure;
        if (car_tire_pressure == "Yes") {
            document.getElementById("car_tire_pressure").checked = true;
        } else {
            document.getElementById("car_tire_pressure").checked = false;
        }

        var car_ad_ster = data.carlist[i].car_ad_ster;
        if (car_ad_ster == "Yes") {
            document.getElementById("car_ad_ster").checked = true;
        } else {
            document.getElementById("car_ad_ster").checked = false;
        }

        var car_usb = data.carlist[i].car_usb;
        if (car_usb == "Yes") {
            document.getElementById("car_usb").checked = true;
        } else {
            document.getElementById("car_usb").checked = false;
        }

        var car_hydo_ster = data.carlist[i].car_hydo_ster;
        if (car_hydo_ster == "Yes") {
            document.getElementById("car_hydo_ster").checked = true;
        } else {
            document.getElementById("car_hydo_ster").checked = false;
        }

        var car_pow_seat = data.carlist[i].car_pow_seat;
        if (car_pow_seat == "Yes") {
            document.getElementById("car_pow_seat").checked = true;
        } else {
            document.getElementById("car_pow_seat").checked = false;
        }

        var car_ele_glass = data.carlist[i].car_ele_glass;
        if (car_ele_glass == "Yes") {
            document.getElementById("car_ele_glass").checked = true;
        } else {
            document.getElementById("car_ele_glass").checked = false;
        }

        var car_trip_com = data.carlist[i].car_trip_com;
        if (car_trip_com == "Yes") {
            document.getElementById("car_trip_com").checked = true;
        } else {
            document.getElementById("car_trip_com").checked = false;
        }

        var car_ele_seat = data.carlist[i].car_ele_seat;
        if (car_ele_seat == "Yes") {
            document.getElementById("car_ele_seat").checked = true;
        } else {
            document.getElementById("car_ele_seat").checked = false;
        }

        var car_air_bag = data.carlist[i].car_air_bag;
        if (car_air_bag == "Yes") {
            document.getElementById("car_air_bag").checked = true;
        } else {
            document.getElementById("car_air_bag").checked = false;
        }

        var car_ele_mir = data.carlist[i].car_ele_mir;
        if (car_ele_mir == "Yes") {
            document.getElementById("car_ele_mir").checked = true;
        } else {
            document.getElementById("car_ele_mir").checked = false;
        }

        var car_abs = data.carlist[i].car_abs;
        if (car_abs == "Yes") {
            document.getElementById("car_abs").checked = true;
        } else {
            document.getElementById("car_abs").checked = false;
        }

        var car_win_difo = data.carlist[i].car_win_difo;
        if (car_win_difo == "Yes") {
            document.getElementById("car_win_difo").checked = true;
        } else {
            document.getElementById("car_win_difo").checked = false;
        }

        var car_rims = data.carlist[i].car_rims;
        if (car_rims == "Yes") {
            document.getElementById("car_rims").checked = true;
        } else {
            document.getElementById("car_rims").checked = false;
        }

        var car_lea_seat = data.carlist[i].car_lea_seat;
        if (car_lea_seat == "Yes") {
            document.getElementById("car_lea_seat").checked = true;
        } else {
            document.getElementById("car_lea_seat").checked = false;
        }


        var car_cas = data.carlist[i].car_cas;
        if (car_cas == "Yes") {
            document.getElementById("car_cas").checked = true;
        } else {
            document.getElementById("car_cas").checked = false;
        }

        var car_cru_con = data.carlist[i].car_cru_con;
        if (car_cru_con == "Yes") {
            document.getElementById("car_cru_con").checked = true;
        } else {
            document.getElementById("car_cru_con").checked = false;
        }

        var car_cont_elect = data.carlist[i].car_cont_elect;
        if (car_cont_elect == "Yes") {
            document.getElementById("car_cont_elect").checked = true;
        } else {
            document.getElementById("car_cont_elect").checked = false;
        }

        var car_triptonic = data.carlist[i].car_triptonic;
        if (car_triptonic == "Yes") {
            document.getElementById("car_triptonic").checked = true;
        } else {
            document.getElementById("car_triptonic").checked = false;
        }

        var car_rear_sen = data.carlist[i].car_rear_sen;
        if (car_rear_sen == "Yes") {
            document.getElementById("car_rear_sen").checked = true;
        } else {
            document.getElementById("car_rear_sen").checked = false;
        }

        var car_radio_string = data.carlist[i].car_radio_string;
        if (car_radio_string == "Yes") {
            document.getElementById("car_radio_string").checked = true;
        } else {
            document.getElementById("car_radio_string").checked = false;
        }

        var car_auto_fold_mir = data.carlist[i].car_auto_fold_mir;
        if (car_auto_fold_mir == "Yes") {
            document.getElementById("car_auto_fold_mir").checked = true;
        } else {
            document.getElementById("car_auto_fold_mir").checked = false;
        }

        var car_xenon_led = data.carlist[i].car_xenon_led;
        if (car_xenon_led == "Yes") {
            document.getElementById("car_xenon_led").checked = true;
        } else {
            document.getElementById("car_xenon_led").checked = false;
        }


        var car_smt_keyof = data.carlist[i].car_smt_keyof;
        if (car_smt_keyof == "Yes") {
            document.getElementById("car_smt_keyof").checked = true;
        } else {
            document.getElementById("car_smt_keyof").checked = false;
        }

        var car_cru_cont = data.carlist[i].car_cru_cont;
        if (car_cru_cont == "Yes") {
            document.getElementById("car_cru_cont").checked = true;
        } else {
            document.getElementById("car_cru_cont").checked = false;
        }

        var car_blue = data.carlist[i].car_blue;
        if (car_blue == "Yes") {
            document.getElementById("car_blue").checked = true;
        } else {
            document.getElementById("car_blue").checked = false;
        }

        var car_trade = data.carlist[i].car_trade;
        //if (car_trade == "Yes") {
        //    document.getElementById("car_trade").checked = true;
        //} else {
        //    document.getElementById("car_trade").checked = false;
        //}

        var car_cen_lock = data.carlist[i].car_cen_lock;
        if (car_cen_lock == "Yes") {
            document.getElementById("car_cen_lock").checked = true;
        } else {
            document.getElementById("car_cen_lock").checked = false;
        }

        var car_tint_glass = data.carlist[i].car_tint_glass;
        if (car_tint_glass == "Yes") {
            document.getElementById("car_tint_glass").checked = true;
        } else {
            document.getElementById("car_tint_glass").checked = false;
        }

        var car_brake = data.carlist[i].car_brake;
        if (car_brake == "Yes") {
            document.getElementById("car_brake").checked = true;
        } else {
            document.getElementById("car_brake").checked = false;
        }

        var car_strt_btn = data.carlist[i].car_strt_btn;
        if (car_strt_btn == "Yes") {
            document.getElementById("car_strt_btn").checked = true;
        } else {
            document.getElementById("car_strt_btn").checked = false;
        }

        var car_comment = data.carlist[i].car_comment;
        document.getElementById("car_comment").value = car_comment;
        var name = data.carlist[i].name;
        document.getElementById("u_name").value = name;
        var u_phone = data.carlist[i].u_phone;
        document.getElementById("u_phone").value = u_phone;
        var u_email = data.carlist[i].u_email;
        //document.getElementById("u_email").value = u_email;
        var file_img = data.carlist[i].file_img;
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
        console.log("Image Index : " + index);
        dataURL = dataURL.replace("data:image/png;base64,", "");
        carArray[index] = dataURL;
        //alert(index + "- Array Size -" + carArray.length);
        canvas = null;
    };
    img.src = url;
}

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
    navigator.notification.alert('Failed because: ' + message,null,'Error','Ok');

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

function selectModel12(str) {
    model = str;
    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    var url = BASE_URL + APP_API + "?model_id=" + model;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divModel").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}

function selectStyle(str) {
    style = str;
    var url = BASE_URL + APP_API + "?style_id=" + style;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divStyle").html(result);
        }
    });
}

function setPlaceHolderEngine() {
    $("#car_engine").attr("placeholder", engine);
}
function setPlaceHolderYear() {
    $("#car_year").attr("placeholder", year);
}
function setPlaceHolderPrice() {
    $("#car_price").attr("placeholder", price);
}
function setPlaceHolderIntColor() {
    $("#car_int_color").attr("placeholder", icolor);
}
function setPlaceHolderExtColor() {
    $("#car_ext_color").attr("placeholder", ecolor);
}
function setPlaceHolderKilo() {
    $("#car_km").attr("placeholder", kilometar);
}
function setPlaceHolderPlate() {
    $("#car_plate").attr("placeholder", cPlate);
}
function setPlaceHolderComment() {
    $("#car_comment").attr("placeholder", cComment);
}
function setPlaceHolderPublishBy() {
    $("#u_name").attr("placeholder", cPublishBy);
}
function setPlaceHolderContact() {
    $("#u_phone").attr("placeholder", cContact);
}

function selectClear(str) {
    document.getElementById(str).innerHTML = "";
}

function updateCarDetail() {

    var regi_id = gdc_uid;
    var car_type = document.getElementById('proType').value;
    if ($.trim(car_type) == "") {
        //alert(selectMsg);
        $('#proType').focus();
        document.getElementById('errfn').innerHTML = selectMsg;
        return false;
    }
    var car_make = document.getElementById('car_make').value;
    if ($.trim(car_make) == "") {
        //alert(selectCarMakMsg);
        $('#car_make').focus();
        document.getElementById('errfn1').innerHTML = selectCarMakMsg;
        return false;
    }
    var car_model = document.getElementById('selectModel').value;
    if ($.trim(car_model) == "") {
        //alert(insertModelMsg);
        $('#selectModel').focus();
        document.getElementById('errfnModel').innerHTML = insertModelMsg;
        return false;
    }
    var car_style = document.getElementById('selectStyle').value;
    if ($.trim(car_style) == "") {
        //alert(insertStyleMsg);
        $('#selectStyle').focus();
        document.getElementById('errfnStyle').innerHTML = insertStyleMsg;
        return false;
    }
    var car_fuel = document.getElementById('car_fuel').value;
    if ($.trim(car_fuel) == "") {
        //alert(insertFuelMsg);
        $('#car_fuel').focus();
        document.getElementById('errfnFuel').innerHTML = insertFuelMsg;
        return false;
    }
    var car_transmission = document.getElementById('car_transmission').value;
    if ($.trim(car_transmission) == "") {
        //alert(insertTrasMsg);
        $('#car_transmission').focus();
        document.getElementById('errfnTrans').innerHTML = insertTrasMsg;
        return false;
    }
    var car_engine = document.getElementById('car_engine').value;
    if ($.trim(car_engine).length == 0) {
        //alert(insertCarEngMsg);
        $('#car_engine').focus();
        document.getElementById('errfn16').innerHTML = insertCarEngMsg;
        return false;
    }
    var car_year = document.getElementById('car_year').value;
    if ($.trim(car_year).length == 0) {
        //alert(insertYearMsg);
        $('#car_year').focus();
        document.getElementById('errfn17').innerHTML = insertYearMsg;
        return false;
    }

    if (document.getElementById("car_price_type").checked) {
        var car_price_type = "Colones";
    } else {
        var car_price_type = "Dollares";
    }

    if (document.getElementById("car_odometer").checked) {
        var car_odometer = "Km";
    } else {
        var car_odometer = "Mile";
    }
    //alert(car_odometer);
    var car_price = document.getElementById('car_price').value;
    if ($.trim(car_price).length == 0) {
        //alert(insertPriceMsg);
        $('#car_price').focus();
        document.getElementById('errfn88').innerHTML = insertPriceMsg;
        return false;
    }
    var car_int_color = document.getElementById('car_int_color').value;
    if ($.trim(car_int_color).length == 0) {
        //alert(insertIntCol);
        $('#car_int_color').focus();
        document.getElementById('errfn9').innerHTML = insertIntCol;
        return false;
    }
    var car_ext_color = document.getElementById('car_ext_color').value;
    if ($.trim(car_ext_color).length == 0) {
        //alert(insertExtCol);
        $('#car_ext_color').focus();
        document.getElementById('errfn10').innerHTML = insertExtCol;
        return false;
    }
    var car_km = document.getElementById('car_km').value;
    if ($.trim(car_km).length == 0) {
        //alert(insertKiloMsg);
        $('#car_km').focus();
        document.getElementById('errfn11').innerHTML = insertKiloMsg;
        return false;
    }
    var car_country = document.getElementById('selectCountry').value;
    if ($.trim(car_country) == "") {
        //alert(insertCountryMsg);
        $('#selectCountry').focus();
        document.getElementById('errfn3').innerHTML = insertCountryMsg;
        return false;
    }
    var car_state = document.getElementById('selectState').value;
    if ($.trim(car_state) == "") {
       // alert(insertStateMsg);
        $('#selectState').focus();
        document.getElementById('errfn4').innerHTML = insertStateMsg;
        return false;
    }
    var car_city = document.getElementById('selectCity').value;
    if ($.trim(car_city) == "") {
        //alert(insertCityMsg);
        $('#selectCity').focus();
        document.getElementById('errfn5').innerHTML = insertCityMsg;
        return false;
    }
    var car_doors = document.getElementById('car_doors').value;
    if ($.trim(car_doors) == "") {
        //alert(insertCarDorMsg);
        $('#car_doors').focus();
        document.getElementById('errfn15').innerHTML = insertCarDorMsg;
        return false;
    }

    var car_rating = document.getElementById('real_rating').value;
    if ($.trim(car_rating) == "") {
        //alert(selectRatingMsg);
        $('#car_rating').focus();
        document.getElementById('errfn6').innerHTML = selectRatingMsg;
        return false;
    }

    var car_condition = document.getElementById('real_condition').value;
    if ($.trim(car_condition) == "") {
        //alert(selectConditionMsg);
        $('#car_condition').focus();
        document.getElementById('errfn7').innerHTML = selectConditionMsg;
        return false;
    }

    if (document.getElementById("car_with_plate").checked) {
        var car_with_plate = "Yes";
    } else {
        var car_with_plate = "No";
    }

    var car_plate = document.getElementById('car_plate').value;
    if ($.trim(car_with_plate) == "Yes" && $.trim(car_plate).length == 0) {
        //alert(insertCarPlatNoMsg);
        $('#car_plate').focus();
        document.getElementById('errfnCarPlate').innerHTML = insertCarPlatNoMsg;
        return false;
    }

    if (document.getElementById("car_loan").checked) {
        var car_loan = "Yes";
    } else {
        var car_loan = "No";
    }

    var car_acpt_old = "";
    //if (document.getElementById("car_acpt_old").checked) {
    //    var car_acpt_old = "Yes";
    //} else {
    //    var car_acpt_old = "No";
    //}

    //var car_exchange = document.getElementById('car_exchange').value;
    if (document.getElementById("car_exchange").checked) {
        var car_exchange = "Yes";
    } else {
        var car_exchange = "No";
    }
    //var car_pow_lock = document.getElementById('car_pow_lock').value;
    if (document.getElementById("car_pow_lock").checked) {
        var car_pow_lock = "Yes";
    } else {
        var car_pow_lock = "No";
    }
    //var car_ele_seat = document.getElementById('car_ele_seat').value;
    if (document.getElementById("car_ele_seat").checked) {
        var car_ele_seat = "Yes";
    } else {
        var car_ele_seat = "No";
    }
    //var car_tint_win = document.getElementById('car_tint_win').value;
    if (document.getElementById("car_tint_win").checked) {
        var car_tint_win = "Yes";
    } else {
        var car_tint_win = "No";
    }
    //var car_air_bag = document.getElementById('car_air_bag').value;
    if (document.getElementById("car_air_bag").checked) {
        var car_air_bag = "Yes";
    } else {
        var car_air_bag = "No";
    }
    //var car_pow_win = document.getElementById('car_pow_win').value;
    if (document.getElementById("car_pow_win").checked) {
        var car_pow_win = "Yes";
    } else {
        var car_pow_win = "No";
    }
    //var car_ele_mir = document.getElementById('car_ele_mir').value;
    if (document.getElementById("car_ele_mir").checked) {
        var car_ele_mir = "Yes";
    } else {
        var car_ele_mir = "No";
    }
    //var car_alarm = document.getElementById('car_alarm').value;
    if (document.getElementById("car_alarm").checked) {
        var car_alarm = "Yes";
    } else {
        var car_alarm = "No";
    }
    //var car_abs = document.getElementById('car_abs').value;
    if (document.getElementById("car_abs").checked) {
        var car_abs = "Yes";
    } else {
        var car_abs = "No";
    }
    //var car_ac = document.getElementById('car_ac').value;
    if (document.getElementById("car_ac").checked) {
        var car_ac = "Yes";
    } else {
        var car_ac = "No";
    }
    //var car_win_difo = document.getElementById('car_win_difo').value;
    if (document.getElementById("car_win_difo").checked) {
        var car_win_difo = "Yes";
    } else {
        var car_win_difo = "No";
    }
    //var car_sunroof = document.getElementById('car_sunroof').value;
    if (document.getElementById("car_sunroof").checked) {
        var car_sunroof = "Yes";
    } else {
        var car_sunroof = "No";
    }
    //var car_rims = document.getElementById('car_rims').value;
    if (document.getElementById("car_rims").checked) {
        var car_rims = "Yes";
    } else {
        var car_rims = "No";
    }
    //var car_turbo = document.getElementById('car_turbo').value;
    if (document.getElementById("car_turbo").checked) {
        var car_turbo = "Yes";
    } else {
        var car_turbo = "No";
    }
    //var car_lea_seat = document.getElementById('car_lea_seat').value;
    if (document.getElementById("car_lea_seat").checked) {
        var car_lea_seat = "Yes";
    } else {
        var car_lea_seat = "No";
    }
    //var car_halo = document.getElementById('car_halo').value;
    if (document.getElementById("car_halo").checked) {
        var car_halo = "Yes";
    } else {
        var car_halo = "No";
    }

    //var car_cas = document.getElementById('car_cas').value;
    if (document.getElementById("car_cas").checked) {
        var car_cas = "Yes";
    } else {
        var car_cas = "No";
    }

    //var car_dvd = document.getElementById('car_dvd').value;
    if (document.getElementById("car_dvd").checked) {
        var car_dvd = "Yes";
    } else {
        var car_dvd = "No";
    }

    //var car_cru_con = document.getElementById('car_cru_con').value;
    if (document.getElementById("car_cru_con").checked) {
        var car_cru_con = "Yes";
    } else {
        var car_cru_con = "No";
    }

    //var car_usb = document.getElementById('car_usb').value;
    if (document.getElementById("car_usb").checked) {
        var car_usb = "Yes";
    } else {
        var car_usb = "No";
    }

    //var car_rtv = document.getElementById('car_rtv').value;
    if (document.getElementById("car_rtv").checked) {
        var car_rtv = "Yes";
    } else {
        var car_rtv = "No";
    }

    //var car_cont_elect = document.getElementById('car_cont_elect').value;
    if (document.getElementById("car_cont_elect").checked) {
        var car_cont_elect = "Yes";
    } else {
        var car_cont_elect = "No";
    }

    //var car_cont_desce = document.getElementById('car_cont_desce').value;
    if (document.getElementById("car_cont_desce").checked) {
        var car_cont_desce = "Yes";
    } else {
        var car_cont_desce = "No";
    }

    //var car_triptonic = document.getElementById('car_triptonic').value;
    if (document.getElementById("car_triptonic").checked) {
        var car_triptonic = "Yes";
    } else {
        var car_triptonic = "No";
    }

    //var car_rear_cam = document.getElementById('car_rear_cam').value;
    if (document.getElementById("car_rear_cam").checked) {
        var car_rear_cam = "Yes";
    } else {
        var car_rear_cam = "No";
    }

    //var car_rear_sen = document.getElementById('car_rear_sen').value;
    if (document.getElementById("car_rear_sen").checked) {
        var car_rear_sen = "Yes";
    } else {
        var car_rear_sen = "No";
    }

    //var car_front_sen = document.getElementById('car_front_sen').value;
    if (document.getElementById("car_front_sen").checked) {
        var car_front_sen = "Yes";
    } else {
        var car_front_sen = "No";
    }

    //var car_radio_string = document.getElementById('car_radio_string').value;
    if (document.getElementById("car_radio_string").checked) {
        var car_radio_string = "Yes";
    } else {
        var car_radio_string = "No";
    }

    //var car_vol_multi = document.getElementById('car_vol_multi').value;
    if (document.getElementById("car_vol_multi").checked) {
        var car_vol_multi = "Yes";
    } else {
        var car_vol_multi = "No";
    }

    //var car_ac_climate = document.getElementById('car_ac_climate').value;
    if (document.getElementById("car_ac_climate").checked) {
        var car_ac_climate = "Yes";
    } else {
        var car_ac_climate = "No";
    }

    //var car_mem_seat = document.getElementById('car_mem_seat').value;
    if (document.getElementById("car_mem_seat").checked) {
        var car_mem_seat = "Yes";
    } else {
        var car_mem_seat = "No";
    }

    //var car_auto_fold_mir = document.getElementById('car_auto_fold_mir').value;
    if (document.getElementById("car_auto_fold_mir").checked) {
        var car_auto_fold_mir = "Yes";
    } else {
        var car_auto_fold_mir = "No";
    }

    //var car_xenon = document.getElementById('car_xenon').value;
    if (document.getElementById("car_xenon").checked) {
        var car_xenon = "Yes";
    } else {
        var car_xenon = "No";
    }

    //var car_xenon_led = document.getElementById('car_xenon_led').value;
    if (document.getElementById("car_xenon_led").checked) {
        var car_xenon_led = "Yes";
    } else {
        var car_xenon_led = "No";
    }

    //var car_rain_sen = document.getElementById('car_rain_sen').value;
    if (document.getElementById("car_rain_sen").checked) {
        var car_rain_sen = "Yes";
    } else {
        var car_rain_sen = "No";
    }

    //var car_smt_keyof = document.getElementById('car_smt_keyof').value;
    if (document.getElementById("car_smt_keyof").checked) {
        var car_smt_keyof = "Yes";
    } else {
        var car_smt_keyof = "No";
    }

    //var car_tire_pressure = document.getElementById('car_tire_pressure').value;
    if (document.getElementById("car_tire_pressure").checked) {
        var car_tire_pressure = "Yes";
    } else {
        var car_tire_pressure = "No";
    }

    //var car_cru_cont = document.getElementById('car_cru_cont').value;
    if (document.getElementById("car_cru_cont").checked) {
        var car_cru_cont = "Yes";
    } else {
        var car_cru_cont = "No";
    }

    //var car_ad_ster = document.getElementById('car_ad_ster').value;
    if (document.getElementById("car_ad_ster").checked) {
        var car_ad_ster = "Yes";
    } else {
        var car_ad_ster = "No";
    }

    //var car_blue = document.getElementById('car_blue').value;
    if (document.getElementById("car_blue").checked) {
        var car_blue = "Yes";
    } else {
        var car_blue = "No";
    }

    //var car_hydo_ster = document.getElementById('car_hydo_ster').value;
    if (document.getElementById("car_hydo_ster").checked) {
        var car_hydo_ster = "Yes";
    } else {
        var car_hydo_ster = "No";
    }

    //var car_cen_lock = document.getElementById('car_cen_lock').value;
    if (document.getElementById("car_cen_lock").checked) {
        var car_cen_lock = "Yes";
    } else {
        var car_cen_lock = "No";
    }
    //var car_pow_seat = document.getElementById('car_pow_seat').value;
    if (document.getElementById("car_pow_seat").checked) {
        var car_pow_seat = "Yes";
    } else {
        var car_pow_seat = "No";
    }

    //var car_tint_glass = document.getElementById('car_tint_glass').value;
    if (document.getElementById("car_tint_glass").checked) {
        var car_tint_glass = "Yes";
    } else {
        var car_tint_glass = "No";
    }

    //var car_ele_glass = document.getElementById('car_ele_glass').value;
    if (document.getElementById("car_ele_glass").checked) {
        var car_ele_glass = "Yes";
    } else {
        var car_ele_glass = "No";
    }

    //var car_brake = document.getElementById('car_brake').value;
    if (document.getElementById("car_brake").checked) {
        var car_brake = "Yes";
    } else {
        var car_brake = "No";
    }

    //var car_trip_com = document.getElementById('car_trip_com').value;
    if (document.getElementById("car_trip_com").checked) {
        var car_trip_com = "Yes";
    } else {
        var car_trip_com = "No";
    }

    //var car_strt_btn = document.getElementById('car_strt_btn').value;
    if (document.getElementById("car_strt_btn").checked) {
        var car_strt_btn = "Yes";
    } else {
        var car_strt_btn = "No";
    }

    var car_trade = "";
    //if (document.getElementById("car_trade").checked) {
    //    var car_trade = "Yes";
    //} else {
    //    var car_trade = "No";
    //}

    var car_comment = document.getElementById('car_comment').value;
    var name = document.getElementById('u_name').value;
    if ($.trim(name).length == 0) {
        //alert(insertNameMsg);
        $('#u_name').focus();
        document.getElementById('errfn19').innerHTML = insertNameMsg;
        return false;
    }
    var u_phone = document.getElementById('u_phone').value;
    if ($.trim(u_phone).length == 0) {
        //alert(insertContactMsg);
        $('#u_phone').focus();
        document.getElementById('errfn20').innerHTML = insertContactMsg;
        return false;
    }
    var u_email = gdc_email;
    //if ($.trim(u_email).length == 0) {
    //    alert('Please enter email.');
    //    return false;
    //}
    var image = new Array();
    //alert("Car Array:" + carArray.length);
    for (var i = 0; carArray.length > i; i++) {
        image.push({"car_images": carArray[i]})
    }
    //alert("Image Array:" + image.length);
    //console.log(JSON.stringify(image));
    if (image.length == 0) {
        var car_detail = '{"method":"UpdateCarDetail", "regi_id":"' + regi_id + '", "car_id":"' + editcar_id + '", "car_type": "' + car_type + '", "car_make": "' + car_make + '", "car_model": "' + car_model + '", "car_style": "' + car_style + '", "car_fuel": "' + car_fuel + '", "car_transmission": "' + car_transmission + '", "car_engine": "' + car_engine + '", "car_loan": "' + car_loan + '", "car_acpt_old": "' + car_acpt_old + '", "car_exchange": "' + car_exchange + '", "car_year": "' + car_year + '", "car_price_type": "' + car_price_type + '", "car_price": "' + car_price + '","car_int_color": "' + car_int_color + '","car_ext_color": "' + car_ext_color + '","car_km": "' + car_km + '","car_odometer": "' + car_odometer + '", "car_country":"' + car_country + '", "car_state":"' + car_state + '", "car_city":"' + car_city + '","car_doors": "' + car_doors + '","car_condition": "' + car_condition + '","car_rating": "' + car_rating + '","car_with_plate": "' + car_with_plate + '","car_plate": "' + car_plate + '","car_pow_lock": "' + car_pow_lock + '","car_ele_seat": "' + car_ele_seat + '","car_tint_win": "' + car_tint_win + '","car_air_bag": "' + car_air_bag + '","car_pow_win": "' + car_pow_win + '","car_ele_mir": "' + car_ele_mir + '","car_alarm": "' + car_alarm + '","car_abs": "' + car_abs + '","car_ac": "' + car_ac + '","car_win_difo": "' + car_win_difo + '","car_sunroof": "' + car_sunroof + '","car_rims": "' + car_rims + '","car_turbo": "' + car_turbo + '","car_lea_seat": "' + car_lea_seat + '","car_halo": "' + car_halo + '","car_cas": "' + car_cas + '","car_dvd": "' + car_dvd + '","car_cru_con": "' + car_cru_con + '","car_usb": "' + car_usb + '","car_rtv": "' + car_rtv + '","car_cont_elect": "' + car_cont_elect + '","car_cont_desce": "' + car_cont_desce + '","car_triptonic": "' + car_triptonic + '","car_rear_cam": "' + car_rear_cam + '","car_rear_sen": "' + car_rear_sen + '","car_front_sen": "' + car_front_sen + '","car_radio_string": "' + car_radio_string + '","car_vol_multi": "' + car_vol_multi + '","car_ac_climate": "' + car_ac_climate + '","car_mem_seat": "' + car_mem_seat + '","car_auto_fold_mir": "' + car_auto_fold_mir + '","car_xenon": "' + car_xenon + '","car_xenon_led": "' + car_xenon_led + '", "car_rain_sen": "' + car_rain_sen + '", "car_smt_keyof": "' + car_smt_keyof + '", "car_tire_pressure": "' + car_tire_pressure + '", "car_cru_cont": "' + car_cru_cont + '", "car_ad_ster": "' + car_ad_ster + '", "car_blue": "' + car_blue + '", "car_hydo_ster": "' + car_hydo_ster + '", "car_cen_lock": "' + car_cen_lock + '", "car_pow_seat": "' + car_pow_seat + '", "car_tint_glass": "' + car_tint_glass + '", "car_ele_glass": "' + car_ele_glass + '", "car_brake": "' + car_brake + '", "car_trip_com": "' + car_trip_com + '", "car_strt_btn": "' + car_strt_btn + '", "car_comment": "' + car_comment + '", "name":"' + name + '", "u_phone": "' + u_phone + '", "u_email": "' + u_email + '", "car_trade": "' + car_trade + '", "car_image": ""}';
    } else {
        var car_detail = '{"method":"UpdateCarDetail", "regi_id":"' + regi_id + '", "car_id":"' + editcar_id + '", "car_type": "' + car_type + '", "car_make": "' + car_make + '", "car_model": "' + car_model + '", "car_style": "' + car_style + '", "car_fuel": "' + car_fuel + '", "car_transmission": "' + car_transmission + '", "car_engine": "' + car_engine + '", "car_loan": "' + car_loan + '", "car_acpt_old": "' + car_acpt_old + '", "car_exchange": "' + car_exchange + '", "car_year": "' + car_year + '", "car_price_type": "' + car_price_type + '", "car_price": "' + car_price + '","car_int_color": "' + car_int_color + '","car_ext_color": "' + car_ext_color + '","car_km": "' + car_km + '","car_odometer": "' + car_odometer + '", "car_country":"' + car_country + '", "car_state":"' + car_state + '", "car_city":"' + car_city + '","car_doors": "' + car_doors + '","car_condition": "' + car_condition + '","car_rating": "' + car_rating + '","car_with_plate": "' + car_with_plate + '","car_plate": "' + car_plate + '","car_pow_lock": "' + car_pow_lock + '","car_ele_seat": "' + car_ele_seat + '","car_tint_win": "' + car_tint_win + '","car_air_bag": "' + car_air_bag + '","car_pow_win": "' + car_pow_win + '","car_ele_mir": "' + car_ele_mir + '","car_alarm": "' + car_alarm + '","car_abs": "' + car_abs + '","car_ac": "' + car_ac + '","car_win_difo": "' + car_win_difo + '","car_sunroof": "' + car_sunroof + '","car_rims": "' + car_rims + '","car_turbo": "' + car_turbo + '","car_lea_seat": "' + car_lea_seat + '","car_halo": "' + car_halo + '","car_cas": "' + car_cas + '","car_dvd": "' + car_dvd + '","car_cru_con": "' + car_cru_con + '","car_usb": "' + car_usb + '","car_rtv": "' + car_rtv + '","car_cont_elect": "' + car_cont_elect + '","car_cont_desce": "' + car_cont_desce + '","car_triptonic": "' + car_triptonic + '","car_rear_cam": "' + car_rear_cam + '","car_rear_sen": "' + car_rear_sen + '","car_front_sen": "' + car_front_sen + '","car_radio_string": "' + car_radio_string + '","car_vol_multi": "' + car_vol_multi + '","car_ac_climate": "' + car_ac_climate + '","car_mem_seat": "' + car_mem_seat + '","car_auto_fold_mir": "' + car_auto_fold_mir + '","car_xenon": "' + car_xenon + '","car_xenon_led": "' + car_xenon_led + '", "car_rain_sen": "' + car_rain_sen + '", "car_smt_keyof": "' + car_smt_keyof + '", "car_tire_pressure": "' + car_tire_pressure + '", "car_cru_cont": "' + car_cru_cont + '", "car_ad_ster": "' + car_ad_ster + '", "car_blue": "' + car_blue + '", "car_hydo_ster": "' + car_hydo_ster + '", "car_cen_lock": "' + car_cen_lock + '", "car_pow_seat": "' + car_pow_seat + '", "car_tint_glass": "' + car_tint_glass + '", "car_ele_glass": "' + car_ele_glass + '", "car_brake": "' + car_brake + '", "car_trip_com": "' + car_trip_com + '", "car_strt_btn": "' + car_strt_btn + '", "car_comment": "' + car_comment + '", "name":"' + name + '", "u_phone": "' + u_phone + '", "u_email": "' + u_email + '", "car_trade": "' + car_trade + '", "car_image": ' + JSON.stringify(image) + '}';
    }
    //console.log(car_detail);

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
        data: car_detail,
        success: function (data) {
            if (data.success == 0) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                //alert(data.message);
                return false;
            }
            if (data.success == 1) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                //alert(data.message);
                window.location.href = "userpost.html?type=carmenu";
            }
            if (data.success == 2) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                //alert(data.message);
                return false;
            }
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Data not update, please try again.',null,'Alert','Ok');
            $("#preloader").css('display','none');
            //alert("Data not update, please try again.");
            return false;
        }
    });

}