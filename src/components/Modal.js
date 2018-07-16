import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {

    if(!this.props.show) {
      return null;
    }
    
    return (
      <div data-content='overlay'>
        <div data-content='modal'>
          {this.props.children} 
            <button type="button" onClick={this.props.onClose}>
              X
            </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;