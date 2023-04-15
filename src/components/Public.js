import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">OurTask!</span></h1>
            </header>
            <main className="public__main">
                <p>Let's do it.</p>
                <address className="public__addr">
                    OurTask<br />
                    Professorsslingan 47<br />
                    Stockholm, 11417<br />
                    <a href="tel:+46730943546">0730943546</a>
                </address>
                <br />
                <p>Owner: LchRick</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public