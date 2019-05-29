import AirbenderItem from '../src/components/AirbenderItem.js';

const test = QUnit.test;

QUnit.module('Airbender Item');

test('checks that html is same as import data', (assert) => {
    // Arrange
    const character = {
        'allies': [
            'Asami Sato'
        ],
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044',
        'name': 'Butler',
        'profession': 'Butler',
    };
  
    const airbenderItem = new AirbenderItem({ character });
    const rendered = airbenderItem.renderTemplate();

    // Act
 

    // Assert
    assert.htmlEqual(rendered, /*html*/`
        <li class="airbender-item">
            <h2>Butler</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/8/82/Butler.png/revision/latest?cb=20121107115044" alt="Butler">
            <blockquote>Profession: Butler<br>Allies: Asami Sato</blockquote>
        </li>
    `);
});