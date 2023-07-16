<template>
  <nav class="navbar bg-body-tertiary fixed-top" bg-dark fixed-top>
    <div class="container-fluid">
      <br />
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link to="/ssa2"
            ><a class="nav-link" aria-current="true" href="#"
              >SSA2</a
            ></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/nascidosvivos"
            ><a class="nav-link" href="#">Nascidos Vivos</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/obitos"><a class="nav-link">Obitos</a></router-link>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Sitemas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                ><a class="nav-link" href="#">Login</a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/register"
                ><a class="nav-link" href="#">Registro</a></router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Serviços
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/ssa2"
                    ><a class="dropdown-item" href="#">SSA2</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/nascidosvivos"
                    ><a class="dropdown-item" href="#">Vivos</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/obitos"
                    ><a class="dropdown-item" href="#">Obitos</a></router-link
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link to="/admin/users/dashboard"
                    ><a class="dropdown-item" href="#"
                      >Administrador</a
                    ></router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>
