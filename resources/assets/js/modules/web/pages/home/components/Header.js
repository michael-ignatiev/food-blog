import React from "react"

const displayName = "HomePageHeader"

function Header() {
  return <header className="bg-success text-white">
    <div className="container text-center">
      <h1>Food Blog</h1>
      <p className="lead">This blog is all about real food prepared with heart and soul.</p>
      <p className="lead">Recipes that are free of gluten and soy.</p>
    </div>
  </header>
}
Header.displayName = displayName

export default Header
