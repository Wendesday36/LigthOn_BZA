class Lampa {
  #allapot;
  #index;
  #DivElem;
  constructor(szuloElem, index,allapot) {
    this.szuloElem = szuloElem;
    this.#index = index ;
    this.#allapot = allapot
    szuloElem.append(`<div class="elem"></div>`);
    this.#DivElem = $(`article div:last-child`);
    this.#SzinBeallit(allapot);
    this.#DivElem.on("click", () => {
      /* this.setElem("X"); */
      
        this.#Kattintastrigger();
       

      this.setAllapot(this.#allapot);
    });
  }

  setAllapot(allapot) {
    this.#allapot = !this.#allapot;
    this.#SzinBeallit(this.#allapot);
    
  }
  #SzinBeallit(allapot) {
    if ((allapot == false )) {
      this.#DivElem.css("background-color", "yellow");
      
    } else {
      this.#DivElem.css("background-color", "green");
      
      
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
