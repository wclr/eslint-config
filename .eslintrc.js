module.exports = {
  extends: '@whitecolor/eslint-config',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: __dirname + '/tsconfig.json',
  },
}
