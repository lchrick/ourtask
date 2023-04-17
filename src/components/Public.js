import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to OurTask!</h1>
            </header>
            <main className="public__main">
                <div className="mainContent">
                    <p>Let's do it.</p>
                    <br/>
                    <div>
                        <p> Click to start: <FontAwesomeIcon icon={faCircleArrowRight} /> <Link className="linkName" to="/login">Employee Login</Link></p>
                    </div>
                    <br/>
                    <div>
                        <p>Test Account: username: admin; password: admin</p>
                    </div>
                </div>
            </main>
            <footer>
                <address>
                    OurTask:Professorsslingan 47, Stockholm, 11417
                    <br/>
                    <FontAwesomeIcon icon={faPhoneSquareAlt} /><a href="tel:+46730943546">0730943546</a>
                </address>
                <p>Owner: Chenhao Li</p>
            </footer>
        </section>

    )
    return content
}
export default Public