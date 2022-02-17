import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se o texto "Testando por texto!!" aparece na tela', () => {
  render(<App />);
  const h1Test = screen.getByText('Testando por texto!!');
  expect(h1Test).toBeInTheDocument();
});
