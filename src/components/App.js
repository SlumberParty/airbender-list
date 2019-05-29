import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import api from '../services/airbender-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //get header DOM
        const header = new Header();
        const headerDOM = header.render();

        //get main DOM
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        //get list DOM
        const airbenderList = new AirbenderList({ characters: [] });
        main.appendChild(airbenderList.render());

        api.getCharacters()
            .then(characters => {
                airbenderList.update({ characters });
            });
            // .catch(err => {
            //     console.log(err);
            // });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;