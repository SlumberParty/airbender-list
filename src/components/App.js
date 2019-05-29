import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';

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
        const airbenderList = new AirbenderList();
        main.appendChild(airbenderList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <ul class="airbender-list">
                        <li class="airbender-item">
                            <h2>Butler</h2>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044" alt="Butler">
                            <blockquote>Profession: Butler<br>Allies: Asami Sato</blockquote>
                        </li>
                        <li class="airbender-item">
                            <h2>Innkeeper</h2>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/3/32/Innkeeper.png/revision/latest?cb=20140802073911" alt="Innkeeper">
                            <blockquote>Profession: Inkeeper<br>Allies:[] </blockquote>
                        </li>
                        <li class="airbender-item">
                            <h2>Hahn</h2>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/4/46/Hahn.png/revision/latest?cb=20140122221732" alt="Hahn">
                            <blockquote>Profession: Soldier<br>Allies: Northern Water Tribe</blockquote>
                        </li>
                    </ul>
                </main>
            </div>
        `;
    }
}

export default App;