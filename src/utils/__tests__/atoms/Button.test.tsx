import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/atoms/Button';

test('renderiza e dispara onClick', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Buscar</Button>);
  fireEvent.click(screen.getByRole('button', { name: /buscar/i }));
  expect(onClick).toHaveBeenCalled();
});
