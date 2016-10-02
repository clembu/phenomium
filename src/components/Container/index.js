import React, { PropTypes } from "react"

import styles from "./index.css"

const Container = (props) => (
  <section className={ styles.container }>
    { props.children }
  </section>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
