let str = prompt("Nhập một chuỗi:");
let search = prompt("Nhập ký tự cần tìm:");

if (!str || !search || search.length !== 1) {
    alert("Dữ liệu nhập vào không hợp lệ!");
} else {
    let found = false;
    let i = 0;

    while (i < str.length) {
        if (str.charAt(i++) === search) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("Tồn tại từ cần tìm kiếm");
    } else {
        alert("Không tồn tại từ cần tìm kiếm");
    }
}
