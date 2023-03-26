
/*---------------check if page done loading------------------------------------------------------------------------------*/


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
/*-----------removing item-----------------------------------------------------------------------------------------------*/
function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-remove')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
/*---------------------update total when quantity increased--------------------------------------------------------------*/
   let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
/*----------------add to cart button----- adds items-------------------------------------------------------------------------------*/

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
	
}


/*----------------removing item from cart---------removes items and updates cart when products added and when quantity incresed.------------------------------------------------------------------*/
function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
/*----------------item quantity changed  from cart---------updates cart when products added and when quantity incresed.------------------------------------------------------------------*/
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
/*-------------------------------adds items to the cart--------------    --------------------------------*/
function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


/*-----------------------------add item to cart--------- places order------------------------*/
function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
	
/*-------------------------------content in cart rows------add cart Aitems and places order------------------------*/
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column" >${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
/*------------------------------updates cart total everytime anything is added or increased-----------------------------------*/
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 //rounding off to 2 decimal
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


//-------------------------------------------------checkout and invoice--------------------
/////////////////////////////////////////////validation-(name and email)////////////////////////////////////////////////////////////////////////////
function Validation(myFormRef){
	   
	let name = myFormRef.name.value;
	let email = myFormRef.email.value;
	
	if (name=="" && email==""){
		alert("Name and Email must filled out");	
	} else if ( email=="" ) {
		alert("Email must be filled out");
	} else if ( email.indexOf("@")==-1 ) {
		alert("Invalid Email");
	} else if ( name=="" ) {
		alert("Name must be filled out");
	}else{
		alert("Thank you for Purchasing");
	}
	
}

 /*--text input fuction--*/
	      function check(){
	      document.getElementById('namej').innerHTML = document.myform.name.value;
		  /*find the document.getElementById('namej') in the page and change the inner html that is the html inside the tag with namej id and putt 
		  into it the value of the myform form of the document. */
		  document.getElementById('e-mailj').innerHTML = document.myform.email.value;
		   
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

/*/////////////////////////////////////js for product gallery////////////////////////////////*/
	 
let ProductImg = document.getElementById("ProductImg");
  let SmallImg= document.getElementsByClassName("small-img");
  
		SmallImg[0].onclick = function()
		{
		  ProductImg.src = SmallImg[0].src;
		}

        SmallImg[1].onclick = function()
		{
		  ProductImg.src = SmallImg[1].src;
		}
        SmallImg[2].onclick = function()
		{
		  ProductImg.src = SmallImg[2].src;
		}
	     SmallImg[3].onclick = function()
		{
		  ProductImg.src = SmallImg[3].src;
		}	  


















