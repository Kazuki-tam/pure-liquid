/**
 * @jest-environment jsdom
 */
import { getMediaQueryList } from './getMediaQueryList';
import './matchMedia.mock';

test('getMediaQueryList', () => {
  expect(getMediaQueryList('md')).toBeTruthy();
});
