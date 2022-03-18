import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from './components/PasswordItem'

import './App.css'

const randomColorsList = ['orange', 'green', 'brown', 'deepskyblue', 'gray']

class App extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
  }

  onAdd = event => {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordList,
    } = this.state
    event.preventDefault()
    const newPasswordItem = {
      id: uuidv4(),
      url: websiteInput,
      name: userNameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordItem],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    console.log(event.target.value)
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordList,
    } = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manager">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                  alt="password manager"
                  className="d-md-none d-inline "
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="d-none d-md-inline password-image"
                />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <div className="form-container">
                  <form onSubmit={this.onAdd}>
                    <h1 className="heading">Add new Password</h1>
                    <div className="website-input">
                      <div className="icon-container">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                          alt="website"
                          className="icon"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Website"
                        className="input-ele"
                        onChange={this.onChangeWebsiteInput}
                      />
                    </div>
                    <div className="website-input">
                      <div className="icon-container">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                          alt="username"
                          className="icon"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        className="input-ele"
                        onChange={this.onChangeUserNameInput}
                      />
                    </div>
                    <div className="website-input">
                      <div className="icon-container">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                          alt="password"
                          className="icon"
                        />
                      </div>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="input-ele"
                        onChange={this.onChangePasswordInput}
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <button type="submit" className="add-button">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="password-container mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="password-count">0</p>
            </div>
            <div className="search-input">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input type="text" placeholder="Search" className="input-ele" />
            </div>
          </div>
          <div className="passwords">
            <div className="d-flex justify-content-end">
              <input type="checkbox" id="checkbox" className="mt-2 mr-2" />
              <label htmlFor="checkbox" className="label-txt">
                Show Passwords
              </label>
            </div>
            <div className="d-flex">
              {passwordList.map(eachItem => (
                <PasswordItem
                  passwordDetails={eachItem}
                  randomColorsList={randomColorsList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
