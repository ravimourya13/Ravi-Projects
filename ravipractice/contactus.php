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
                                <a class="nav-link " href="home.php" aria-current="page"
                                    >Home
                                    <span class="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutus.php">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="contactus.php">Contact us</a>
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
        <main>  <div class="container my-2">
            <h3 class="text-center Color-danger">Company Detail</h3>
            <div class="table-responsive">
              <table class="table table-danger">
                <thead>
                  <tr>
                    <th scope="col">Site Name:-</th>
                    <th scope="col">Jerry Sports</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td scope="row">Call-Us:-</td>
                    <td>9152054254</td>
                  </tr>
                  <tr class="">
                    <td scope="row">Address:-</td>
                    <td>Jerry sports , bov west </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="container">
            <h3 class="text-center">Query Form</h3>
            <div class="row justify-content-center align-items-center g-2">
              <div class="col-md-5">
                <div class="card">
                  <div class="card-body">
                    <form action="home.html">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="formId1"
                          id="formId1"
                          placeholder=""
                        />
                        <label for="formId1">Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="formId1"
                          id="formId1"
                          placeholder=""
                        />
                        <label for="formId1">Gmail</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="formId1"
                          id="formId1"
                          placeholder=""
                        />
                        <label for="formId1">Query</label>
                      </div>
                      <button
                      formaction="home.html"
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                  >
                  <a href="home.php" class="text-center">Submit</a>
                  </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="container text-center my-3" width=50px>
            <h1>Our Loaction</h1>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15068.407883741222!2d72.84637358715815!3d19.2343872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1cfbcd3fa7b%3A0xde9f81ea716db9f3!2sHuff%20%26%20Purr%20-%20the%20pet%20store!5e0!3m2!1sen!2sin!4v1723873716617!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
