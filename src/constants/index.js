export const maxBlocksPerPage = 10;

export const tableFields = {
  blocks: [
    {
      key: 'number',
      label: 'Block',
    },
    {
      key: 'time',
      label: 'Time',
    },
    {
      key: 'transactions',
      label: '# of Tx',
    },
    {
      key: 'miner',
      label: 'Mined by',
    },
  ],
  transactions: [
    {
      key: 'hash',
      label: 'Tx Hash',
    },
    {
      key: 'block',
      label: 'Block',
    },
    {
      key: 'amount',
      label: 'Amount',
    },
    {
      key: 'sender',
      label: 'Sent from',
    },
    {
      key: 'receiver',
      label: 'Received by',
    },
  ],
};
