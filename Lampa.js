class Lampa {
  #allapot;
  #db;
  #DivElem;
  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.index = index;
    this.#allapot = true;
    szuloElem.append(`<div class="elem"></div>`);
    this.#DivElem = $(`article div:last-child`);
    this.divElem.on("click", () => {
      /* this.setElem("X"); */
      if (this.#allapot) {
        this.esemenytrigger();
        this.setAllapot();
      }

      this.#allapot = false;
    });
  }

  setAllapot(allapot) {
    this.allapot = false;
    this.SzinBeallit();
  }
  #SzinBeallit(allapot) {
    if ((allapot = false)) {
      szin = yellow;
    } else {
      szin = green;
    }
  }
  esemenytrigger() {
    const esemeny = new CustomEvent("kapcsolas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Lampa;
