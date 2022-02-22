import { render, screen } from '@testing-library/react';
import App from './App';


describe('Alguns exemplos de testes básicos que você pode usar' , () => {
  test('Verifica se o texto "Testando por texto!!" aparece na tela', () => {
    render(<App />);
    const testByText = screen.getByText('Testando por texto!!');
    expect(testByText).toBeInTheDocument();
  });

})
