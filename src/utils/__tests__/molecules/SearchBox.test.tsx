import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '@/components/molecules/SearchBox';

test('envia busca ao clicar no botão', () => {
  const onSearch = jest.fn();
  render(<SearchBox onSearch={onSearch} />);
  const input = screen.getByRole('textbox', { name: /username/i });
  fireEvent.change(input, { target: { value: 'octocat' } });
  fireEvent.click(screen.getByRole('button', { name: /buscar/i }));
  expect(onSearch).toHaveBeenCalledWith('octocat');
});
