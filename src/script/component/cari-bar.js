class CariBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#cariElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .cari-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           display: flex;
           top: 10px;
           background-color: #FFE55C;
       }
      
       .cari-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid #212936;
           font-weight: bold;
       }
      
       .cari-container > input:focus {
           outline: 0;
           border-bottom: 2px solid #212936;
       }
      
       .cari-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .cari-container >  input::placeholder {
           color: #800000;
           font-weight: bold;
           font-family: sans-serif;
       }
      
       .cari-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #800000;
           color: #FFE55C;
           border: 0;
           text-transform: uppercase;
           font-family: sans-serif;
       }
      
       @media screen and (max-width: 550px){
           .cari-container {
               flex-direction: column;
               position: static;
           }
      
           .cari-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .cari-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="cari-container" class="cari-container">
           <input placeholder="Cari Cocktail" id="cariElement" type="cari">
           <button id="cariButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#cariButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("cari-bar", CariBar);