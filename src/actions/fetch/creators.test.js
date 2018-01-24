import * as actions from './creators';
import * as t from './types';

describe('actions/creators/fetch', () => {
  describe('fetchAccount', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchAccount('test');

      expect(action).toHaveProperty('type', t.FETCH_ACCOUNT);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('address', 'test');
    });
  });

  describe('fetchAccountSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchAccountSuccess({ test: true });

      expect(action).toHaveProperty('type', t.FETCH_ACCOUNT_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('test', true);
    });
  });

  describe('fetchBlocks', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchBlocks(10, 5);

      expect(action).toHaveProperty('type', t.FETCH_BLOCKS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('requestedBlockNumber', 10);
      expect(action.payload).toHaveProperty('amountOfBlocks', 5);
    });
  });

  describe('fetchBlocksSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchBlocksSuccess({ test: true }, ['test']);

      expect(action).toHaveProperty('type', t.FETCH_BLOCKS_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('blockNumbers', { test: true });
      expect(action.payload).toHaveProperty('blocks', ['test']);
    });
  });

  describe('fetchTransactions', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchTransactions(['test']);

      expect(action).toHaveProperty('type', t.FETCH_TRANSACTIONS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('hashes', ['test']);
    });
  });

  describe('fetchTransactionsSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchTransactionsSuccess({ test: true });

      expect(action).toHaveProperty('type', t.FETCH_TRANSACTIONS_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('test', true);
    });
  });
});
