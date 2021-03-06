var contenido = [];

if (annyang) {
    var commands = {
        'hola': function () {
            console.log("hola");
            alert("hola");
        },
        'reproducir': playVideo,
        'play': playVideo,
        'detener': pausarVideo,
        'stop': pausarVideo,
        'adelante': next,
        'siguiente': next,
        'next': next,
        'atras': before,
        'behind': before,
        'escribir *tag': showFlickr,
        'write *tag': showFlickr,
        'inicio': sectionIni,
        'start': sectionIni,
        'texto': sectionText,
        'text': sectionText,
        'multimedia': sectionMult,
        'galeria': sectionGal,
        'galery': sectionGal,
        'borrar': borrar,
    };
    annyang.addCommands(commands);
    annyang.setLanguage ("es-CO " );
    annyang.setLanguage ("es-US " );
    annyang.start();   
}

//creamos una funciones para reproducir y pausar el video
function playVideo() {
    // body...
    var idVideo = document.getElementById("miVideo");
    console.log("Start");

    document.getElementById("miVideo").play();

}

function pausarVideo() {
    // body...
    console.log("Stop");
    document.getElementById("miVideo").pause();
}

function next() {
    console.log("next");
    $('#nx').click();
}

function before() {
    console.log("before");
    $('#pv').click();
}

function showFlickr(tag) {
    //var url = 'http://api.flickr.com/services/rest/?tags=' + tag;
    contenido.push(tag);
    var t = " ";
    console.log("escribir");
    for (var i = 0; i < contenido.length; i++) {
        t += contenido[i] + " ";
    }
    console.log(t + " ");
    $("#txtVoice").val(t);
}

function borrar() {
    if (contenido.length > 0) {
        contenido.pop();
        var t = " ";
        console.log("borrar");
        for (var i = 0; i < contenido.length; i++) {
            t += contenido[i] + " ";
        }
        $("#txtVoice").val(t);
    } else {
        console.log("No hay datos para borrar");
    }
}

//llamamos a las secciones
function sectionIni(){
    console.log("begin");
    $("#inicio").click();
}

function sectionText(){
    console.log("escritura");
    $("#texto").click();
}

function sectionMult(){
    console.log("video");
    $("#multimedia").click();
}

function sectionGal(){
    console.log("fotos");
    $("#galeria").click();
}
