module.exports = {
  name: 'nx-monorepo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
