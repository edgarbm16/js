// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    {
        name: "cupon21",
        discount: 15,
    },
    {
        name: "cupon65",
        discount: 30,
    },
    {
        name: "cupon98",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerHTML = "El precio con descuento es " + precioConDescuento;
}

function priceDiscountCupon(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCupon = document.getElementById("inputCupon");
    const couponValue = inputCupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerHTML = "El precio con descuento es " + precioConDescuento;
    }
}

// console.log({
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });