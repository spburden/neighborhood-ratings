import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neighborhood-list', 'Integration | Component | neighborhood list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{neighborhood-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#neighborhood-list}}
      template block text
    {{/neighborhood-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
