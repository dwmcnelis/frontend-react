import React from 'react'
import styles from './styles'
import data from '../../data'

const Home = (props) => (
  <div>

    <h2 style={styles.header}>About</h2>
    <p style={styles.lead}>
      This is a react application frontend with isomorphic rendering, async react-router routes, async redux reducers, material ui, async data fetching, and code-splitting.
    </p>
    <h2 style={styles.header}>Stack Technologies</h2>
    <ul style={styles.list}>
      {data.map((item, i) => (
        <li key={i}>
          <h3><a style={styles.link} href={item.link} target='_blank'>{item.resource}</a></h3>
          <p style={styles.body}>{item.description}</p>
        </li>
       ))}
    </ul>
  </div>
)

export default Home
