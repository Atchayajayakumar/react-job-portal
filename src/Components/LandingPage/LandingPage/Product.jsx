function Products() {
  return (
    <section id="products" className="py-5 bg-white">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">
            Our Products
          </h2>

          <p className="text-secondary">
            Discover our simple and effective skincare products.
          </p>
        </div>

        <div className="row g-4">

        
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">

              <div className="card-body text-center">
                <div className="display-1"></div>

                <h4 className="card-title text-primary">
                  Face Wash
                </h4>
                             <img src="/Facewash.png" 
  className="card-img-top mx-auto d-block"
  style={{ width: "180px", height: "180px", objectFit: "contain" }}
  alt="Facewash" 

/>

                <p className="card-text text-secondary">
                  Gentle face wash for clean and fresh skin.
                </p>

                <h5 className="text-success">
                  ₹299
                </h5>

                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

      
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">

              <div className="card-body text-center">
                <div className="display-1"></div>

                <h4 className="card-title text-danger">
                  Moisturizer
                </h4>
                <img src="/moisturizer.png"
  className="card-img-top mx-auto d-block"
  style={{ width: "180px", height: "180px", objectFit: "contain" }}
  alt="moisturizer"
/>

                <p className="card-text text-secondary">
                  Keeps your skin soft, smooth and hydrated.
                </p>

                <h5 className="text-success">
                  ₹399
                </h5>

                <button className="btn btn-danger">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>


          <div className="col-md-4">
            <div className="card h-100 shadow border-0">

              <div className="card-body text-center">
                <div className="display-1"></div>

                <h4 className="card-title text-warning">
                  Sunscreen
                </h4>
                              <img src="/sunscreen.png"
  className="card-img-top mx-auto d-block"
  style={{ width: "180px", height: "180px", objectFit: "contain" }}
  alt="sunscreen"
/>

                <p className="card-text text-secondary">
                  Protect your skin from harmful sunlight.
                </p>

                <h5 className="text-success">
                  ₹499
                </h5>

                <button className="btn btn-warning">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Products;