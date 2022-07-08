const Connexion = ({isConnected, setConnected, setName}) => {

    const login = (event) => {
        //Pour eviter que la page se recharge à cause du submit
        event.preventDefault();
        const input = event.target[0];
        if(input.value) {
            setName(input.value);
            setConnected(true);
            input.value = '';
        } else {
            alert("Identifiant invalides");
        }
    }

    const logout = () => {
        setConnected(false);
        setName('');
    }

    return (
        <>
            {
                (!isConnected) ?
                (<form onSubmit={login}>
                    <input />
                    <button type="submit">Connexion</button>
                </form>)
                :
                <button onClick={logout}>Déconnexion</button>
            }
        </>
    )
}

export default Connexion;