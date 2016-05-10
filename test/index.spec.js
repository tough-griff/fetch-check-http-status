/* eslint-env mocha */
import expect from 'expect.js';

import checkStatus from '../src';

describe('checkStatus()', () => {
  it('exports a function', () => {
    expect(checkStatus).to.be.a('function');
  });

  context('on a successful request', () => {
    const response = {
      status: 200,
    };

    it('returns the response object', () => {
      const result = checkStatus(response);
      expect(result).to.equal(response);
    });
  });

  context('on a failure', () => {
    const response = {
      status: 404,
      statusText: 'The page could not be found',
    };

    it('throws an error', () => {
      expect(checkStatus).withArgs(response)
        .to.throwError(/The page could not be found/);
    });

    it('attaches the response object to the error', () => {
      expect(checkStatus).withArgs(response)
        .to.throwError(err => {
          expect(err.response).to.equal(response);
        });
    });
  });
});
