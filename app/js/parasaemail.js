(function() {
    function ibalikAngKasunod(e) {
        return String.fromCharCode(e.charCodeAt(0) + 1)
    }

    var command = "ma" + ibalikAngKasunod('h') + "lto:",
        address = "an" + ibalikAngKasunod("s") + "on23" + 
            "@" + ibalikAngKasunod("f") + "mail.co" + ibalikAngKasunod("l");
    document.getElementById("emaildini").innerHTML = address;
    document.getElementById("emaildinihref").href = command + address;


    var command2 = "te" + ibalikAngKasunod('k') + ":",
        address2 = "123-" + "45" + ibalikAngKasunod("2") + "-" + "300" + ibalikAngKasunod("6");
    document.getElementById("tawagdini").innerHTML = address2;
    document.getElementById("tawagdinihref").href = command2 + address2;
})();