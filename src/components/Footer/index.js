import React from "react"

// import styles from "./index.css"

const Footer = () => (
  <footer className="footer">
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className="phenomicReference"
      >
        { "Website generated with " }
        <span className="phenomicReferenceName">
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
