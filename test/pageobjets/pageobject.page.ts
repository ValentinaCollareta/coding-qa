import Page from './page.js';

class LoginPage extends Page {

    get firstImg() { return $('img[alt="elEconomista.es"]'); }
    get menu() { return $('button[aria-label="Toggle navigation"]') }
    get mercados() { return $('[aria-controls="Mercados y Cotizaciones"]'); }
    get indicesMundiales() { return $('a*=Índices mundiales'); }
    get indicesMundialesH1() { return $('h1*=Índices mundiales'); }

    span (name:string) {
        return $('a*='+ name).parentElement().nextElement().$('span');
       }

    open() {
        super.open('login');
    }

}

export default new LoginPage();