import createActionOptions from './createActionOptions';
import { OPTIONS } from './othelloActionConstants';

describe('createActionOptions test suite', () => {
  it('default', () => {
    const { type, payload } = createActionOptions();
    expect(type).toEqual(OPTIONS);
    expect(payload).toEqual({});
  });
});
