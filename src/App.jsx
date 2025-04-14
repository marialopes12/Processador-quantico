import assembly from './assets/img/processador.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Processador quantico</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>Os primeiros conceitos sobre computação quântica surgiram nos anos 1950. O desenvolvimento da área acelerou a partir dos anos 1980 e 1990.  </li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>Um processador quântico usa qubits (quantum bits) para realizar cálculos complexos de forma paralela. Isso é possível porque os qubits podem existir em múltiplos estados ao mesmo tempo, o que é chamado de superposição. 
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Maria Lopes / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
