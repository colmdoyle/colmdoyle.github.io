// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#');
  expect(getContactHref('telegram', '#')).toBe('https://t.me/#');
  expect(getContactHref('rss', '#')).toBe('#');
  expect(getContactHref('linkedin', '#')).toBe('#');
  expect(getContactHref('instagram', '#')).toBe('#');
  expect(getContactHref('line', '#')).toBe('#');
  expect(getContactHref('facebook', '#')).toBe('#');
  expect(getContactHref('gitlab', '#')).toBe('#');
  expect(getContactHref('weibo', '#')).toBe('#');
});