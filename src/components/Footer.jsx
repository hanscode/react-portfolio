const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <span>&copy; Hans Steffens, {currentYear} </span>
    </footer>
  )
}

export default Footer