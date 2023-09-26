class NagyKepView {

    #kep;
    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#htmlLetrehozas();
        this.balGombElem = $("#bal");
        this.jobbGombElem = $("#jobb");
        this.nagyImgElem = $("#nagyIMG");

        this.balGombElem.on("click",()=>{
            this.#esemenyletrehoz("bal");
        });

        this.jobbGombElem.on("click",()=>{
            this.#esemenyletrehoz("jobb");
        })
    }

    setNagyKepElem(kep){
        this.nagyImgElem.attr("src", kep);
        this.nagyImgElem.attr("alt", kep);
    }

    #esemenyletrehoz(nev){
        const esemeny = new CustomEvent(nev);
        window.dispatchEvent(esemeny);
    }

    #htmlLetrehozas(){
        let txt = `<button id="bal">BAL</button>`;
        txt += `<div><img id="nagyIMG" src="${this.#kep}" alt="${this.#kep}" class="img-rounded"></div>`;
        txt += `<button id="jobb">JOBB</button>`;
        this.szuloElem.html(txt);
    }

} export default NagyKepView