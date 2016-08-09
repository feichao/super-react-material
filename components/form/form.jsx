import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  static defaultProps = {
    /* form name */
    name: ''
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    let formName = this.props.name;
    
    return (
      <form name={formName} ref={formName}>
        <input type='text' required/>
        <button type='submit' onClick={() => {
          console.log(this.refs[formName].checkValidity())
        }}>Submit</button>
        {this.props.children}
      </form>
    );
  }
}

export default Form;