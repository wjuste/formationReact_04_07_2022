import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Presentation</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;