import assert from 'assert';
import cmhc from '../lib';

describe('cmhc', () => {
  it('calculates uncapped CMHC premiums', () => {
    assert.equal(cmhc(0.2), 0.0125);
  });

  it('calculates optional (capped) CMHC premiums', () => {
    assert.equal(cmhc(0.2, true), 0);
    assert.equal(cmhc(0.1, true), 0.024);
  });

  it('calculates unconventional CMHC premiums', () => {
    assert.equal(cmhc(0.03), 0.0385);
  });
});
