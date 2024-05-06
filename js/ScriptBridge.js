// JavaScript para capturar la pantalla con HTML2Canvas y descargar la imagen

// JavaScript para capturar, enviar y descargar la imagen
function captureAndDownload() {
    // Captura el contenido del navegador usando HTML2Canvas
    html2canvas(document.body).then(function (canvas) {
        // Convierte el canvas en una imagen base64
        var imageDataURL = canvas.toDataURL("image/png");

        // Envía la imagen capturada a Unity
        unityInstance.SendMessage("CaptureManager", "ReceiveCapturedImage", imageDataURL);

        // Crea un enlace para descargar la imagen
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = imageDataURL;
        link.click();
    });
}

