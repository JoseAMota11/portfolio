import "./Header.css"

export function Header() {
  return (
    <>
      <header className="header__container">
        <nav className="nav__container">
          <h1 className="title"><a href="#top">Jama</a></h1>
          <ul className="links__container">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
