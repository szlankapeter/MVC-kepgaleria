import Model from "../model/Model.js"
import NagyKepView from "../view/NagyKepView.js";

class Controller {

    constructor() {
        const MODEL = new Model();
        const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep());

        
        $(window).on("bal", ()=>{
            MODEL.bal();
            let akt = MODEL.getAktKep();
            NAGYKEP.setNagyKepElem(akt);
        })

        $(window).on("jobb", ()=>{
            MODEL.jobb();
            let akt = MODEL.getAktKep();
            NAGYKEP.setNagyKepElem(akt);
        })
    }

} export default Controller