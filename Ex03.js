let num = prompt("Nhập một số nguyên:");

if (num === null || num.trim() === "" || isNaN(num) || num.includes(".")) {
    alert("Số không hợp lệ");
} else {
    // let reversedNum = num.split("").reverse().join("");
    num = parseInt(num);
    let tmp = num;
    let reversedNum = 0;
    while (tmp > 0) {
        let digit = tmp % 10;
        reversedNum = reversedNum * 10 + digit;
        tmp = Math.floor(tmp / 10);
    }

    if (num === reversedNum) {
        alert(`${num} là số đối xứng`);
    } else {
        alert(`${num} không phải số đối xứng`);
    }
}