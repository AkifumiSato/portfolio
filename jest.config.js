module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist', 'public'],
}