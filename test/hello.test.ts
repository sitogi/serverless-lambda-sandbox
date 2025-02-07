import { handle } from "@/hello";

test('render App component', () => {
  handle();

  expect(true).toBeTruthy();
});
