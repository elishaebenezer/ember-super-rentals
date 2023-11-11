import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Map
        @lat="37.7797" @lng="-122.4184"
        @zoom="9"
        @width="150" @height="120"
        alt="A map of San Francisco"
      />`);

    assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
    assert.dom('.map img')
      .hasAttribute('src', /^https:\/\/maps.geoapify.com\//)
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');
  });
});
