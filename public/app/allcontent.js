function loadProducts() {
    $.get('/content', (product) => {
        for (let p of product) {
            $('#posts-container').append($(`
    
    <div class="card-body">
        <img style="width: 17.25rem; height: 17.5rem;" class="card-img-top" src="../../${p.itemimg}" alt="Card image cap">

        <b><u><h3 class="card-title">${p.itemname}</h3></u></b>
        <h5>SPECIAL PRICE</h5>
        <h5 class="card-subtitle mb-2 text-muted">RS. ${p.price}/-</h5>
        <label>Contact details of Seller</label>
        <p class="card-text text-muted">
                ${p.contact}
            </p>
        <center>
            <a href="#" class="btn btn-primary">BUY This For ${p.price}</a><br><br>
            <a href="#" class="btn btn-secondary">ADD TO CART</a><br>
        </center>
    </div>
    
`))
        }
    })
}