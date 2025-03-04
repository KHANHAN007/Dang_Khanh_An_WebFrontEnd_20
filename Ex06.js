let num = prompt("Nhập một số:");
if (isNaN(num) || num.trim() === "" || num.includes(".") || num < 2) {
    alert("Không phải là số nguyên tố");
} else {
    num = parseInt(num);
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${num} là số nguyên tố`);
    } else {
        alert(`${num} không phải là số nguyên tố`);
    }
}
