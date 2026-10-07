function Hero() {
  return (
    <section
      id="home"
      className="bg-info text-white text-center py-5"
    >
      <div className="container py-5">

    <img src="/heropic.png" 
  className="card-img-top mx-auto d-block"
  style={{ width: "1000px", height: "500px", objectFit: "contain" }}
  alt="heropic" 

/>

        <h1 className="display-3 fw-bold">
          Healthy Skin, Happy You
        </h1>

        <p className="lead">
          Simple skincare for beautiful and healthy skin.
        </p>

        <button className="btn btn-light btn-lg fw-bold">
          Explore Products
        </button>

      </div>
    </section>
  );
}

export default Hero;