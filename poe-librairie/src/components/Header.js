const Header = ({name}) => {
    return(
        <header>
            {
                (name) ?
                <h1>Librairie de {name}</h1>
                :
                <h1>Ma Librairie</h1>
            }
        </header>
    )
}

export default Header;
