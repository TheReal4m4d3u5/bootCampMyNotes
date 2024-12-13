import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// after each test is run clean up Happy DOM 
afterEach(() => {
    cleanup()
})