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

      event.detail.setAllapot(this.#setAllapotLista());

      this.#lepes++;

      if (this.#lepes > 8) {
      }
    });
  }
  #setAllapotLista() {
    for (let index = 0; index < this.#allapoLista.length; index++) {
      const szam = Math.random();
      this.#allapoLista[i[(elem.szuloElem, elem.index)]] == szam;
      if (szam == 1) {
        this.#allapoLista[i[elem.setAllapot]] == true;
      } else {
        this.#allapoLista[i[elem.setAllapot]] == false;
      }
    }
  }
  #szomszedokKeresese(index) {}
  #ellenorzes() {}
}

export default JatekTer;
