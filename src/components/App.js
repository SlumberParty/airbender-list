import Component from './Component.js';

class App extends Component {

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <ul>
                        <li>
                            <h1>Butler</h1>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044" alt="Butler">
                            <blockquote>Profession: Butler<br>Allies: Asami Sato</blockquote>
                        </li>
                        <li>
                            <h1>Innkeeper</h1>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/3/32/Innkeeper.png/revision/latest?cb=20140802073911" alt="Innkeeper">
                            <blockquote>Profession: Inkeeper<br>Allies:[] </blockquote>
                        </li>
                        <li>
                            <h1>Hahn</h1>
                            <img src="https://vignette.wikia.nocookie.net/avatar/images/4/46/Hahn.png/revision/latest?cb=20140122221732" alt="Hahn">
                            <blockquote>Profession: Soldier<br>Allies: Northern Water Tribe</blockquote>
                        </li>
                    </ul>
                </main>
            </div>
        `;
    }
};

export default App;