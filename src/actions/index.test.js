import * as actions from '../actions';
import { errorMsg } from '../reducers/errorMsg';

describe('actions', () => {
  it('should have a type of CREATE_USER', () => {
    const user = {
      first: 'Leo',
      Last: 'Cat'
    }
    const expected = {
      type: 'CREATE_USER',
      user
    }

    const result = actions.createUser(user);

    expect(result).toEqual(expected)
  });

  it('should have a type of REMOVE_USER', () => {
    const expected = {
      type: 'REMOVE_USER',
    }

    const result = actions.removeUser();

    expect(result).toEqual(expected)
  });

  it('should have a type of HAS_ERRORED', () => {
    const errorMsg = 'Error occurred'
    const expected = {
      type: 'HAS_ERRORED',
      errorMsg
    }

    const result = actions.hasErrored(errorMsg);

    expect(result).toEqual(expected)
  });

  // it('should have a type of ADD_MESSAGE', () => {
  //   const message = 'Added message'
  //   const expected = {
  //     type: 'ADD_MESSAGE',
  //     message
  //   }

  //   const result = actions.addMessage(message);

  //   expect(result).toEqual(expected)
  // });

  it('should have a type of REMOVE_MESSAGE', () => {
    const expected = {
      type: 'REMOVE_MESSAGE',
    }

    const result = actions.removeMessage();

    expect(result).toEqual(expected)
  });
});