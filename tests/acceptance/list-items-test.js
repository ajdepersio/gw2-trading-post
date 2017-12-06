import {
  test
} from 'qunit';
import moduleForAcceptance from 'trading-post/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list items');

test('should show items as the home page', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/items', 'should redirect automatically');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should list available items.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should filter the list of items by type.', function (assert) {});

test('should show details for a selected item', function (assert) {});

test('visiting /', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
  });
});
