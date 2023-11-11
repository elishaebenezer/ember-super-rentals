import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders contents inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>How are you?</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('How are you?');
    assert.dom('.jumbo .tomster').exists();
  });
});
