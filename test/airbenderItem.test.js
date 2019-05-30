import AirbenderItem from '../src/components/AirbenderItem.js';

const test = QUnit.test;

QUnit.module('Airbender Item');

test('checks that html is same as import data', (assert) => {
    // Arrange
    const character = {
        '_id': '5cdf0769b6e02a467e3e766b',
        'allies': [
            'Royal Earthbender Guards'
        ],
        'enemies': [
            'Chin'
        ],
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King',

    };
  
    const airbenderItem = new AirbenderItem({ character });
    const rendered = airbenderItem.renderTemplate();

    // Act
 

    // Assert
    assert.htmlEqual(rendered, /*html*/`
        <li class="airbender-item">
            <h2>46th Earth King</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
            <blockquote>
            <a href="#allies=46th+Earth+King">Allies</a>
            <a href="#enemies=46th+Earth+King">Enemies</a>
            </blockquote>
        </li>
    `);
});