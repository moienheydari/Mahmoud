import SignupField from './components/SignupField';
import './css/App.min.css';

function App() {
  return (
    <div className="App">
      <div className='signup-cont'>
        <div className='add'><p><span className='bold'>Try it free 7 days</span> then $20/mo. thereafter</p></div>
        <SignupField />
      </div>
    </div>
  );
}

export default App;
