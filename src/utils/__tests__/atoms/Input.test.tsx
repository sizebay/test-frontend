import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/atoms/Input';

describe('Input', () => {
  it('renderiza e muda o valor', () => {
    const onChange = jest.fn();
    render(<Input aria-label="username" value="" onChange={onChange} placeholder="Digite..." />);
    const input = screen.getByRole('textbox', { name: /username/i });
    fireEvent.change(input, { target: { value: 'octocat' } });
    expect(onChange).toHaveBeenCalled();
  });
});