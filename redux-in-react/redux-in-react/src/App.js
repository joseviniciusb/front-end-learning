import './App.css';

function App() {
  return (
      <>
    <header className="Header">
      <h1>ZezinFlix</h1>
    </header>
    <main>
    <div className="moviesContainer">
      <h2>Um filme qualquer</h2>
      <h3>Comédia - 2019</h3>
      <div className="trailerContainer"></div>
    </div>
    <div className="categoriesContainer">
    <h2>Escolha uma categoria</h2>
      <ul>
        <li>
         Um filme qualquer was released in 1995
        </li>
      </ul>
    </div>
    </main>
    </>
  );
}

export default App;
