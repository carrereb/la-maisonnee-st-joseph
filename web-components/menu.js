const menuTemplate = document.createElement("template");

menuTemplate.innerHTML = `
<link rel="stylesheet" href="styles/menu.css">
<div class="menu">
  <a href="index.html">Accueil</a>
  <a href="informations-pratiques.html">Informations pratiques</a>
  <a href="activites.html">Activités</a>
  <a href="contacts.html">Contacts</a>
</div>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(menuTemplate.content.cloneNode(true));
  }
}

window.customElements.define("x-menu", Menu);
