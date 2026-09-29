// ========================================
// HÀM KIỂM TRA TEXTBOX KHÔNG ĐƯỢC RỖNG
// ========================================

function kiemTraRong(idTextbox, idError, tenThongTin) {

    var giaTri =
        document.getElementById(idTextbox).value.trim();

    var error =
        document.getElementById(idError);


    if (giaTri === "") {

        error.innerHTML =
            tenThongTin + " không được để trống";

        return false;
    }

    else {

        error.innerHTML = "";

        return true;
    }
}



// ========================================
// KIỂM TRA SỐ ĐIỆN THOẠI
// ========================================

function kiemTraSoDienThoai() {

    var soDienThoai =
        document.getElementById("soDienThoai").value.trim();

    var error =
        document.getElementById("soDienThoai_error");


    if (soDienThoai.length < 10) {

        error.innerHTML =
            "Số điện thoại phải có ít nhất 10 chữ số";

        return false;
    }


    // Kiểm tra chỉ chứa chữ số
    if (!/^\d+$/.test(soDienThoai)) {

        error.innerHTML =
            "Số điện thoại chỉ được chứa chữ số";

        return false;
    }


    error.innerHTML = "";

    return true;
}



// ========================================
// CHỌN NƠI GIAO HÀNG
// ========================================

function chonNoiNhan(loai) {

    if (loai === "vanphong") {

        alert(
            "Bạn chọn giao hàng tại văn phòng"
        );

    }

    else if (loai === "nha") {

        alert(
            "Bạn chọn giao hàng tại nhà riêng"
        );

    }

}



// ========================================
// NÚT LƯU
// ========================================

function luuThongTin() {

    var hopLe = true;


    // Kiểm tra Tên

    var tenHopLe =
        kiemTraRong(
            "hoTen",
            "hoTen_error",
            "Tên"
        );


    // Kiểm tra Địa chỉ

    var diaChiHopLe =
        kiemTraRong(
            "diaChi",
            "diaChi_error",
            "Địa chỉ"
        );


    // Kiểm tra Tỉnh / Thành phố

    var tinhThanhHopLe =
        kiemTraRong(
            "tinhThanh",
            "tinhThanh_error",
            "Tỉnh / Thành phố"
        );


    // Kiểm tra Quận / Huyện

    var quanHuyenHopLe =
        kiemTraRong(
            "quanHuyen",
            "quanHuyen_error",
            "Quận / Huyện"
        );


    // Kiểm tra Phường / Xã

    var phuongXaHopLe =
        kiemTraRong(
            "phuongXa",
            "phuongXa_error",
            "Phường / Xã"
        );


    // Kiểm tra số điện thoại

    var soDienThoaiHopLe =
        kiemTraSoDienThoai();


    // Tổng hợp kết quả

    if (
        tenHopLe === false ||
        diaChiHopLe === false ||
        tinhThanhHopLe === false ||
        quanHuyenHopLe === false ||
        phuongXaHopLe === false ||
        soDienThoaiHopLe === false
    ) {

        hopLe = false;
    }


    // Thông báo kết quả

    if (hopLe === false) {

        alert(
            "Thông tin nhập không hợp lệ"
        );

    }

    else {

        alert(
            "Lưu thông tin thành công"
        );

    }

}