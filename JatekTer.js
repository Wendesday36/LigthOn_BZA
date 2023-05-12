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
    this.#allapoLista = [false,false,false,false,false,false,false,false,false];
    this.#setAllapotLista();
    for (let index = 0; index < 9; index++) {
      const elem = new Lampa(szuloElem, index,this.#allapoLista[index]);

    } 
    $(window).on("kapcsolas", (event) => {
      console.log(event.detail);

      event.detail.#setAllapotLista();
      this.#db++;
      this.#lepes++;

    });
  }
  #setAllapotLista() {
    
    for (let index = 0; index < this.#allapoLista.length; index++) {
      const szam = Math.floor(Math.random() * 3) + 1;
      console.log(szam)
      if (szam == 1) {
        this.#allapoLista[index] = true;
      } else {
        this.#allapoLista[index] = false;
      }
    }
  }
  #szomszedokKeresese(index) {}
  #ellenorzes() {}
}

export default JatekTer;
