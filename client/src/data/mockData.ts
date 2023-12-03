// generate test file data
export const TEST_FILE_DATA = [
  {
    id: '1',
    name: 'test1',
    type: 'file',
    size: 100,
    lastModified: 1620652800000
  },
  {
    id: '2',
    name: 'test2',
    type: 'file',
    size: 200,
    lastModified: 1620652800000,
    parent: 'd1',
  },
  {
    id: '3',
    name: 'test3',
    type: 'file',
    size: 300,
    lastModified: 1620652800000,
    parent: 'd3'
  },
  {
    id: 'd1',
    name: 'testDir1',
    type: 'folder'
  },
  {
    id: 'd2',
    name: 'testDir2',
    type: 'folder'
  },
  {
    id: 'd3',
    name: 'testDir3',
    type: 'folder',
    parent: 'd2',
  }
];
