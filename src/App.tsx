import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <h2>O que você vai fazer?</h2>
        <Form btnText="Criar Tarfefa"/>
        <h2>Suas Tarefas</h2>
        <p>Lista de tarefas...</p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
