"use strict";
// 1. Traditional Function
function calculateDiscountTraditional(price, discount) {
    return price - (price * discount);
}
// 2. Arrow Function
const calculateDiscountArrow = (price, discount) => {
    return price - (price * discount);
};
// 3. Shorthand Arrow Function
const getShopMessage = (shop) => `Welcome to ${shop} Shopping Mall!`;
// --- Testing ---
const productPrice = 1000;
const discountRate = 0.20; // 20%
console.log(getShopMessage("D-Mart"));
const finalPrice1 = calculateDiscountTraditional(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);
const finalPrice2 = calculateDiscountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);
