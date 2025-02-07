import { printHello } from "@/printHello";

test('render App component', () => {
  printHello();

  expect(true).toBeTruthy();
});
