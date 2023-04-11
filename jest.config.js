module.exports = {
  globals: { 
    ENABLE_INNER_HTML: true, 
    ENABLE_ADJACENT_HTML: true, 
    ENABLE_SIZE_APIS: true, 
    ENABLE_TEMPLATE_CONTENT: true, 
    ENABLE_MUTATION_OBSERVER: true, 
    ENABLE_CLONE_NODE: true, 
    ENABLE_CONTAINS: true, },
  verbose: true,
  moduleNameMapper: {
    '@tarojs/components': '<rootDir>/node_modules/@tarojs/components/dist/index.js',
    '@tarojs/taro':'<rootDir>/node_modules/@tarojs/taro/index.js',
    '^.+\\.(css|scss|less)$': '<rootDir>/tests/style-mock.js',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/fileMock.js",
    // 
    // "\\.(css|less|scss|sss|styl)$": "jest-css-modules"

    
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.esm.js?$': 'ts-jest',
  },
  
  rootDir: __dirname,
  setupFiles: ['<rootDir>/tests/setupTests'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$'],
};