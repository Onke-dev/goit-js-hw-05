function getElementWidth(content, padding, border) {
    const numb_1 = Number.parseFloat(content);
    const numb_2 = Number.parseFloat(padding);
    const numb_3 = Number.parseFloat(border);

    const sum = numb_1 + numb_2 * 2 + numb_3 * 2;
    return sum;
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
