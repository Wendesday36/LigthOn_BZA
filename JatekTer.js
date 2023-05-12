import Elem from "./Elem.js";
class JatekTer {
  #db;
  #allapoLista;
  #meret;
  #lepes;
  constructor() {
    const szuloElem = $("article");
    this.#lepes = 0;
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }
    $(window).on("kapcsolas", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 == 0) {
        event.detail.setAllapot();
      } else {
        event.detail.setAllapot();
      }
      this.#lepes++;

      if (this.#lepes > 8) {
      }
    });
  }
  #setAllapotLista() {}
  #szomszedokKeresese() {}
  #ellenorzes() {}
}

export default JatekTer;
