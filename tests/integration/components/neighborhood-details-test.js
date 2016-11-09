import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neighborhood-details', 'Integration | Component | neighborhood details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{neighborhood-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#neighborhood-details}}
      template block text
    {{/neighborhood-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
