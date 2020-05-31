if (annyang) {
	var comandos={

		'reproducir': playVideo,
		'pausar': pausarVideo;

	};
	//escuchar comandos
	annyang.addCommands(comandos);
	annyang.setLanguage("es-MX")//establecemos el lenguaje a utilizar

	annyang.Start();
	//llamamos el video
	var idVideo = document.getElementById("miVideo");

	//creamos una funciones para reproducir y pausar el video
	function playVideo() {
		// body...
		idVideo.play();
	}
	function pausarVideo() {
		// body...
		idVideo.pause();
	}

}