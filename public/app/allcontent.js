function loadPosts() {
    $.get('/content', (product) => {
        for (let p of product) {
            $('#posts-container').append($(`
<div class="col-4">
    <div class="card m-2">
        <img src="../../${p.itemimg}" class="card-img-top">
        <div class="card-body">
            <h5>${p.itemname}</h5>
            <h5>SPECIAL PRICE</h5>
            <h5 class="card-subtitle mb-2 text-muted">RS. ${p.price}</h5>
            <label>Contact details</label>
            <p class="card-text text-muted">
                ${p.contact}
            </p>
            
        </div>
        <center><a href="#" class="card-link"><input type="button" value="BUY"></a><br><br></center>
        <center><a href="#" class="card-link"><input type="button" value="ADD TO CART"></a><br><br></center>
    </div>
</div>

`))
        }
    })
}