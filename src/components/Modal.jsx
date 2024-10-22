import React from "react";
import styled from "styled-components";
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen || false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.closeModal();
    }
  }
  closeModal() {
    this.setState({ isOpen: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }
    return(
    <ModalOverlay onClick={this.closeModal}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={this.closeModal}>Закрити</button>
        {this.props.children}
    </ModalContent>;
    </ModalOverlay>
    );
  }
}

export default Modal;
