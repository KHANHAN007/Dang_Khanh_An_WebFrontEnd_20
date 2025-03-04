let n = +prompt("Nhập số lượng số nguyên tố cần hiển thị:");

if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
    alert("Không hợp lệ");
} else {
    let count = 0;
    let num = 2;
    let result = "";
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += num + " ";
            count++;
        }
        num++;
    }
    alert(result.trim());
}
