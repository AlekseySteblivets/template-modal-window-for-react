import { Component } from 'react';
import './App.css';
import Modal from './Components/Modal/Modal'

class App extends Component {
  state = {
    showModal: false
  }

  togleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal
    }));
  }

  render() {
    const { showModal } = this.state
    return (
      <div>
        <button type="button" onClick={this.togleModal}>Open Modal</button>
        {showModal &&
          <Modal onClose={this.togleModal}>
            <h1> Привет это контент модалки как children</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" onClick={this.togleModal} >Закрыть модалку</button>
          </Modal>}

      </div>
    )
  }

}

export default App;
