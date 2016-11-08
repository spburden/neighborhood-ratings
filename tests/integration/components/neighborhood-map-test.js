import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neighborhood-map', 'Integration | Component | neighborhood map', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{neighborhood-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#neighborhood-map}}
      template block text
    {{/neighborhood-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
