import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('if user can add an item', () => {
  render(<App />);

  //use user event to type into text box
  // useUser event to click submit button
  //expect item to appear on screen

  const textbox = screen.getByRole('textbox');

  const submitButton = screen.getByRole('button', {
    name: /submit/i,
  });

  userEvent.type(textbox, 'apple');
  userEvent.click(submitButton);

  const item = screen.getByText(/apple/i);

  expect(item).toBeInTheDocument();
});
