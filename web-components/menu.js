const menuTemplate = document.createElement("template");

menuTemplate.innerHTML = `
<link rel="stylesheet" href="../styles/menu.css">
<div class="menu">
  <a href="../accueil/index.html">Accueil</a>
  <a href="../informations-pratiques/index.html" onmouseenter="Menu.getMenu().showUnderMenu('informations-pratiques')" onmouseleave="Menu.getMenu().hideUnderMenu('informations-pratiques')">Informations pratiques</a>
  <div id="informations-pratiques" onmouseenter="Menu.getMenu().showUnderMenu('informations-pratiques')" onmouseleave="Menu.getMenu().hideUnderMenu('informations-pratiques')">
    <a href="../informations-pratiques/horaires.html">Horaires</a>
    <a href="../informations-pratiques/inscriptions.html">Inscriptions</a>
  </div>
  <a href="../activites/index.html" onmouseenter="Menu.getMenu().showUnderMenu('activites')" onmouseleave="Menu.getMenu().hideUnderMenu('activites')">Activités</a>
  <div id="activites" onmouseenter="Menu.getMenu().showUnderMenu('activites')" onmouseleave="Menu.getMenu().hideUnderMenu('activites')">
    <a href="../activites/camps.html">Camps</a>
    <a href="../activites/evenements.html">Événements</a>
  </div>
  <a href="../contacts/index.html">Contacts</a>
</div>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(menuTemplate.content.cloneNode(true));
  }

  static getMenu() {
    return document.getElementsByTagName("x-menu")[0]
  }

  showUnderMenu(id) {
    const underMenu = this._shadowRoot.getElementById(id);
    underMenu.style.display = "flex";
  }

  hideUnderMenu(id) {
    const underMenu = this._shadowRoot.getElementById(id);
    underMenu.style.display = "none";
  }
}

window.customElements.define("x-menu", Menu);
