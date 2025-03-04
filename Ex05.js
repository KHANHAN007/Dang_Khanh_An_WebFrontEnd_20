let a = +prompt("Nhập số a");
let b = +prompt("Nhập só b");
if (isNaN(a) || isNaN(b)) {
    alert("Không hợp lệ");
}
else {
    if (!Number.isInteger(b) || b < 0) {
        alert("Không hợp lệ");
    } else {
        let result = 1;
        for (let i = 0; i < b; i++) {
            result *= a;
        }
        alert(result);
    }
}