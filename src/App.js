import './App.css';
import Login from './Login';

function App() {

  const userdata = [
    {
      email: 'test@gmail.com',
      password: 'test',
      userName: 'Baqir Raza'
    },
    {
      email: 'test2@gmail.com',
      password: 'test2',
      userName: 'Baqir Raza 2'
    },
    {
      email: 'test3@gmail.com',
      password: 'test3',
      userName: 'Baqir Raza 3'
    }
  ];

  return (
    <div className="App">
      <Login userdata={userdata} />
    </div>
  );
}

export default App;
