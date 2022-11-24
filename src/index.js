import ReactDOM from 'react-dom/client';
import { App } from './App';


const variable = "test"
const root = ReactDOM.createRoot(document.getElementById('root'));

const btn_blue = (valeur) => {
  return <button style={{ background: 'blue', color: '#fff' }}>
    {valeur}
  </button>
}
root.render(
  <>

    <App/>
    
  </>
);


