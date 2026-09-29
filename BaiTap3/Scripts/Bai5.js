var phanTram = 0;
var tienTrinh;


function batDau() {

    phanTram = 0;

    document.getElementById("progressBar").style.width = "0%";

    document.getElementById("progressBar").innerHTML = "0%";

    tienTrinh = setInterval(chayProgress, 100);

}


function chayProgress() {

    if (phanTram >= 100) {

        clearInterval(tienTrinh);

        return;
    }

    phanTram++;

    document.getElementById("progressBar").style.width =
        phanTram + "%";

    document.getElementById("progressBar").innerHTML =
        phanTram + "%";
}