import path from 'path';

const
    isDevMode = process.env.NODE_ENV !== 'production',
    isTestMode = process.env.NODE_ENV === 'test',
    TEST_DATA_PATH = path.resolve(__dirname ,'../testData');

export default {
    TEST_DATA_PATH: process.env.TEST_DATA_PATH || TEST_DATA_PATH,
    TEST_DATA_ONE: process.env.TEST_DATA_ONE || path.resolve(TEST_DATA_PATH,'commands1.txt'),
};

