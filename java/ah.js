let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');







// get total 
function getTotal()
{
    if(price.value != ''){
        let result = ( +price.value + +TextDecoderStream.value + +ads.value)
        - +discount.value;
        total.style.background = '#040';
    }
}












// create produc
// save localstorage
// clear inputs
//  read
// count
// delete
// update
// search
// clean date 