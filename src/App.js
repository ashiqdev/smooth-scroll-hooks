import './App.css';
import placeholder from './components/LoremIpsum';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Section
        title='Section 1'
        subtitle={placeholder}
        id='section1'
        color='one'
      />
      <Section
        title='Section 2'
        subtitle={placeholder}
        id='section2'
        color='two'
      />
      <Section
        title='Section 3'
        subtitle={placeholder}
        id='section3'
        color='three'
      />
      <Section
        title='Section 4'
        subtitle={placeholder}
        id='section4'
        color='four'
      />
      <Section
        title='Section 5'
        subtitle={placeholder}
        id='section5'
        color='five'
      />

    </div>
  );
}

export default App;
