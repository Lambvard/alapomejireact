/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Form from './Form';
<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'></link>
function App() {
  /*const name="Lambvard";
  const location="google.com";*/
  return (
    <div className="App">
          <Navbar></Navbar>
          <Form/>
      <div className='content'>
      <Home></Home>
     </div>
    </div>
  );
}

export default App;
