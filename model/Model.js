import { KEPLISTA } from "./adat.js";

class Model {

    #kepLista = [];
    #id;
    constructor() {
        this.#kepLista = KEPLISTA
        this.#id = 0;
    }

    getList() {
        return [...this.#kepLista];
    }

    getAktKep() {
        return this.#kepLista[this.#id];
    }

    jobb() {
        this.#id++;
        if (this.#id > this.#kepLista.length - 1) {
            this.#id = 0;
        }
    }

    bal() {
        this.#id--;
        if (this.#id < 0) {
            this.#id = this.#kepLista.length - 1;
        }
    }

} export default Model