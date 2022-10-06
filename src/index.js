import ReactDOM from 'react-dom/client';



const today = new Date();
console.log(today)
const year = today.getFullYear();

const parse_date = (nb) => {
  return 'test'+nb
}
const root = ReactDOM.createRoot(document.getElementById('epi'));
const nb = 2
root.render(
<div>
  bonjour React {year}
  <p className='test' htmlFor="" style={{color : 'red'}}>
    {parse_date(nb)}
  </p>
</div>
);


