import React from 'react';
import ReactDOM from 'react-dom';

import Form from '../components/form/form.jsx';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form name='demoForm'></Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('container'));