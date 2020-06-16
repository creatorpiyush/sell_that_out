function loadProducts() {
  $.get("/content", (product) => {
    for (let p of product) {
      $("#posts-container").append(
        $(`
        
          <div class="card">
              <img class="card-img-top" id="images" src="../../${p.itemimg}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${p.itemname}</h5>
            <p class="card-text">
              ${p.contact}
            </p>
            <center>
                    <a href="#" class="btn btn-primary">BUY This For ${p.price}</a><br><br>
                    <a href="#" class="btn btn-secondary">ADD TO CART</a><br>
                </center>
          </div>
          

        <style>
        #images{
          height:300px;
          width: 100%;
        }
      </style>
`)
      );
    }
  });
}
