import SignupField from './components/SignupField';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className='signup-cont'>
        <div className='add'><p><span className='bold'>محاسبه سهم بیمه تکمیلی</span></p></div>
        <SignupField />
      </div>
    </div>
  );
}

export default App;
