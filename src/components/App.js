import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import api from '../services/airbender-api.js';
import Loading from './Loading.js';
import ErrorDisplay from './ErrorDisplay.js';

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

        const loading = new Loading ({ loading: true });
        main.appendChild(loading.render());

        const errorDisplay = new ErrorDisplay({ error: '' });
        main.appendChild(errorDisplay.render());

        api.getCharacters()
            .then(characters => {
                airbenderList.update({ characters });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loading.update({ loading: false });
            });

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