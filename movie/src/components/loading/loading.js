import { Component } from 'react';
import { PacmanLoader } from 'react-spinners';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='main h-screen w-screen bg-regal-white flex justify-center items-center'>
          <PacmanLoader color={'#FCA311'} size={70} />
        </div>
      </>
    );
  }
}

export default Loading;
