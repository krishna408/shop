import axios from 'axios'


let addToCart = document.querySelectorAll('.add-to-cart')

function updateCart(item) {
    axios.post('/update-cart', item).then(res => {
        cartCounter.innerText = res.data.totalQty 
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Item added to cart',
            progressBar: false,
        }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong',
            progressBar: false,
        }).show();
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let item = JSON.parse(btn.dataset.item)
        updateCart(item)
        
    })
}) 