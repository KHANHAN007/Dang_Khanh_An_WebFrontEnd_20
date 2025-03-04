let num = +prompt("Nhập một số");
if (num < 0 || isNaN(num) || num === " ") {
    alert("Dữ liệu nhập vào không hợp lệ");
}
else {
    let sum = 0;
    while (num > 0) {
        sum += num--;
    }
    alert(sum);
}