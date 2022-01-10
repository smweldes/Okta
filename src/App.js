import './App.css';
import Integration from './components/Integration';

function App() {
  fetch('https://ct012022-oktainc.pantheonsite.io/oktaapi/integration/filters/products').then(response=>console.log(response))
  return (
    <div className="App">
      <Integration/>
    </div>
  );
}

export default App;
