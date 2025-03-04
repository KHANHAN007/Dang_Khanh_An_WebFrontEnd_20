let n = prompt("Nhập số lượng số Fibonacci cần hiển thị:");
if (isNaN(n) || n.trim() === "" || n.includes(".") || n < 1) {
    alert("Không hợp lệ");
} else {
    n = parseInt(n);
    let a = 1, b = 1;
    let result = "1";
    if (n > 1) {
        result += " 1";
        for (let i = 2; i < n; i++) {
            let next = a + b;
            result += " " + next;
            a = b;
            b = next;
        }
    }
    alert(result);
}
