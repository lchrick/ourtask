import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from "../hooks/useAuth"

const DashFooter = () => {

    const { username, status } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-EU', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <p>Current User: {username}</p>
            <p>Status: {status}</p>
            <p>Date: {today}</p>
        </footer>
    )
    return content
}
export default DashFooter