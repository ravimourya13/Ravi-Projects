<!-- home page -->
<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>
        <header>
            <nav
                class="navbar navbar-expand-sm navbar-dark bg-dark"
            >
                <div class="container my-3">
                    <img
                        src="img/logoc.png"
                        class="img-fluid rounded-circle"
                        alt="logo"
                        height="55px"
                        width="55px"
                    />
                
                
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="home.php" aria-current="page"
                                    >Home
                                    <span class="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutus.php">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contactus.php">Contact us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >More</a
                                >
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownId"
                                >
                                    <a class="dropdown-item" href="delete.php"
                                        >Delete Info</a
                                    >
                                    <a class="dropdown-item" href="show.php"
                                        >Show info</a
                                    >
                                </div>
                            </li>
                            
                        </ul>
                        <form class="d-flex my-2 my-lg-0">

                            <button
                                formaction='signup.php'
                                class="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Sign-up
                            </button>
                            
                        </form>
                    </div>
                </div>
            </nav>
            
        </header>
        <main>
            <div class="container my-3">
                <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                  <ol class="carousel-indicators">
                    <li
                      data-bs-target="#carouselId"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="First slide"
                    ></li>
                    <li
                      data-bs-target="#carouselId"
                      data-bs-slide-to="1"
                      aria-label="Second slide"
                    ></li>
                    <li
                      data-bs-target="#carouselId"
                      data-bs-slide-to="2"
                      aria-label="Third slide"
                    ></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img
                      src="img/cr1.jpg"
                      class="w-100 d-block"
                      alt="Third slide"
                      height="500px"
                      width="600px"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                      src="img/cr3.jpg"
                      class="w-100 d-block"
                      alt="Third slide"
                      height="500px"
                      width="600px"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="img/cr2.jpg"
                        class="w-100 d-block"
                        alt="Third slide"
                        height="500px"
                        width="600px"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
        
              <div class="container mt-5">
                <h3 class="text-center text-bold">Services</h3>
                <div class="row justify-content-center align-items-center g-2">
                  <div class="col">
                    <div class="card text-start">
                      <img
                        class="card-img-top"
                        src="img/car1.jpg"
                        height="300px"
                        width="250px"
                        alt="Title" 
                      />
                      <div class="card-body">
                        <h4 class="card-title text-center">Blue</h4>
                        <p class="card-text p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Ratione, minus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card text-start">
                      <img
                        class="card-img-top"
                        src="img/car2.jpg"
                        height="300px"
                        width="250px"
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title text-center">Yellow</h4>
                        <p class="card-text p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Ratione, minus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card text-start">
                      <img
                        class="card-img-top"
                        src="img/car3.jpg"
                        height="300px"
                        width="250px"
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title text-center">Red</h4>
                        <p class="card-text p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Ratione, minus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card text-start">
                      <img
                        class="card-img-top"
                        src="img/car4.jpg"
                        height="300px"
                        width="250px"
                        alt="Title"
                      />
                      <div class="card-body">
                        <h4 class="card-title text-center">White</h4>
                        <p class="card-text p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Ratione, minus.
                        </p>
                      </div>
                    </div>
                  </div>
</main>
<footer class="text-center bg-dark text-light p-3">
    <blockquote>&copy; All Rights Reserved by Jerry</blockquote>
  </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
