/**
 * Created by CTINFO on 2/15/2016.
 */

$(document).ready(function () {
    var links = [
        {
            "bgcolor": "red",
            "icon": "+",
        },
        {
            "url": "car-upload.html",
            "bgcolor": "#2372f5",
            "color": "#fffff",
            "icon": "<i class='fa fa-car' id='appautomobiles'>Car</i>",
        },
        {
            "url": "realestate-upload.html",
            "bgcolor": "#2372f5",
            "color": "white",
            "icon": "<i class='fa fa-music' id='apprealestate'>Real</i>"
        },
        {
            "url": "othersupload.html",
            "bgcolor": "#2372f5",
            "color": "#fffff",
            "icon": "<i class='fa fa-car' id='appsundries'>Other</i>",
        }
    ]
    $('.kc_fab_wrapper').kc_fab(links);
})

