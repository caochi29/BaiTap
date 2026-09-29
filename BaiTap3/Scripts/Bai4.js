function themCongViec() {

    var congViec =
        document.getElementById("congViec").value.trim();


    if (congViec == "") {

        alert("Vui lòng nhập công việc");

        return;
    }


    var li =
        document.createElement("li");


    li.innerHTML =
        congViec
        + ' <input type="button" value="Xóa" class="btnXoa" onclick="xoaCongViec(this)" />';


    li.onclick = function () {

        if (event.target.className == "btnXoa") {
            return;
        }

        if (this.className == "daXong") {

            this.className = "";

        }
        else {

            this.className = "daXong";

        }
    };


    document
        .getElementById("danhSachCongViec")
        .appendChild(li);


    document.getElementById("congViec").value = "";

}



function xoaCongViec(button) {

    var li =
        button.parentElement;

    li.remove();

}