// @ts-nocheck
import type { PageServerLoad } from '../$types';

// Simulate a delay with a promise-based timeout
function makeDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
    const id = params.id;

    // Simulate an async call without await, but with then() to handle the promise
    // Await the delay, then continue with synchronous code

    // Return both values
    return {
        second: makeDelay(3000).then(() => {
        // Simulate fetching data
        return "World!";
    }),
        first: await "Hello"
    };
};
