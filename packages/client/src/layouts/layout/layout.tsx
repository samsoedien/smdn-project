import PropTypes from 'prop-types'

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    Navbar
    <main>{children}</main>
    Footer
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
