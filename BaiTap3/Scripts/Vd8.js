function getValue(id) {

    return document.getElementById(id).value.trim();

}


function showError(key, mess) {

    document.getElementById(key + "_error").innerHTML = mess;

}


function validate() {

    var flag = true;


    // Xóa thông báo lỗi cũ

    document.getElementById("username_error").innerHTML = "";

    document.getElementById("password_error").innerHTML = "";

    document.getElementById("repassword_error").innerHTML = "";


    // 1. Kiểm tra username

    var username = getValue("username");

    if (username == "") {

        flag = false;

        showError(
            "username",
            "Vui lòng kiểm tra lại Username"
        );

    }


    // 2. Kiểm tra password

    var password = getValue("password");

    if (password == "" || password.length < 8) {

        flag = false;

        showError(
            "password",
            "Vui lòng kiểm tra lại Password"
        );

    }


    // 3. Kiểm tra nhập lại password

    var repassword = getValue("repassword");

    if (password != repassword) {

        flag = false;

        showError(
            "repassword",
            "Vui lòng kiểm tra nhập lại Password"
        );

    }


    return flag;

}