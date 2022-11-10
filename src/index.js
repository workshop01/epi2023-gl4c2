import ReactDOM from 'react-dom/client';
import { Cv } from './cv/Cv';
import { Evenements } from './Evenements';
import { FeedbackApp } from './feedbackApp/FeedbackApp';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

const variable = "test"
const root = ReactDOM.createRoot(document.getElementById('root'));

const btn_blue = (valeur) => {
  return <button style={{ background: 'blue', color: '#fff' }}>
    {valeur}
  </button>
}
root.render(
  <>

    {/* text {variable}
    {btn_blue('test')}
    {btn_blue('boutton 2 ')} */}
    {/*  <Cv></Cv> */}
    {/*  <Evenements></Evenements> */}
{/*     <Signin /> */}
{/* <Signup/> */}
<FeedbackApp/>
  </>
);


