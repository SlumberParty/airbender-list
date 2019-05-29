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

        const loading = new Loading ({ loading: false });
        main.appendChild(loading.render());

        const errorDisplay = new ErrorDisplay({ error: '' });
        main.appendChild(errorDisplay.render());

        function loadCharacters() {
            const params = window.location.hash.slice(1);
            console.log(window.location.hash);
            
            const searchParams = new URLSearchParams(params);
            const search = searchParams.toString();

            loading.update({ loading: true });

            api.getCharacters(search)
                .then(characters => {
                    airbenderList.update({ characters });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loading: false });
                });

        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <a class="show-all" href="./">Show All Characters</a>
                    <button>Fire Type</button>
                    <button>Water Type</button>
                    <button>Earth Type</button>
                    <button>Air Type</button>
                </main>
            </div>
        `;
    }
}

export default App;