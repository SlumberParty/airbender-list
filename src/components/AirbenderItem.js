import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        const src = character.photoUrl || './assets/not-found.jpg';
        
        function encodeSearchParam(param, name) {
            const sp = new URLSearchParams();
            sp.set(param, name);
            return sp.toString();
        }

        return /*html*/`
            <li class="airbender-item">
                <h2>${character.name}</h2>
                <img src="${src}" 
                alt="${character.name}">
                <blockquote>
                <a href="#${encodeSearchParam('allies', character.name)}">Allies</a>
                <a href="#${encodeSearchParam('enemies', character.name)}">Enemies</a>
                </blockquote>
                </li>
            `;
    }
}
        
export default AirbenderItem;
        
