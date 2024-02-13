const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<link rel="stylesheet" href="../styles/header.css">
<div class="header">
  <img id="presentation" src="../assets/photo_de_groupe.jpg" alr="Photos des jeunes de la Maisonnée" />
  <img id="logo" src="../assets/logo-maisonnee.png" alt="logo de la Maisonnée" />
  <div class="title">
    <h1>La Maisonnée Saint Joseph</h1>
    <h2>Ici on joue, ici on prie</h2>
  </div>
</div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("x-header", Header);
