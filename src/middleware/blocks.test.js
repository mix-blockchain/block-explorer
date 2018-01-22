import * as t from '../actions/types';
import middleware from './blocks';

describe('middleware/blocks', () => {
  let mockStore, mockNext, mockAction, mockDispatch, mockGetState,
      mockAdapter;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockGetState = jest.fn(() => ({ blocks: {}}));
    mockStore = {
      dispatch: mockDispatch,
      getState: mockGetState,
    };
    mockNext = jest.fn();
    mockAdapter = {};
  });

  it('should forward unrecognized actions', () => {
    mockAction = {
      type: 'test/TEST_ACTION',
    };

    middleware(mockStore)(mockNext)(mockAction);

    expect(mockNext).toBeCalledWith(mockAction);
  });

  it('should call getBlocks for the amount of blocks specified', async () => {
    mockAction = {
      type: t.FETCH_BLOCKS,
      payload: {
        requestedBlockNumber: 20,
        amountOfBlocks: 4,
      },
    };
    mockAdapter.getBlocks = jest.fn(numbers => numbers.map(n => ({ number: `N${n}` })));

    await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const expectedBlockNumbers = ['N20', 'N19', 'N18', 'N17'];
    const expectedBlocks = {
      N20: { number: 'N20' },
      N19: { number: 'N19' },
      N18: { number: 'N18' },
      N17: { number: 'N17' },
    };
    const dispatchedAction = mockDispatch.mock.calls[0][0];
    expect(dispatchedAction).toHaveProperty('type', t.FETCH_BLOCKS_SUCCESS);
    expect(dispatchedAction).toHaveProperty('payload');
    expect(dispatchedAction.payload).toHaveProperty('blockNumbers', expectedBlockNumbers);
    expect(dispatchedAction.payload).toHaveProperty('blocks', expectedBlocks);
  });
});
