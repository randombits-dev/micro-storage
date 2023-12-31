export const MICRO_STORAGE_ADDRESSES: { [key: number]: `0x${string}` } = {
  43113: '0x17C6E2f2F7fa7A630b09817559934dCDfCCEB4fb', // fuji
  80001: '0x3ba98867576957B3262c552a8bBeC43A2B1fF86c' // mumbai
};

export const WorkerUrl = 'https://micro-storage-api.randombits.workers.dev';


export const COIN_NAMES = {
  80001: {
    '0x326C977E6efc84E512bB9C30f76E30c160eD06FB': 'Link',
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889': 'WMATIC',
    '0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F': 'DAI',
    '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa': 'WETH'
  },
  43113: {
    '0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846': 'Link',
    '0x5085f96Fab5A4F4cD6AceDf8054b431AaCf298f9': 'WETH',
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c': 'WAVAX'
  }
};
