function run() {
    var iframe = document.createElement("iframe");
    iframe.height = "10%";
    iframe.width = "100%";
    iframe.src = "chrome-extension://omkamdlakallckdjjcnglonboddelkmj/popupfilltab.html";
    document.body.appendChild(iframe);
}

function wait() {
    setTimeout(function () {
        var button = document.createElement("button");
        button.innerHTML = "Continue";
        button.onclick = next();
        document.body.appendChild(button);
        console.log("running");
    }, 5000);
}

function next() {
    window.location.href = "https://localhost:8000/site"
}