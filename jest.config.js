module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.{js,vue}',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/dist/**',
        '!**/tests/**',
    ],
    coverageReporters: [
        'lcov',
        'text',
    ],
};
