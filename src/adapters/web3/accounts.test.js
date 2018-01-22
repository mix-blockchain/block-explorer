import * as web3 from './accounts';

describe('adapters/web3/accounts', () => {
  let mockGetInstance, mockEth;

  beforeEach(() => {
    mockEth = {};
    mockGetInstance = jest.fn(() => ({
      eth: mockEth,
    }));
  });

  describe('getBalance', () => {
    it('should reject if getting the block failed', async () => {
      mockEth.getBalance = (a, callback) => callback('rejected');

      await expect(web3.getBalance('test', mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the block number', async () => {
      mockEth.getBalance = (a, callback) => callback(null, 10);

      await expect(web3.getBalance('test', mockGetInstance))
        .resolves.toEqual(10);
    });
  });

  describe('getTransactionCount', () => {
    it('should reject if getting the block failed', async () => {
      mockEth.getTransactionCount = (a, callback) => callback('rejected');

      await expect(web3.getTransactionCount('test', mockGetInstance))
        .rejects.toEqual('rejected');
    });

    it('should resolve with the block number', async () => {
      mockEth.getTransactionCount = (a, callback) => callback(null, 10);

      await expect(web3.getTransactionCount('test', mockGetInstance))
        .resolves.toEqual(10);
    });
  });
});
