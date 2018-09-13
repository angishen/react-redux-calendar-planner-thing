export const TEST_ACTION = 'test_action';

export function testAction(word) {
  return {
    type: TEST_ACTION,
    payload: word
  };
}
