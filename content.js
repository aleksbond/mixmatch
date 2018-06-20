chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
			const cartProducts = document.querySelector('.mini-cart-products');
			const cartImages = cartProducts.querySelectorAll('.mini-cart-image > img');

			cartImages.forEach((image) => {
				let imgSrc = image.src;
				imgSrc = imgSrc.replace('sw=100', 'sw=177');
				imgSrc = imgSrc.replace('sh=143', 'sh=252');
				console.log(imgSrc);
			});
    }
  }
);
