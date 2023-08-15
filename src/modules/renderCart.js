const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper')	

    cartWrapper.innerHTML = ''    

    goods.forEach((goodItem) => {
        cartWrapper.insertAdjacentHTML('beforeend', `
            
                <div class="card" data-key="${goodItem.id}">
					${goodItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
						<div class="card-img-wrapper">
							<span class="card-img-top"
								style="background-image: url('${goodItem.img}')"></span>
						</div>
					    <div class="card-body justify-content-between">
						    <div class="card-price">${goodItem.price} ₽</div>
							    <h5 class="card-title">${goodItem.title}</h5>
							    <button class="btn btn-primary">В корзину</button>
						    </div>
					    </div>
			   
        `)
    });
}
export default renderCart