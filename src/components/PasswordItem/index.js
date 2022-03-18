import './index.css'

const PasswordItem = props => {
  const {passwordDetails, randomColorsList} = props
  const {id, url, name, password} = passwordDetails
  const getRandomColor =
    randomColorsList[Math.ceil(Math.random() * randomColorsList.length - 1)]
  return (
    <div className="password-item">
      <div className="d-flex">
        <p className={`${getRandomColor} profile-img`}>{name[0]}</p>
        <div className="text-container">
          <h1 className="website">{url}</h1>
          <p className="user-name">{name}</p>
          <p className="text-white">{password}</p>
        </div>
      </div>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default PasswordItem
