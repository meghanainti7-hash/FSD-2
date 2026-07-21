// 1. Traditional Function

function calculateDiscountTraditional(price: number, discount: number): number {
    return price - (price * discount);
}

// 2. Arrow Function

const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - (price * discount);
};

// 3. Shorthand Arrow Function

const getShopMessage = (shop: string): string =>
    `Welcome to ${shop} Shopping Mall!`;

// --- Testing ---

const productPrice: number = 1000;
const discountRate: number = 0.20; // 20%

console.log(getShopMessage("D-Mart"));

const finalPrice1 = calculateDiscountTraditional(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

const finalPrice2 = calculateDiscountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);