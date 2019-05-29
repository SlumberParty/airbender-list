import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        return /*html*/`
            <li>
                <h2 class="name">${character.name}</h2>
                <img src="${character.photoUrl}" 
                alt="${character.name}">
                <blockquote>Profession: ${character.profession}<br>Allies: ${character.allies}</blockquote>
            </li>
        `;
    }
}

export default AirbenderItem;