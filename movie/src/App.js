import { Component } from 'react';
import Loading from './components/loading/loading';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className='w-screen h-screen bg-'>
          <Loading></Loading>
        </main>
      </>
    );
  }
}

export default App;
