$(document).ready(function () {


    var user = window.localStorage.getItem("gdc_email_id");
    if (user == null) {
        window.location.href = "login.html";


    } else {

        var app = {
            initialize: function () {
                this.bindEvents();
            },
            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            onDeviceReady: function () {

                if (parseFloat(window.device.version) === 7.0) {
                    document.body.style.marginTop = "20px";
                }
                document.addEventListener('deviceready', onDeviceReady, false);

                app.receivedEvent('deviceready');
                dataLoad();

            },
            receivedEvent: function (id) {

            }
        };
        app.initialize();
    }
});



function dataLoad() {
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
        data: '{"method":"HomeSlider"}',
        success: function (data) {
            homeSliderData(data);

            $.getScript('js/test.js');
            return true;
        },
        error: function (result) {
            navigator.notification.alert('Server Error',null,'Error','Ok');
            return false;
        }
    });
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function homeSliderData(data) {
    //var aa = data;
    //alert(JSON.stringify(aa));
    for (var i = 0; i < data.homeslider.length; i++) {
        var variable_type = data.homeslider[i].variable_type;
        var pro_id = data.homeslider[i].pro_id;
        var title = data.homeslider[i].title;
        var price_type = data.homeslider[i].price_type;
        if (price_type == "Dollares") {
            var prize = "$ " + numberWithCommas(data.homeslider[i].prize);
        } else {
            var prize = "₡ " +numberWithCommas(data.homeslider[i].prize);
        }

        //var aa = data.homeslider[i];
        //alert(JSON.stringify(aa[1]));
        var fuel = data.homeslider[i].fuel;
        if (fuel == "Petrol") {
            var fuelli = '<li><img src="images/petrol.png" class="icon-img" title="Petrol Fuel"></li>';
        }
        if (fuel == "Gas LPG") {
            var fuelli = '<li><img src="images/lpg.png" class="icon-img" title="Gas LPG Fuel"></li>';
        }
        if (fuel == "Diesel") {
            var fuelli = '<li><img src="images/diesel.png" class="icon-img" title="Diesel Fuel"></li>';
        }
        if (fuel == "Electric") {
            var fuelli = '<li><img src="images/electric.png" class="icon-img" title="Electric Fuel"></li>';
        }
        if (fuel == "Hydrogen") {
            var fuelli = '<li><img src="images/h2.png" class="icon-img" title="Hydrogen Fuel"></li>';
        }
        if (fuel == "") {
            var fuelli = "";
        }

        var transmission = data.homeslider[i].transmission;
        if (transmission == "Manual") {
            var transmissionli = '<li><img src="images/manual.png" class="icon-img" title="Manual Transmission"></li>';
        }
        if (transmission == "Automatic") {
            var transmissionli = '<li><img src="images/automatic.png" class="icon-img" title="Automatic Transmission"></li>';
        }
        if (transmission == "Tiptronic") {
            var transmissionli = '<li><img src="images/tiptronic.png" class="icon-img" title="Tiptronic Transmission"></li>';
        }

        var abs = data.homeslider[i].abs;
        if (abs == "Yes") {
            var absli = '<li><img src="images/abs.png" class="icon-img" title="ABS Breaks"></li>';
        } else {
            var absli = "";
        }

        var rtv = data.homeslider[i].rtv;
        if (rtv == "Yes") {
            var rtvli = '<li><img src="images/rtv.png" class="icon-img" title="RTV"></li>';
        } else {
            var rtvli = "";
        }

        var xenon_led = data.homeslider[i].xenon_led;
        if (xenon_led == "Yes") {
            var xenon_ledli = '<li><img src="images/led.png" class="icon-img" title="Xe-Led"></li>';
        } else {
            var xenon_ledli = "";
        }


        var rating = data.homeslider[i].rating;
        var exchange = data.homeslider[i].exchange;
        if (exchange == "Yes") {
            var exchangeli = '<li><img src="images/exchange.png" class="icon-img" title="Exchange"></li>';
        } else {
            var exchangeli = "";
        }
        var loan = data.homeslider[i].loan;
        if (loan == "Yes") {
            var loanli = '<li><img src="images/loan.png" class="icon-img" title="Loan"></li>';
        } else {
            var loanli = "";
        }

        var electricity = data.homeslider[i].electricity;
        if (electricity == "Yes") {
            var electricityli = '<li><img src="images/electric.png" class="icon-img" title="Electricity-Service"></li>';
        } else {
            var electricityli = "";
        }

        var water = data.homeslider[i].water;
        if (water == "Yes") {
            var waterli = '<li><img src="images/water.png" class="icon-img" title="Water-Service"></li>';
        } else {
            var waterli = "";
        }

        var address = data.homeslider[i].address;
        var file_img = data.homeslider[i].file_img;
        if (variable_type == "car") {
            $("#owl-demo").append('<div class="item">' +
            '<a href=' + "javascript:void(0);" + ' onclick=' + "goToProductDetail('" + escape(variable_type) + "','" + escape(pro_id) + "');" + '>' +
            '<div>'+
            '<img src="' + file_img + '">' +

            '<div class="for_slider_txt">' +
            '<div class="slider_title">' + title + '</div>' +
            '<div class="slider_price">' + prize + '</div>' +
            '<div class="slider_address">' + address + '</div>' +
            '<div class="icon-area">' +
            '<div class="rating-area">' +
            '<div class="rating-txt">' +
            '<img src="images/star.png" class="star-img">' + rating + ' /10' +
            '</div>' +
            ' </div>' +
            '<div class="clearfix"> </div>' +
            //'<ul class="list-inline icon-list">' + fuelli + exchangeli + loanli + transmissionli + absli + '' +
            //'<li><img src="images/fourwheel.png" class="icon-img" title="Four Wheel Drive">' +
            //'</li>' + rtvli + xenon_ledli + '</ul>' +
            '</div>' +
            '</div>' +
            '</div>'+
            '<ul class="list-inline icon-list bow-cell">' + fuelli + exchangeli + loanli + transmissionli + absli + '' +
            '<li>' +
            '<img src="images/fourwheel.png" class="icon-img" title="Four Wheel Drive">' +
            '</li>' + rtvli + xenon_ledli + '</ul>' +
            '</a>' +
            '</div>');
        }
        if (variable_type == "realestate") {
            $("#owl-demo2").append('<div class="item">' +
            '<a href=' + "javascript:void(0);" + ' onclick=' + "goToProductDetail('" + escape(variable_type) + "','" + escape(pro_id) + "');" + '>' +
            '<div>'+
            '<img src="' + file_img + '">' +
            '</div>'+
            '<div class="for_slider_txt">' +
            '<div class="slider_title">' + title + '</div>' +
            '<div class="slider_price">' + prize + '</div>' +
            '<div class="slider_address">' + address + '</div>' +
            '<div class="icon-area"><div class="rating-area">' +
            '<div class="rating-txt"><img src="images/star.png" class="star-img">' + rating + ' /10</div> ' +
            '</div>' +
            '<div class="clearfix">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<ul class="list-inline icon-list bow-cell">' + exchangeli + loanli + electricityli + waterli +
            '<li><img src="images/bedroom.png" class="icon-img" style="padding-left: 3px;" title="Exchange"></li>'+
            '<li><img src="images/bathroom.png" class="icon-img" style="padding-left: 4px;" title="Exchange"></li>'+
            '</ul>' +
            '</a>' +
            '</div>');
        }
        if (variable_type == "other") {
            $("#owl-demo3").append('<div class="item">' +
            '<a href=' + "javascript:void(0);" + ' onclick=' + "goToProductDetail('" + escape(variable_type) + "','" + escape(pro_id) + "');" + '>' +
            '<img src="' + file_img + '">' +
            '<div class="for_slider_txt">' +
            '<div class="slider_title">' + title + '</div>' +
            '<div class="slider_price">' + prize + '</div>' +
            '<div class="slider_address">' + address + '</div>' +
            '<div class="icon-area"><div class="rating-area">' +
            '<div class="rating-txt"><img src="images/star.png" class="star-img">' + rating + ' /10</div> ' +
            '</div><div class="clearfix"></div>' +
            //'<ul class="list-inline icon-list">' + exchangeli + loanli + '</ul>' +
            '</div>' +
            '</div>' +

            '<ul class="list-inline icon-list bow-cell">' + exchangeli + loanli + '</ul>' +
            '</a>' +
            '</div>');
        }

        $("#preloader").css('display','none');
        //cordova.plugin.pDialog.dismiss();
    }


    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 6000);

    return true;

}

function goToProductDetail(variable_type, pro_id) {

    var variable_type = unescape(variable_type);
    var pro_id = unescape(pro_id);
    if (variable_type == "car") {
        var link = "carlisting-details.html?cid=" + pro_id;
        window.location.href = link;
    }
    if (variable_type == "realestate") {
        var link = "realestatelistingdetails.html?rid=" + pro_id;
        window.location.href = link;
    }
    if (variable_type == "other") {
        var link = "othersdetails.html?oid=" + pro_id;
        window.location.href = link;
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}