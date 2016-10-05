/**
 * Created by CTinfotech on 11/27/2015.
 */
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    navigator.app.backHistory();
}

var results = "";
var filter = "";
var loadmore = "";
var category = "";
var loan = "";
var yes = "";
var trade = "";
var yestrade = "";
var pricerange = "";
var pltoh = "";
var phtol = "";
var msg_no = "";

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
    results = "Results";
    filter = "Filter";
    loadmore = "Load More";
    category = "Category";
    loan = "Loan";
    yes = "Yes";
    trade = "Exchange";
    yestrade = "Yes";
    pricerange = "Price Range";
    pltoh = "Price Low to High";
    phtol = "Price High to Low";
    msg_no = "No Data Found!";
}

function ready_spa() {
    results = "Resultados";
    filter = "Filtrar";
    loadmore = "Carga Más";
    category = "Categoría";
    loan = "Préstamo";
    yes = "Sí";
    trade = "Intercambiar";
    yestrade = "Sí";
    pricerange = "Rango de precios";
    pltoh = "Precio de menor a mayor";
    phtol = "Precio mayor a menor";
    msg_no = "¡Datos no encontrados!";
}

display();

function display() {
    $(document).ready(function () {
        document.getElementById('results').innerHTML = results;
        /*        document.getElementById('filter').innerHTML = filter;*/
        /*        document.getElementById('loadmore').innerHTML = loadmore;*/
        document.getElementById('category').innerHTML = category;
        document.getElementById('loan').innerHTML = loan;
        document.getElementById('yes').innerHTML = yes;
        document.getElementById('trade').innerHTML = trade;
        document.getElementById('yestrade').innerHTML = yestrade;
        document.getElementById('pricerange').innerHTML = pricerange;
        document.getElementById('pltoh').innerHTML = pltoh;
        document.getElementById('phtol').innerHTML = phtol;

    })
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
function goToMore() {
    window.location.href = "more.html";
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

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        getAllRealDetail();
        CatRealList();

    },
    receivedEvent: function (id) {

    }
};
app.initialize();

var pageno = 1;
var firstData = 0;
var secondData = 10;
var cat_typ_arr = new Array();


function goToNxt() {
    pageno = pageno + 1;
    firstData = firstData + 10;
    secondData = secondData + 10;
    getAllRealDetail();

}

function goToPrv() {
    if (secondData > 10) {
        secondData = secondData - 10;
    }
    if (firstData >= 10) {
        pageno = pageno - 1;
        firstData = firstData - 10;
    }
    getAllRealDetail();
}
function getAllRealDetail() {

    $("#preloader").css('display','block');
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        //data: '{"method":"AllRealDetail", "first":"' + firstData + '", "second":"' + secondData + '"}',
        data: '{"method":"AllRealDetail", "cat_typ_arr":"' + cat_typ_arr + '", "loan_fil":"' + loan_fil + '","trade_fil":"' + trade_fil + '","price_fil":"' + price_fil + '", "first":"' + firstData + '", "second":"' + secondData + '"}',

        success: function (data) {
            realListData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
}

function getSorteddate(array){

    return array.sort(function (a, b){
        //console.log(a.other_created);
        var a_s= a.real_publish.split(' ');
        var a_date= a_s[0] + "T"+a_s[1];
        var aaa= new Date(a_date);
        var b_s= b.real_publish.split(' ');
        var b_date= b_s[0] + "T"+b_s[1];
        var bbb= new Date(b_date);
        console.log("adfasdfsdf="+ aaa.getDate());
        return bbb - aaa;
    });
}

function realListData(data) {

    if (data.reallist.length == 0) {
        //alert(msg_no);
        if (secondData > 10) {
            secondData = secondData - 10;
        }
        if (firstData >= 10) {
            pageno = pageno - 1;
            firstData = firstData - 10;
        }
    } else {

        var obj = data.realtotal;
        document.getElementById('totalrealadv').innerHTML = obj;
        document.getElementById('pageno').innerHTML = pageno;
        //var aa = data.reallist;
        //alert(JSON.stringify(aa));

        $("#allRealData").children().remove();


        var insteadlist = getSorteddate(data.reallist);

        for (var i = 0; i < insteadlist.length; i++) {
            var real_id = insteadlist[i].real_id;
            var real_title_lis = insteadlist[i].real_title_lis;

            var real_country = insteadlist[i].real_country;
            var real_state = insteadlist[i].real_state;
            var real_city = insteadlist[i].real_city;

            var rating = insteadlist[i].real_rating;
            var exchange = insteadlist[i].real_rec;
            if (exchange == "Yes") {
                var exchangeli = '<img src="images/exchange.png" class="icon-img" title="Exchange">';
            } else {
                var exchangeli = "";
            }
            var loan = insteadlist[i].real_loan;
            if (loan == "Yes") {
                var loanli = '<img src="images/loan.png" class="icon-img" title="Loan">';
            } else {
                var loanli = "";
            }

            var electricity = insteadlist[i].real_electricity;
            if (electricity == "Yes") {
                var electricityli = '<img src="images/electric.png" class="icon-img" title="">';
            } else {
                var electricityli = "";
            }

            var water = insteadlist[i].real_water;
            if (water == "Yes") {
                var waterli = '<img src="images/water.png" class="icon-img" title="">';
            } else {
                var waterli = "";
            }

            var real_price_type = insteadlist[i].real_price_type;
            var real_price = numberWithCommas(insteadlist[i].real_price);

            //var date = insteadlist[i].real_publish;

            var real_img = insteadlist[i].real_img;
            var image1 = real_img[0];
            //alert(image1);
            if (real_price_type == "Dollares") {
                $("#allRealData").append('<li>' +
                '<a onclick="gotopage(' + real_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div>' +
                '<div class="txt_for_listing">' +
                '<h4>' + real_title_lis + '</h4>' +
                '<h3>' + '$' + real_price + ' ' + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3>' +
                '<h6>' + real_city + ', ' + real_state + ', ' + real_country + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +
                '<div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + ' /10' +
                '</div> ' +
                '</div>' +
                '<div class="clearfix"> </div>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '<div align="right" class="realestate">' + exchangeli + loanli + electricityli + waterli +
                '<img src="images/bedroom.png" class="icon-img" style="padding-left: 3px;" title="Exchange">' +
                '<img src="images/bathroom.png" class="icon-img" style="padding-left: 4px;" title="Exchange">' +
                '</div>' +
                '</li>');
            } else {
                $("#allRealData").append('<li>' +
                '<a onclick="gotopage(' + real_id + ')">' +
                '<div class="img_for_listing">' +
                '<img src=' + image1 + '>' +
                '</div>' +
                '<div class="txt_for_listing">' +
                '<h4>' + real_title_lis + '</h4>' +
                '<h3 style="color: blue;">' + '₡' + real_price + ' ' + ' <span style="font-size:13px; color:#d50000; padding-left:10px;">NEGOTIABLE</span></h3>' +
                '<h6>' + real_city + ', ' + real_state + ', ' + real_country + '</h6>' +
                '<div class="icon-area">' +
                '<div class="rating-area">' +
                '<div class="rating-txt"><img src="images/star.png" class="star-img"> ' + rating + ' /10' +
                '</div> ' +
                '</div>' +
                '<div class="clearfix"> </div>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '<div align="right" class="realestate">' + exchangeli + loanli + electricityli + waterli +
                '<img src="images/bedroom.png" class="icon-img" style="padding-left: 3px;" title="Exchange">' +
                '<img src="images/bathroom.png" class="icon-img" style="padding-left: 4px;" title="Exchange">' +
                '</div>' +
                '</li>');
            }
        }

    }
    $("#preloader").css('display','none');
}

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
    getAllRealDetail();
});


function gotopage(real_id) {
    var link = "realestatelistingdetails.html?rid=" + real_id;
    window.location.href = link;
}

//Other Filter
function CatRealList() {
    $.ajax({
        url: BASE_URL + APP_API,
        type: 'POST',
        dataType: 'json',
        contentType: "application/json",
        data: '{"method":"RealPro"}',
        success: function (data) {
            //alert(data);
            OtherCatFilterData(data);
            return true;
        },
        error: function (result) {
            //alert("Error");
            return false;
        }
    });
}

function OtherCatFilterData(data) {
    if (data.realfilter.length == 0) {
        //alert(msg_no);
    } else {

        // $("#allCarData").children().remove();
        for (var i = 0; i < data.realfilter.length; i++) {
            var other_cat_id = data.realfilter[i].real_pro_id;
            var other_cat_name = data.realfilter[i].real_pro_name;
            $("#catfilter").append(
                '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 gutter-none">' + other_cat_name +
                '</div>' +
                '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">' +
                '<span>' +
                '<input type="checkbox" onclick="gotofilter(' + other_cat_id + ')">' +
                '</span>' +
                '</div>' +
                '<div class="clearfix">' +
                '</div>');
        }
        return true;
    }
}

function gotofilter(str) {
    //alert(str);
    if ($.inArray(str, cat_typ_arr) != -1) {
        var index = cat_typ_arr.indexOf(str);
        if (index >= 0) {
            cat_typ_arr.splice(index, 1);
        }
    } else {
        //alert("PUSH");
        cat_typ_arr.push(str);
    }
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //console.log("Cat Array : " + cat_typ_arr);
}


//Loan
var loan_fil = "";
function gotoLoanfilter(str) {
    loan_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}
//Trade
var trade_fil = "";
function gotoTradefilter(str) {
    trade_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}
//Price
var price_fil = "";
function gotoPricefilter(str) {
    price_fil = str;
    firstData = 0;
    secondData = 10;
    getAllRealDetail();
    //alert(loan_fil);
}