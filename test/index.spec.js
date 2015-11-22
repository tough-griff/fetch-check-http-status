/* eslint-env mocha */
import expect from 'expect.js';

import checkStatus from '../src';

describe('checkStatus', () => {
  it('exports a function', () => {
    expect(checkStatus).to.be.a('function');
  });

  context('on a successful request', () => {
    const response = {
      status: 200,
    };

    it('returns the response object', () => {
      expect(checkStatus(response)).to.equal(response);
    });
  });

  context('on a failure', () => {
    const response = {
      status: 404,
      statusText: 'The page could not be found',
    };

    const subject = checkStatus(response);

    it('returns an error', () => {
      expect(subject).to.be.an(Error);
    });

    it('attaches the response object to the error', () => {
      expect(subject.response).to.equal(response);
    });
  });
});
