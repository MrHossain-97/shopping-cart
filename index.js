// function to increase input value
function increaseQuantityValue(caseId){
    const QuantityField = document.getElementById(caseId);
    const prevQuantityValue = parseInt(QuantityField.value);
    const newQuantityValue = prevQuantityValue + 1;
    QuantityField.value = newQuantityValue;

    return newQuantityValue;
}

// function to decrease input value
function decreaseQuantityValue(caseId) {
    const QuantityField = document.getElementById(caseId);
    const prevQuantityValue = parseInt(QuantityField.value);
    const newQuantityValue = prevQuantityValue - 1;
    QuantityField.value = newQuantityValue;
    if (newQuantityValue<=0) {
        QuantityField.value=0;
    }

    return newQuantityValue;
}
// iphone 11 field
document.getElementById('btn-mobile-plus').addEventListener('click', function () {
    const mobileQuantityValue = increaseQuantityValue('mobile-number-field');
    //set total mobile price
    const pricePerMobileField = document.getElementById('price-per-mobile');
    const pricePerMobile = parseInt(pricePerMobileField.innerText);
    const totalMobilePrice = mobileQuantityValue * 1219;
    pricePerMobileField.innerText = totalMobilePrice;
})

document.getElementById('btn-mobile-minus').addEventListener('click', function () {
    const mobileQuantityValue = decreaseQuantityValue('mobile-number-field');
    // set total mobile price
    const pricePerMobileField = document.getElementById('price-per-mobile');
    const pricePerMobile = parseInt(pricePerMobileField.innerText);
    const totalMobilePrice = mobileQuantityValue * 1219;
    pricePerMobileField.innerText = totalMobilePrice;
})
// iphone 11 phone case field
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseQuantityValue = increaseQuantityValue('case-number-field');
    // set total case price
    const pricePerCaseField = document.getElementById('price-per-case');
    const pricePerCase = parseInt(pricePerCaseField.innerText);
    const totalCasePrice = caseQuantityValue * 59;
    pricePerCaseField.innerText = totalCasePrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseQuantityValue = decreaseQuantityValue('case-number-field');
    // set total case price
    const pricePerCaseField = document.getElementById('price-per-case');
    const pricePerCase = parseInt(pricePerCaseField.innerText);
    const totalCasePrice = caseQuantityValue * 59;
    pricePerCaseField.innerText = totalCasePrice;
})