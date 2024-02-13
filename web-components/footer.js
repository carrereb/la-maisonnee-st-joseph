const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/footer.css">
<div class="footer">
  <hr class="separation" />
  <div class="content">
    <div id="info">
      <p>Dernière mise à jour le 09/02/2024</p>
      <p>© La Maisonnée Saint Joseph</p>
    </div>
    <div id="address">
      <h3><a href="https://www.google.com/maps/search/?api=1&channel=mws-visit&hl=fr-FR&query=43.606755,3.865610">Adresse</a></h3>
      <p>43 rue du Faubourg Figuerolles</p>
      <p>34070 Montpellier</p>
    </div>
    <div id="contacts">
      <a href="contacts.html">Contacts</a>
    </div>
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
