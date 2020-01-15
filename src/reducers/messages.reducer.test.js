import { messages } from './messages'

describe('messages reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messages(undefined, {})

    expect(result).toEqual(expected)
  });


});