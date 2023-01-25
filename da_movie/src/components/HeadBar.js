import { Link } from "react-router-dom"

function HeadBar() {
    return (
        <div id="navigation">
            <ul>
                <li>
                    <Link className="active" to="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <p>DA MOVIE</p>
                </li>
            </ul>
        </div>
    )
}

export default HeadBar