// function for getting all the outputs value
function updatedOutputField(fieldId) {
    const fieldOutput = document.getElementById(fieldId);
    const updatedFieldValue = parseInt(fieldOutput.innerText);
    return updatedFieldValue;
};

// final total displaying function 
function calculateFinalTotal(totalPrice) {
    const finalToal = document.getElementById('final-total');
    finalToal.innerText = parseInt(totalPrice.innerText);
};

// memory cost calculation  function
function calculateMemoryCost(cost) {
    const costMemory = document.getElementById('memory-cost');
    costMemory.innerText = cost;

    // update total price
    const costStorageUpdated = updatedOutputField('storage-cost');
    const chargeDeliveryUpdated = updatedOutputField('delivery-charge');
    const priceTotal = document.getElementById('total-price');
    priceTotal.innerText = 1299 + parseInt(costMemory.innerText) + costStorageUpdated + chargeDeliveryUpdated;

    // update final-total price
    calculateFinalTotal(priceTotal);
};

// storage cost calculation  function
function calculateStrogeCharge(cost) {
    const costStorage = document.getElementById('storage-cost');
    costStorage.innerText = cost;

    // update total price
    const costMemoryUpdated = updatedOutputField('memory-cost');
    const chargeDeliveryUpdated = updatedOutputField('delivery-charge');
    const priceTotal = document.getElementById('total-price');
    priceTotal.innerText = 1299 + costMemoryUpdated + parseInt(costStorage.innerText) + chargeDeliveryUpdated;

    // update final-total price
    calculateFinalTotal(priceTotal);
};


// delivery charge calculation  function
function calculateDeliveryCharge(cost) {
    const chargeDelivery = document.getElementById('delivery-charge');
    chargeDelivery.innerText = cost;

    // update total price
    const costMemoryUpdated = updatedOutputField('memory-cost');
    const costStorageUpdated = updatedOutputField('storage-cost');
    const priceTotal = document.getElementById('total-price');
    priceTotal.innerText = 1299 + costMemoryUpdated + costStorageUpdated + parseInt(chargeDelivery.innerText);

    // update final-total price
    calculateFinalTotal(priceTotal);
};


// handler for memory cost 
document.getElementById('memory-8gb').addEventListener('click', function () {
    calculateMemoryCost(0);
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    calculateMemoryCost(180);
});


// handler for storage cost
document.getElementById('storage-256gb').addEventListener('click', function () {
    calculateStrogeCharge(0);
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    calculateStrogeCharge(100);
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    calculateStrogeCharge(180);

});

// handler for delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
    calculateDeliveryCharge(0);
});
document.getElementById('charged-delivery').addEventListener('click', function () {
    calculateDeliveryCharge(20);
});

// handler for promo code 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value;
    if (promoValue == "stevekaku") {
        const finalToal = document.getElementById('final-total');
        const priceTotal = document.getElementById('total-price');
        finalToal.innerText = parseInt(priceTotal.innerText) - (parseInt(priceTotal.innerText) / 5);
        promoInput.value = '';
    } else {
        promoInput.value = '';

    }
});