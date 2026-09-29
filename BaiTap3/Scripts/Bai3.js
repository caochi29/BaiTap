function hienThiNgay() {

    var today = new Date();

    var ngay = today.getDate();

    var thang = today.getMonth() + 1;

    var nam = today.getFullYear();


    alert(
        "Hôm nay là ngày "
        + ngay
        + " tháng "
        + thang
        + " năm "
        + nam
    );
}



function dongHo() {

    var today = new Date();

    var gio = today.getHours();

    var phut = today.getMinutes();

    var giay = today.getSeconds();


    if (gio < 10) {

        gio = "0" + gio;

    }


    if (phut < 10) {

        phut = "0" + phut;

    }


    if (giay < 10) {

        giay = "0" + giay;

    }


    document.getElementById("dongHo").innerHTML =
        gio + ":" + phut + ":" + giay;
}


dongHo();

setInterval(dongHo, 1000);