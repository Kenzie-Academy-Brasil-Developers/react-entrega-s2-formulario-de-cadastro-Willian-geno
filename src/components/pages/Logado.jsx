

const Logado = ({user}) => {
    
    return <div>
        {user && <h1>Você está logado,{user.name}!</h1>}
    </div>

}

export default Logado;