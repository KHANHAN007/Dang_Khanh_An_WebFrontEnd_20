let N = +prompt("Nhập số N:");
if (isNaN(N) || N < 1) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let i = 5;
    let result = "";
    while (i <= N) {
        result += i + " ";
        i += 5;
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${N} là: ${result}`);
}
