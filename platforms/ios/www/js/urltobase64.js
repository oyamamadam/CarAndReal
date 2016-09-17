/**
 * Created by CTINFO on 1/18/2016.
 */
function convertImgToDataURLviaCanvas(url, callback, outputFormat){
    navigator.notification.alert(url,null,'Alert','Ok');

    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        navigator.notification.alert(dataURL,null,'Alert','Ok');

        canvas = null;
    };
    img.src = url;
}

function convertFileToDataURLviaFileReader(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader  = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
}

function urltobase64(imageUrl) {
    //var imageUrl = $(this).find('[name=url]').val();
    var convertType = "Canvas";
    var convertFunction = convertType === 'FileReader' ?
        convertFileToDataURLviaFileReader :
        convertImgToDataURLviaCanvas;
    //Canvas FileReader
    convertFunction(imageUrl, function (base64Img) {
        $('.output')
            .find('.textbox')
            .val(base64Img)
            .end()
            .find('.link')
            .attr('href', base64Img)
            .text(base64Img)
            .end()
            .find('.img')
            .attr('src', base64Img)
            .end()
            .find('.size')
            .text(base64Img.length)
            .end()
            .find('.convertType')
            .text(convertType)
            .end()
            .show()
    });

    event.preventDefault();
}