import { Component } from 'react';
import { MoonLoader } from 'react-spinners';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='main h-screen w-screen  flex justify-center items-center'>
          <MoonLoader color={'#fff'} size={70} />
        </div>
      </>
    );
  }
}

export default Loading;
