/**
 * Waits the specified milliseconds and resolves
 * @param {number} milliseconds Milliseconds to wait
 */
export const wait = async milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
