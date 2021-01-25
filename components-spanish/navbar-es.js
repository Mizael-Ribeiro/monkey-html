class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar main-nav navbar-expand-lg navbar-light">
      <div class="container-fluid container-nav px-0 pt-4">
        <a class="navbar-brand" href="#home">
          <img src="images/monkey-logo.svg" class="monkey-logo" alt="monkey-logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-nav m-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Soluciones
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                <a class="dropdown-item nav-link" href="#supplier">Proveedores</a>
                <a class="dropdown-item nav-link" href="#investidor">Inversionistas</a>
                <a class="dropdown-item nav-link" href="#company">Empresas</a>
              </div>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item nav-link" href="#">Cadena de Suministro</a>
              <a class="dropdown-item nav-link" href="#">Spike</a>
            </div>
          </li>
          <li class="">
              <a class="nav-link" href="#">Quienes Somos</a>
            </li>
            <li class="">
              <a class="nav-link" target="_blank" href="http://help.monkey.exchange/pt-BR/">Dudas</a>
            </li>
            <button class="btn-full-nav mr-2">
              PT
          </button>
          <button class="btn-border-nav">
          <a href="#contact">
          ¿ Quieres conversar?
          </a>
          </button>
          </ul>
        </div>
      </div>
  </nav>
          `;
    }
  }
  
  window.customElements.define("navbar-section", NavBar);
  