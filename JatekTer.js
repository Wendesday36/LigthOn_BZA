import Lampa from "./Lampa.js";
class JatekTer {
  #db;
  #allapoLista;
  #meret;
  #lepes;
  constructor() {
    const szuloElem = $("article");
    this.#lepes = 0;
    this.#meret = 9;
    this.#allapoLista = [];
    for (let index = 0; index < 9; index++) {
      const elem = new Lampa(szuloElem, index);
    }
    $(window).on("kapcsolas", (event) => {
      console.log(event.detail);

      event.detail.setAllapot(this.#allapoLista);

      this.#lepes++;

      if (this.#lepes > 8) {
      }
    });
  }
  #setAllapotLista() {
    for (let i = 0; i < this.#allapoLista.length; i++) {
      this.#allapoLista[i[elem]] = Math.random();
      if (this.#allapoLista[i[elem]] == 1) {
        this.#allapoLista[i[elem]] == true;
      } else {
        this.#allapoLista[i[elem]] == false;
      }
    }
  }
  #szomszedokKeresese(index) {}
  #ellenorzes() {}
}

export default JatekTer;
