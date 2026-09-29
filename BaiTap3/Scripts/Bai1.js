function hienThiSoTruong() {

    var chuyenNganh =
        document.getElementById("chuyenNganh").value;

    var soTruong =
        document.getElementById("soTruong");


    if (chuyenNganh === "hethong") {

        soTruong.innerHTML =
            "Phân tích & Thiết kế";

    }
    else if (chuyenNganh === "phanmem") {

        soTruong.innerHTML =
            "Lập trình";

    }
    else if (chuyenNganh === "mang") {

        soTruong.innerHTML =
            "Quản lý mạng";

    }
}



function dangKy() {

    var flag = true;


    // Xóa thông báo cũ

    document.getElementById("maSV_error").innerHTML = "";

    document.getElementById("hoTen_error").innerHTML = "";

    document.getElementById("tuoi_error").innerHTML = "";

    document.getElementById("ngoaiNgu_error").innerHTML = "";

    document.getElementById("ketQua").innerHTML = "";


    // =========================
    // KIỂM TRA MÃ SINH VIÊN
    // =========================

    var maSV =
        document.getElementById("maSV").value.trim();


    if (maSV.length !== 10) {

        flag = false;

        document.getElementById("maSV_error").innerHTML =
            "Mã sinh viên gồm 10 ký tự";
    }



    // =========================
    // KIỂM TRA HỌ TÊN
    // =========================

    var hoTen =
        document.getElementById("hoTen").value.trim();


    if (hoTen === "" || hoTen.length > 30) {

        flag = false;

        document.getElementById("hoTen_error").innerHTML =
            "Họ tên không rỗng và ≤ 30 ký tự";
    }



    // =========================
    // KIỂM TRA TUỔI
    // =========================

    var tuoiText =
        document.getElementById("tuoi").value.trim();

    var tuoi =
        Number(tuoiText);


    if (
        tuoiText === "" ||
        isNaN(tuoi) ||
        tuoi < 18
    ) {

        flag = false;

        document.getElementById("tuoi_error").innerHTML =
            "Tuổi phải từ 18 trở lên";
    }



    // =========================
    // KIỂM TRA NGOẠI NGỮ
    // =========================

    var ngoaiNgu =
        document.getElementsByName("ngoaiNgu");

    var danhSachNgoaiNgu = [];


    for (var i = 0; i < ngoaiNgu.length; i++) {

        if (ngoaiNgu[i].checked) {

            danhSachNgoaiNgu.push(
                ngoaiNgu[i].value
            );
        }
    }


    if (danhSachNgoaiNgu.length === 0) {

        flag = false;

        document.getElementById("ngoaiNgu_error").innerHTML =
            "Vui lòng chọn ít nhất một ngoại ngữ";
    }



    // =========================
    // KẾT QUẢ
    // =========================

    if (flag === true) {

        document.getElementById("ketQua").innerHTML =
            "Bạn đã đăng ký thành công";

    }
    else {

        document.getElementById("ketQua").innerHTML =
            "Bạn phải nhập lại cho đúng";
    }

}       