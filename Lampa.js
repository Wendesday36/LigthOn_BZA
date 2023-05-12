class Lampa {
  #allapot;
  #index;
  #DivElem;
  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.index = index;
    this.#allapot = true;
    szuloElem.append(`<div class="elem"></div>`);
    this.#DivElem = $(`article div:last-child`);
    this.#DivElem.on("click", () => {
      /* this.setElem("X"); */
      if (this.#allapot) {
        this.#Kattintastrigger();
        
      }

      this.setAllapot(this.#allapot);
    });
  }

  setAllapot(allapot) {
    this.#allapot = !this.#allapot;
    this.#SzinBeallit(allapot);
    this.#DivElem.html(allapot);
  }
  #SzinBeallit(allapot) {
    if ((allapot == false)) {
      this.#DivElem = $("article div:last-child").css("background-color", "yellow");
    } else {
      this.#DivElem = $("article div:last-child").css("background-color", "yellow");
    }
  }
  #Kattintastrigger() {
    const esemeny = new CustomEvent("kapcsolas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Lampa;
