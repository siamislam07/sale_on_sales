
let total = 0;

function handleClickBtn(target) {
    const addToCartContainer = document.getElementById('addToCart');
    const itemName = target.childNodes[2].nextSibling.innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    addToCartContainer.appendChild(li);

    const price = target.childNodes[5].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(price);
    const intotal = document.getElementById('total').innerText = total;

    const purchaseBtn = document.getElementById('purchase-btn')
    const applybtn = document.getElementById('btn-coupon');

    if (intotal >= 0) {
        purchaseBtn.removeAttribute('disabled')

    } else {
        purchaseBtn.setAttribute('disabled', true)
    }
    if (intotal >= 200) {
        applybtn.removeAttribute('disabled')
    } else {
        applybtn.setAttribute('disabled', true)
    }

    document.getElementById('btn-coupon').addEventListener('click', function () {
        const discount = (intotal * .20).toFixed(2);
        document.getElementById('discount').innerText = discount

        const overAllprice = intotal - discount
        document.getElementById('overallprice').innerText = overAllprice
    })


}
