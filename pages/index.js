// Ours
import Layout from '../components/Layout'

export default () => (
  <Layout title="Home">
    <div className="text-center">
      <p style={{ color: 'red' }}>Welcome to next.js for</p>
      <img src="/static/img/logo.svg" className="logo-hashdog"/>
    </div>

    <style jsx>{`
      .logo-hashdog {
        max-height: 30px;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </Layout>
)
