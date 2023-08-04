import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/" legacyBehavior>
          <a>
            <h1>
              <span>TEST</span>
              <span>CONTENTFUL</span>
            </h1>
            <h2>APP</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Test Contentful App :)</p>
      </footer>
    </div>
  )
}