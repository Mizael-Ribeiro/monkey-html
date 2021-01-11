class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
          <nav class="navbar main-nav navbar-expand-lg navbar-light">
          <div class="container-fluid container-nav px-0 pt-4 border-test">
            <a class="navbar-brand" href="#home">
              <img src="images/monkey-logo.svg" class="monkey-logo" alt="monkey-logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-nav m-0">
                <li class="">
                  <a class="nav-link " href="#supplier">Fornecedores</a>
                </li>
                <li class="">
                  <a class="nav-link" href="#investidor">Instituições Financeiras</a>
                </li>
                <li class="">
                  <a class="nav-link" href="#company">Empresas</a>
                </li>
                <li class="">
                  <a class="nav-link" href="#">Quem Somos</a>
                </li>
                <li class="">
                  <a class="nav-link" target="_blank" href="http://help.monkey.exchange/pt-BR/">Dúvidas</a>
                </li>
                <button class="btn-full-nav mr-2">
                  PT
              </button>
              <button class="btn-border-nav">
              <a href="#contact">
              Vamos Conversar?
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
  