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

var oldnewblank = "";
var oldtv = "";
var newtv = "";
var selMake = "";
var selModel = "";
var selStyle = "";
var hybrid = "";
var luxury = "";
var suv = "";
var sedans = "";
var selFuel = "";
var petrol = "";
var electric = "";
var hydrogen = "";
var selTrns = "";
var automatic = "";
var selCountry = "";
var selDoor = "";
var selRating = "";
var selCondition = "";
var selCity = "";
var selState = "";

var opExce = "";
var opVerygood = "";
var opOkey = "";
var opReg = "";

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
    make = "Make";
    carmodel = "Model";
    filstyle = "Style";
    fuel = "Fuel";
    transmission = "Transmission";
    engine = "Car Engine in CC";
    year = "Year";
    pricetype = "";
    odometerType = "";
    price = "Price";
    icolor = "Interior Color";
    ecolor = "Exterior Color";
    kilometar = "Odometer"
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

    oldnewblank = "Select Type";
    oldtv = "Old";
    newtv = "New";
    selMake = "Select Make";
    selModel = "Select Model";
    selStyle = "Select Style";

    hybrid = "Hybrid";
    luxury = "Luxury";
    suv = "Suv";
    sedans = "Sedans";
    selFuel = "Select Fuel";
    petrol = "Petrol";
    electric = "Electric";
    hydrogen = "Hydrogen";
    selTrns = "Select Transmission";
    automatic = "Automatic";
    selCountry = "Select Country";
    selState = "Select State";
    selCity = "Select City";
    selDoor = "Select Door";
    selRating = "Select Rating";
    selCondition = "Select Condition";
    opExce = "Excellent";
    opVerygood = "Very Good";
    opOkey = "Okay";
    opReg = "Regular";
}
function ready_spa() {
    basicinfo = "Básica";
    ptype = "Viejo / Nuevo";
    make = "Hacer";
    carmodel = "Modelo";
    filstyle = "Estilo";
    fuel = "Combustible";
    transmission = "Transmisión";
    engine = "Motor de coche de CC";
    year = "Año";
    pricetype = "";
    odometerType = "";
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
    extraInfo = "Extras";
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

    oldnewblank = "Seleccionar el tipo de";
    oldtv = "Antiguo";
    newtv = "Nuevo";
    selMake = "Seleccione Marca";
    selModel = "Seleccione el modelo";
    selStyle = "Seleccione Estilo";

    hybrid = "Híbrido";
    luxury = "Lujo";
    suv = "Vehículo todoterreno";
    sedans = "Sedanes";
    selFuel = "Seleccionar Fuel";
    petrol = "Gasolina";
    electric = "Eléctrico";
    hydrogen = "Hidrógeno";
    selTrns = "Seleccione una Transmisión";
    automatic = "Automático";
    selCountry = "Seleccionar país";
    selState = "Seleccionar Estado";
    selCity = "Seleccionar Ciudad";
    selDoor = "Seleccione puerta";
    selRating = "Seleccione el grado";
    selCondition = "Seleccionar condición";
    opExce = "Excelente";
    opVerygood = "Muy bien";
    opOkey = "Bueno";
    opReg = "Regular";
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
        $('#car_type-button span').html(oldnewblank);
        document.getElementById('oldnewblank').innerHTML = oldnewblank;
        document.getElementById('oldtv').innerHTML = oldtv;
        document.getElementById('newtv').innerHTML = newtv;
        $('#car_make-button span').html(selMake);
        document.getElementById('selMake').innerHTML = selMake;
        $('#selectModel-button span').html(selModel);
        document.getElementById('selModel').innerHTML = selModel;
        $('#selectStyle-button span').html(selStyle);
        document.getElementById('selStyle').innerHTML = selStyle;
        document.getElementById('hybrid').innerHTML = hybrid;
        document.getElementById('luxury').innerHTML = luxury;
        document.getElementById('suv').innerHTML = suv;
        document.getElementById('sedans').innerHTML = sedans;
        $('#car_fuel-button span').html(selFuel);
        document.getElementById('selFuel').innerHTML = selFuel;
        document.getElementById('petrol').innerHTML = petrol;
        document.getElementById('electric').innerHTML = electric;
        document.getElementById('hydrogen').innerHTML = hydrogen;
        $('#car_transmission-button span').html(selTrns);
        document.getElementById('selTrns').innerHTML = selTrns;
        document.getElementById('automatic').innerHTML = automatic;
        $('#selectCountry-button span').html(selCountry);
        document.getElementById('selCountry').innerHTML = selCountry;
        $('#car_doors-button span').html(selDoor);
        document.getElementById('selDoor').innerHTML = selDoor;
        $('#car_rating-button span').html(selRating);
        document.getElementById('selRating').innerHTML = selRating;
        $('#car_condition-button span').html(selCondition);
        document.getElementById('selCondition').innerHTML = selCondition;
        document.getElementById('opExce').innerHTML = opExce;
        document.getElementById('opVerygood').innerHTML = opVerygood;
        document.getElementById('opOkey').innerHTML = opOkey;
        document.getElementById('opReg').innerHTML = opReg;

        $('#selectCity-button span').html(selCity);
        document.getElementById('selCity').innerHTML = selCity;
        $('#selectState-button span').html(selState);
        document.getElementById('selState').innerHTML = selState;

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

$(document).ready(
    function () {
        selectPlateStatus();
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

//Ashish
var pictureSource;
var destinationType;
var carArray = new Array();
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
        $("#carImages").append('<li id="uploadPreviewLi' + j + '">' +
        '<div align="center"><img id="uploadPreview' + j + '" name="uploadPreview' + j + '" width="300px" height="200px" style="margin:10px 0px"/>' +
        ' <a onclick="reBuildArray(' + j + ');" class="remove"><img src="images/deletepic.png"/></a>' +
        '</div>' +
        '</li>');

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
var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getCarMakeList();
        getCountryList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();


function getCarMakeList() {

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
        data: '{"method":"CarMake"}',
        success: function (data) {
//                      alert(data);
            carMakeData(data);
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
            //alert("Error");
            //cordova.plugin.pDialog.dismiss();
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function carMakeData(data) {
    var obj = data.makefilter;
    for (var i = 0; i < obj.length; i++) {
        $('#car_make').append($('<option>').text(obj[i].car_make_name).attr('value', obj[i].car_make_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}
var model = 0;
function selectModel12(str) {
    model = str;
    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?model_id=" + model;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#divModel").html(result);
        }
    });

    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}
var style = 0;
//function selectStyle(str) {
//    style = str;
//    var url = BASE_URL + APP_API + "?style_id=" + style;
//    jQuery.ajax({
//        url: url, success: function (result) {
//            jQuery("#divStyle").html(result);
//        }
//    });
//}

function countryData(data) {
    var obj = data.country;
    for (var i = 0; i < obj.length; i++) {
        $('#selectCountry').append($('<option>').text(obj[i].counry_name).attr('value', obj[i].counry_id));
    }
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
    return true;
}

var state = 0;
function selectState12(str) {
    state = str;

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});
    $("#preloader").css('display','block');

    var url = BASE_URL + APP_API + "?country_id=" + state;
    jQuery.ajax({
        url: url, success: function (result) {
            jQuery("#div5").html(result);
        }
    });
    //cordova.plugin.pDialog.dismiss();
    $("#preloader").css('display','none');
}
var state = 0;
function selectCity12(str) {

    var city = str;

    //cordova.plugin.pDialog.init({
    //    theme: 'HOLO_LIGHT',
    //    progressStyle: 'SPINNER',
    //    cancelable: false,
    //    title: 'Please Wait...',
    //    message: 'Loading ...'
    //});

    $("#preloader").css('display','block');
    var url = BASE_URL + APP_API + "?state_id=" + city;
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

var car_plate = "";

//function selectClear(str) {
//    document.getElementById(str).innerHTML = "";
//}
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

function insertCarDetail() {


    var regi_id = gdc_uid;
    var car_price_type;
    var car_odometer;



    var car_loan;
    var car_exchange;
    var car_pow_lock;
    var car_tint_win;
    var car_with_plate;
    var car_ele_seat;
    var car_air_bag;
    var car_pow_win;
    var car_ele_mir;
    var car_alarm;
    var car_abs;
    var car_ac;
    var car_win_difo;
    var car_sunroof;
    var car_rims;
    var car_turbo;
    var car_lea_seat;
    var car_halo;
    var car_cas;
    var car_dvd;
    var car_cru_con;
    var car_usb;
    var car_rtv;
    var car_cont_elect;
    var car_cont_desce;
    var car_triptonic;
    var car_rear_cam;
    var car_rear_sen;
    var car_front_sen;
    var car_radio_string;
    var car_vol_multi;
    var car_ac_climate;
    var car_mem_seat;
    var car_auto_fold_mir;
    var car_xenon;
    var car_xenon_led;
    var car_rain_sen;
    var car_smt_keyof;
    var car_tire_pressure;
    var car_cru_cont;
    var car_ad_ster;
    var car_blue;
    var car_hydo_ster;
    var car_cen_lock;
    var car_pow_seat;
    var car_tint_glass;
    var car_ele_glass;
    var car_brake;
    var car_trip_com;
    var car_strt_btn;
    var car_detail;
    var car_type = document.getElementById('car_type').value;

    if ($.trim(car_type) == "") {
        navigator.notification.alert(selectMsg,null,'Alert','Ok');

        $('#car_type').focus();
        document.getElementById('errfn').innerHTML = selectMsg;
        return false;
    }
    var car_make = document.getElementById('car_make').value;
    if ($.trim(car_make) == "") {
        navigator.notification.alert(selectCarMakMsg,null,'Alert','Ok');

        $('#car_make').focus();
        document.getElementById('errfn1').innerHTML = selectCarMakMsg;
        return false;
    }
    var car_model = document.getElementById('selectModel').value;
    if ($.trim(car_model) == "") {
        navigator.notification.alert(insertModelMsg,null,'Alert','Ok');
        $('#selectModel').focus();
        document.getElementById('errfnModel').innerHTML = insertModelMsg;
        return false;
    }
    var car_style = document.getElementById('selectStyle').value;
    if ($.trim(car_style) == "") {
        navigator.notification.alert(insertStyleMsg,null,'Alert','Ok');
        $('#selectStyle').focus();
        document.getElementById('errfnStyle').innerHTML = insertStyleMsg;
        return false;
    }
    var car_fuel = document.getElementById('car_fuel').value;
    if ($.trim(car_fuel) == "") {
        navigator.notification.alert(insertFuelMsg,null,'Alert','Ok');

        $('#car_fuel').focus();
        document.getElementById('errfnFuel').innerHTML = insertFuelMsg;
        return false;
    }
    var car_transmission = document.getElementById('car_transmission').value;
    if ($.trim(car_transmission) == "") {
        navigator.notification.alert(insertTrasMsg,null,'Alert','Ok');
        $('#car_transmission').focus();
        document.getElementById('errfnTrans').innerHTML = insertTrasMsg;
        return false;
    }
    var car_engine = document.getElementById('car_engine').value;
    if ($.trim(car_engine).length == 0) {
        navigator.notification.alert(insertCarEngMsg,null,'Alert','Ok');
        $('#car_engine').focus();
        document.getElementById('errfn16').innerHTML = insertCarEngMsg;
        return false;
    }
    var car_year = document.getElementById('car_year').value;
    if ($.trim(car_year).length == 0) {
        navigator.notification.alert(insertYearMsg,null,'Alert','Ok');
        $('#car_year').focus();
        document.getElementById('errfn17').innerHTML = insertYearMsg;
        return false;
    }
    //var car_price_type = document.getElementById('car_price_type').value;


    if (document.getElementById("car_price_type").checked) {
         car_price_type = "Colones";
    } else {
         car_price_type = "Dollares";
    }


    if (document.getElementById("car_odometer").checked) {
         car_odometer = "Km";
    } else {
         car_odometer = "Mile";
    }

    //alert(car_odometer);
    var car_price = document.getElementById('car_price').value;

    if ($.trim(car_price).length == 0) {
        navigator.notification.alert(insertPriceMsg,null,'Alert','Ok');
        $('#car_price').focus();
        document.getElementById('errfn88').innerHTML = insertPriceMsg;
        return false;
    }
    var car_int_color = document.getElementById('car_int_color').value;
    if ($.trim(car_int_color).length == 0) {
        navigator.notification.alert(insertIntCol,null,'Alert','Ok');
        $('#car_int_color').focus();
        document.getElementById('errfn9').innerHTML = insertIntCol;
        return false;
    }
    var car_ext_color = document.getElementById('car_ext_color').value;
    if ($.trim(car_ext_color).length == 0) {
        navigator.notification.alert(insertExtCol,null,'Alert','Ok');
        $('#car_ext_color').focus();
        document.getElementById('errfn10').innerHTML = insertExtCol;
        return false;
    }
    var car_km = document.getElementById('car_km').value;
    if ($.trim(car_km).length == 0) {
        navigator.notification.alert(insertKiloMsg,null,'Alert','Ok');
        $('#car_km').focus();
        document.getElementById('errfn11').innerHTML = insertKiloMsg;
        return false;
    }
    var car_country = document.getElementById('selectCountry').value;
    if ($.trim(car_country) == "") {
        navigator.notification.alert(insertCountryMsg,null,'Alert','Ok');
        $('#selectCountry').focus();
        document.getElementById('errfn6').innerHTML = insertCountryMsg;
        return false;
    }
    var car_state = document.getElementById('selectState').value;
    if ($.trim(car_state) == "") {
        navigator.notification.alert(insertStateMsg,null,'Alert','Ok');
        $('#selectState').focus();
        $('#selectState-button span').html(selectState);
        document.getElementById('errfn7').innerHTML = insertStateMsg;
        return false;
    }
    var car_city = document.getElementById('selectCity').value;
    if ($.trim(car_city) == "") {
        //alert(insertCityMsg);
        $('#selectCity').focus();
        document.getElementById('errfn8').innerHTML = insertCityMsg;
        return false;
    }
    var car_doors = document.getElementById('car_doors').value;
    if ($.trim(car_doors) == "") {
        navigator.notification.alert(insertCarDorMsg,null,'Alert','Ok');
        $('#car_doors').focus();
        document.getElementById('errfn15').innerHTML = insertCarDorMsg;
        return false;
    }

    var car_rating = document.getElementById('car_rating').value;
    if ($.trim(car_rating) == "") {
        navigator.notification.alert(selectRatingMsg,null,'Alert','Ok');
        $('#car_rating').focus();
        document.getElementById('errfnCarRating').innerHTML = selectRatingMsg;
        return false;
    }

    var car_condition = document.getElementById('car_condition').value;
    if ($.trim(car_condition) == "") {
        navigator.notification.alert(selectConditionMsg,null,'Alert','Ok');
        $('#car_condition').focus();
        document.getElementById('errfnCarCondition').innerHTML = selectConditionMsg;
        return false;
    }

    if (document.getElementById("car_loan").checked) {
         car_loan = "Yes";
    } else {
         car_loan = "No";
    }

    if (document.getElementById("car_exchange").checked) {
        car_exchange = "Yes";
    } else {
        car_exchange = "No";
    }

    if (document.getElementById("car_pow_lock").checked) {
         car_pow_lock = "Yes";
    } else {
         car_pow_lock = "No";
    }

    if (document.getElementById("car_tint_win").checked) {
         car_tint_win = "Yes";
    } else {
         car_tint_win = "No";
    }

    if (document.getElementById("car_with_plate").checked) {
         car_with_plate = "Yes";
    } else {
         car_with_plate = "No";
    }

    car_plate = document.getElementById('car_plate').value;
    if ($.trim(car_with_plate) == "Yes" && $.trim(car_plate).length == 0) {
        navigator.notification.alert(insertCarPlatNoMsg,null,'Alert','Ok');
        $('#car_plate').focus();
        document.getElementById('errfnCarPlate').innerHTML = insertCarPlatNoMsg;
        return false;
    }

    if (document.getElementById("car_ele_seat").checked) {
        car_ele_seat = "Yes";
    } else {
        car_ele_seat = "No";
    }

    //var car_tint_win = document.getElementById('car_tint_win').value;


    //var car_air_bag = document.getElementById('car_air_bag').value;
    if (document.getElementById("car_air_bag").checked) {
        car_air_bag = "Yes";
    } else {
        car_air_bag = "No";
    }

    //var car_pow_win = document.getElementById('car_pow_win').value;
    if (document.getElementById("car_pow_win").checked) {
        car_pow_win = "Yes";
    } else {
        car_pow_win = "No";
    }

    //var car_ele_mir = document.getElementById('car_ele_mir').value;
    if (document.getElementById("car_ele_mir").checked) {
        car_ele_mir = "Yes";
    } else {
        car_ele_mir = "No";
    }

    //var car_alarm = document.getElementById('car_alarm').value;
    if (document.getElementById("car_alarm").checked) {
        car_alarm = "Yes";
    } else {
        car_alarm = "No";
    }

    //var car_abs = document.getElementById('car_abs').value;
    if (document.getElementById("car_abs").checked) {
        car_abs = "Yes";
    } else {
        car_abs = "No";
    }

    //var car_ac = document.getElementById('car_ac').value;
    if (document.getElementById("car_ac").checked) {
        car_ac = "Yes";
    } else {
        car_ac = "No";
    }

    //var car_win_difo = document.getElementById('car_win_difo').value;
    if (document.getElementById("car_win_difo").checked) {
        car_win_difo = "Yes";
    } else {
        car_win_difo = "No";
    }

    //var car_sunroof = document.getElementById('car_sunroof').value;
    if (document.getElementById("car_sunroof").checked) {
        car_sunroof = "Yes";
    } else {
        car_sunroof = "No";
    }

    //var car_rims = document.getElementById('car_rims').value;
    if (document.getElementById("car_rims").checked) {
        car_rims = "Yes";
    } else {
        car_rims = "No";
    }

    //var car_turbo = document.getElementById('car_turbo').value;
    if (document.getElementById("car_turbo").checked) {
        car_turbo = "Yes";
    } else {
        car_turbo = "No";
    }

    //var car_lea_seat = document.getElementById('car_lea_seat').value;
    if (document.getElementById("car_lea_seat").checked) {
        car_lea_seat = "Yes";
    } else {
        car_lea_seat = "No";
    }

    //var car_halo = document.getElementById('car_halo').value;
    if (document.getElementById("car_halo").checked) {
        car_halo = "Yes";
    } else {
        car_halo = "No";
    }

    //var car_cas = document.getElementById('car_cas').value;
    if (document.getElementById("car_cas").checked) {
        car_cas = "Yes";
    } else {
        car_cas = "No";
    }

    //var car_dvd = document.getElementById('car_dvd').value;
    if (document.getElementById("car_dvd").checked) {
        car_dvd = "Yes";
    } else {
        car_dvd = "No";
    }

    //var car_cru_con = document.getElementById('car_cru_con').value;
    if (document.getElementById("car_cru_con").checked) {
        car_cru_con = "Yes";
    } else {
        car_cru_con = "No";
    }

    //var car_usb = document.getElementById('car_usb').value;
    if (document.getElementById("car_usb").checked) {
        car_usb = "Yes";
    } else {
        car_usb = "No";
    }

    //var car_rtv = document.getElementById('car_rtv').value;
    if (document.getElementById("car_rtv").checked) {
        car_rtv = "Yes";
    } else {
        car_rtv = "No";
    }

    //var car_cont_elect = document.getElementById('car_cont_elect').value;
    if (document.getElementById("car_cont_elect").checked) {
        car_cont_elect = "Yes";
    } else {
        car_cont_elect = "No";
    }

    //var car_cont_desce = document.getElementById('car_cont_desce').value;
    if (document.getElementById("car_cont_desce").checked) {
        car_cont_desce = "Yes";
    } else {
        car_cont_desce = "No";
    }

    //var car_triptonic = document.getElementById('car_triptonic').value;
    if (document.getElementById("car_triptonic").checked) {
        car_triptonic = "Yes";
    } else {
        car_triptonic = "No";
    }

    //var car_rear_cam = document.getElementById('car_rear_cam').value;
    if (document.getElementById("car_rear_cam").checked) {
        car_rear_cam = "Yes";
    } else {
        car_rear_cam = "No";
    }

    //var car_rear_sen = document.getElementById('car_rear_sen').value;
    if (document.getElementById("car_rear_sen").checked) {
        car_rear_sen = "Yes";
    } else {
        car_rear_sen = "No";
    }

    //var car_front_sen = document.getElementById('car_front_sen').value;
    if (document.getElementById("car_front_sen").checked) {
        car_front_sen = "Yes";
    } else {
        car_front_sen = "No";
    }

    //var car_radio_string = document.getElementById('car_radio_string').value;
    if (document.getElementById("car_radio_string").checked) {
        car_radio_string = "Yes";
    } else {
        car_radio_string = "No";
    }

    //var car_vol_multi = document.getElementById('car_vol_multi').value;
    if (document.getElementById("car_vol_multi").checked) {
        car_vol_multi = "Yes";
    } else {
        car_vol_multi = "No";
    }

    //var car_ac_climate = document.getElementById('car_ac_climate').value;
    if (document.getElementById("car_ac_climate").checked) {
        car_ac_climate = "Yes";
    } else {
        car_ac_climate = "No";
    }

    //var car_mem_seat = document.getElementById('car_mem_seat').value;
    if (document.getElementById("car_mem_seat").checked) {
        car_mem_seat = "Yes";
    } else {
        car_mem_seat = "No";
    }

    //var car_auto_fold_mir = document.getElementById('car_auto_fold_mir').value;
    if (document.getElementById("car_auto_fold_mir").checked) {
        car_auto_fold_mir = "Yes";
    } else {
        car_auto_fold_mir = "No";
    }

    //var car_xenon = document.getElementById('car_xenon').value;
    if (document.getElementById("car_xenon").checked) {
        car_xenon = "Yes";
    } else {
        car_xenon = "No";
    }

    //var car_xenon_led = document.getElementById('car_xenon_led').value;
    if (document.getElementById("car_xenon_led").checked) {
        car_xenon_led = "Yes";
    } else {
        car_xenon_led = "No";
    }

    //var car_rain_sen = document.getElementById('car_rain_sen').value;
    if (document.getElementById("car_rain_sen").checked) {
        car_rain_sen = "Yes";
    } else {
        car_rain_sen = "No";
    }

    //var car_smt_keyof = document.getElementById('car_smt_keyof').value;
    if (document.getElementById("car_smt_keyof").checked) {
        car_smt_keyof = "Yes";
    } else {
        car_smt_keyof = "No";
    }

    //var car_tire_pressure = document.getElementById('car_tire_pressure').value;
    if (document.getElementById("car_tire_pressure").checked) {
        car_tire_pressure = "Yes";
    } else {
        car_tire_pressure = "No";
    }

    //var car_cru_cont = document.getElementById('car_cru_cont').value;
    if (document.getElementById("car_cru_cont").checked) {
        car_cru_cont = "Yes";
    } else {
        car_cru_cont = "No";
    }

    //var car_ad_ster = document.getElementById('car_ad_ster').value;
    if (document.getElementById("car_ad_ster").checked) {
        car_ad_ster = "Yes";
    } else {
        car_ad_ster = "No";
    }

    //var car_blue = document.getElementById('car_blue').value;
    if (document.getElementById("car_blue").checked) {
        car_blue = "Yes";
    } else {
        car_blue = "No";
    }

    //var car_hydo_ster = document.getElementById('car_hydo_ster').value;
    if (document.getElementById("car_hydo_ster").checked) {
        car_hydo_ster = "Yes";
    } else {
        car_hydo_ster = "No";
    }

    //var car_cen_lock = document.getElementById('car_cen_lock').value;
    if (document.getElementById("car_cen_lock").checked) {
        car_cen_lock = "Yes";
    } else {
        car_cen_lock = "No";
    }

    //var car_pow_seat = document.getElementById('car_pow_seat').value;
    if (document.getElementById("car_pow_seat").checked) {
        car_pow_seat = "Yes";
    } else {
        car_pow_seat = "No";
    }

    //var car_tint_glass = document.getElementById('car_tint_glass').value;
    if (document.getElementById("car_tint_glass").checked) {
        car_tint_glass = "Yes";
    } else {
        car_tint_glass = "No";
    }

    //var car_ele_glass = document.getElementById('car_ele_glass').value;
    if (document.getElementById("car_ele_glass").checked) {
        car_ele_glass = "Yes";
    } else {
        car_ele_glass = "No";
    }

    //var car_brake = document.getElementById('car_brake').value;
    if (document.getElementById("car_brake").checked) {
        car_brake = "Yes";
    } else {
        car_brake = "No";
    }

    //var car_trip_com = document.getElementById('car_trip_com').value;
    if (document.getElementById("car_trip_com").checked) {
        car_trip_com = "Yes";
    } else {
        car_trip_com = "No";
    }

    //var car_strt_btn = document.getElementById('car_strt_btn').value;
    if (document.getElementById("car_strt_btn").checked) {
        car_strt_btn = "Yes";
    } else {
        car_strt_btn = "No";
    }

    //var car_trade = "";
    //if (document.getElementById("car_trade").checked) {
    //    var car_trade = "Yes";
    //} else {
    //    var car_trade = "No";
    //}
    var car_comment = document.getElementById('car_comment').value;
    var name = document.getElementById('u_name').value;
    //alert(name);
    if ($.trim(name).length == 0) {
        navigator.notification.alert(insertNameMsg,null,'Alert','Ok');
        $('#u_name').focus();
        document.getElementById('errfn19').innerHTML = insertNameMsg;
        return false;
    }
    var u_phone = document.getElementById('u_phone').value;
    if ($.trim(u_phone).length == 0) {
        navigator.notification.alert(insertContactMsg,null,'Alert','Ok');
        $('#u_phone').focus();
        document.getElementById('errfn20').innerHTML = insertContactMsg;
        return false;
    }
    var u_email = gdc_email;
    //if ($.trim(u_email).length == 0) {
    //    alert(insertEmailMsg);
    //    return false;
    //}
    var image = new Array();
    for (var i = 0; carArray.length > i; i++) {
        image.push({"car_images": carArray[i]})
    }
    //console.log(JSON.stringify(image));
    if (carArray.length == 0) {
        car_detail = '{"method":"InsertCarDetail", "regi_id":"' + regi_id + '", "car_type": "' + car_type + '", "car_make": "' + car_make + '", "car_model": "' + car_model + '", "car_style": "' + car_style + '", "car_fuel": "' + car_fuel + '", "car_transmission": "' + car_transmission + '", "car_engine": "' + car_engine + '", "car_loan": "' + car_loan + '", "car_exchange": "' + car_exchange + '", "car_year": "' + car_year + '", "car_price_type": "' + car_price_type + '", "car_price": "' + car_price + '","car_int_color": "' + car_int_color + '","car_ext_color": "' + car_ext_color + '","car_km": "' + car_km + '","car_odometer": "' + car_odometer + '", "car_country":"' + car_country + '", "car_state":"' + car_state + '", "car_city":"' + car_city + '","car_doors": "' + car_doors + '","car_condition": "' + car_condition + '","car_rating": "' + car_rating + '","car_with_plate": "' + car_with_plate + '","car_plate": "' + car_plate + '","car_pow_lock": "' + car_pow_lock + '","car_ele_seat": "' + car_ele_seat + '","car_tint_win": "' + car_tint_win + '","car_air_bag": "' + car_air_bag + '","car_pow_win": "' + car_pow_win + '","car_ele_mir": "' + car_ele_mir + '","car_alarm": "' + car_alarm + '","car_abs": "' + car_abs + '","car_ac": "' + car_ac + '","car_win_difo": "' + car_win_difo + '","car_sunroof": "' + car_sunroof + '","car_rims": "' + car_rims + '","car_turbo": "' + car_turbo + '","car_lea_seat": "' + car_lea_seat + '","car_halo": "' + car_halo + '","car_cas": "' + car_cas + '","car_dvd": "' + car_dvd + '","car_cru_con": "' + car_cru_con + '","car_usb": "' + car_usb + '","car_rtv": "' + car_rtv + '","car_cont_elect": "' + car_cont_elect + '","car_cont_desce": "' + car_cont_desce + '","car_triptonic": "' + car_triptonic + '","car_rear_cam": "' + car_rear_cam + '","car_rear_sen": "' + car_rear_sen + '","car_front_sen": "' + car_front_sen + '","car_radio_string": "' + car_radio_string + '","car_vol_multi": "' + car_vol_multi + '","car_ac_climate": "' + car_ac_climate + '","car_mem_seat": "' + car_mem_seat + '","car_auto_fold_mir": "' + car_auto_fold_mir + '","car_xenon": "' + car_xenon + '","car_xenon_led": "' + car_xenon_led + '", "car_rain_sen": "' + car_rain_sen + '", "car_smt_keyof": "' + car_smt_keyof + '", "car_tire_pressure": "' + car_tire_pressure + '", "car_cru_cont": "' + car_cru_cont + '", "car_ad_ster": "' + car_ad_ster + '", "car_blue": "' + car_blue + '", "car_hydo_ster": "' + car_hydo_ster + '", "car_cen_lock": "' + car_cen_lock + '", "car_pow_seat": "' + car_pow_seat + '", "car_tint_glass": "' + car_tint_glass + '", "car_ele_glass": "' + car_ele_glass + '", "car_brake": "' + car_brake + '", "car_trip_com": "' + car_trip_com + '", "car_strt_btn": "' + car_strt_btn + '", "car_comment": "' + car_comment + '", "car_user_name":"' + name + '", "u_phone": "' + u_phone + '", "u_email": "' + u_email + '", "car_image": ""}';
    } else {
        car_detail = '{"method":"InsertCarDetail", "regi_id":"' + regi_id + '", "car_type": "' + car_type + '", "car_make": "' + car_make + '", "car_model": "' + car_model + '", "car_style": "' + car_style + '", "car_fuel": "' + car_fuel + '", "car_transmission": "' + car_transmission + '", "car_engine": "' + car_engine + '", "car_loan": "' + car_loan + '", "car_exchange": "' + car_exchange + '", "car_year": "' + car_year + '", "car_price_type": "' + car_price_type + '", "car_price": "' + car_price + '","car_int_color": "' + car_int_color + '","car_ext_color": "' + car_ext_color + '","car_km": "' + car_km + '","car_odometer": "' + car_odometer + '", "car_country":"' + car_country + '", "car_state":"' + car_state + '", "car_city":"' + car_city + '","car_doors": "' + car_doors + '","car_condition": "' + car_condition + '","car_rating": "' + car_rating + '","car_with_plate": "' + car_with_plate + '","car_plate": "' + car_plate + '","car_pow_lock": "' + car_pow_lock + '","car_ele_seat": "' + car_ele_seat + '","car_tint_win": "' + car_tint_win + '","car_air_bag": "' + car_air_bag + '","car_pow_win": "' + car_pow_win + '","car_ele_mir": "' + car_ele_mir + '","car_alarm": "' + car_alarm + '","car_abs": "' + car_abs + '","car_ac": "' + car_ac + '","car_win_difo": "' + car_win_difo + '","car_sunroof": "' + car_sunroof + '","car_rims": "' + car_rims + '","car_turbo": "' + car_turbo + '","car_lea_seat": "' + car_lea_seat + '","car_halo": "' + car_halo + '","car_cas": "' + car_cas + '","car_dvd": "' + car_dvd + '","car_cru_con": "' + car_cru_con + '","car_usb": "' + car_usb + '","car_rtv": "' + car_rtv + '","car_cont_elect": "' + car_cont_elect + '","car_cont_desce": "' + car_cont_desce + '","car_triptonic": "' + car_triptonic + '","car_rear_cam": "' + car_rear_cam + '","car_rear_sen": "' + car_rear_sen + '","car_front_sen": "' + car_front_sen + '","car_radio_string": "' + car_radio_string + '","car_vol_multi": "' + car_vol_multi + '","car_ac_climate": "' + car_ac_climate + '","car_mem_seat": "' + car_mem_seat + '","car_auto_fold_mir": "' + car_auto_fold_mir + '","car_xenon": "' + car_xenon + '","car_xenon_led": "' + car_xenon_led + '", "car_rain_sen": "' + car_rain_sen + '", "car_smt_keyof": "' + car_smt_keyof + '", "car_tire_pressure": "' + car_tire_pressure + '", "car_cru_cont": "' + car_cru_cont + '", "car_ad_ster": "' + car_ad_ster + '", "car_blue": "' + car_blue + '", "car_hydo_ster": "' + car_hydo_ster + '", "car_cen_lock": "' + car_cen_lock + '", "car_pow_seat": "' + car_pow_seat + '", "car_tint_glass": "' + car_tint_glass + '", "car_ele_glass": "' + car_ele_glass + '", "car_brake": "' + car_brake + '", "car_trip_com": "' + car_trip_com + '", "car_strt_btn": "' + car_strt_btn + '", "car_comment": "' + car_comment + '", "car_user_name":"' + name + '", "u_phone": "' + u_phone + '", "u_email": "' + u_email + '", "car_image": ' + JSON.stringify(image) + '}';
    }

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
                navigator.notification.alert(data.message,null,'Alert','Ok');
                //cordova.plugin.pDialog.dismiss();
                $("#preloader").css('display','none');
                return false;
            }
            if (data.success == 1) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                window.location.href = "userpost.html?type=carmenu";
            }
            if (data.success == 2) {
                //cordova.plugin.pDialog.dismiss();
                navigator.notification.alert(data.message,null,'Alert','Ok');
                $("#preloader").css('display','none');
                return false;
            }
        },
        error: function (result) {
            //cordova.plugin.pDialog.dismiss();
            navigator.notification.alert('Not iserted, please try again.',null,'Alert','Ok');
            $("#preloader").css('display','none');
            return false;
        }
    });
}

function selectPlateStatus() {
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
