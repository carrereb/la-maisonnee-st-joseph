const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/footer.css">
<div class="footer">
  <hr class="separation" />
  <div class="content">
    <p>Dernière mise à jour le 09/02/2024</p>
    <p>© La Maisonnée Saint Joseph</p>
  </div>
</div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define("x-footer", Footer);
