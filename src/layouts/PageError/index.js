import React, { PropTypes } from "react"
// import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <div className="container">
    <div className="oops">{ "😱 Oooops!" }</div>
    <div className="text">
      <p className="title">
        <strong>{ error }</strong>
        { " " }
        { errorText }
      </p>
      {
        error === 404 &&
        <div>
          { "It seems you found a broken link. " }
          { "Sorry about that. " }
          <br />
          { "Do not hesitate to report this page 😁." }
        </div>
      }
    </div>
  </div>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
