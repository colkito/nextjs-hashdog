// Packages
import axios from 'axios'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'

class Hashflix extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static async getInitialProps() {
    return axios.get('http://netflixroulette.net/api/api.php?director=Tarantino')
    .then(response => {
      const items = response.data
      const total = items.length

      return {
        items,
        total
      }
    })
    .catch(err => {
      console.log('ERROR', err)
    })
  }

  render() {
    return (
      <Layout title="Hashflix">
        <h1>List ({this.props.total})</h1>

        <div id="list">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Release Year</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => {
                return (
                  <tr key={item.unit}>
                    <td>{item.show_title}</td>
                    <td>{item.release_year}</td>
                    <td>{item.rating}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

Hashflix.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

export default Hashflix
