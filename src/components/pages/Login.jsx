import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Input, Grid } from "@material-ui/core/"
import { useState } from "react"
import {Redirect} from "react-router-dom"
import "../style.css"




const Login = ({setUser}) =>{

    const [isLogin, setIsLogin] = useState(false)

    const formSchema = yup.object().shape({
        name: yup.string().required("Campo Obrigatorio")
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome invalido"),
        email: yup.string().required("Email obrigatorio").email("Email invalido"),
        password: yup.string().required("Senha obrigatoria")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "senha invalida"),
        passawordComfirmation: yup.string().required("Comfirmação Obrigatoria")
            .oneOf([yup.ref('password'), null], "Comfirmação imvalida"),
    })

    const {register, handleSubmit, formState : {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const handle = (date) => {
        setIsLogin(true);
        setUser(date);
    }

    return <div>

            <Grid xs = "12">
                <form onSubmit = {handleSubmit(handle)}>
                   <Grid xs= "12"> <input placeholder = "Username" {...register("name")}/> </Grid> 
                   {errors.name && <p className = "errors">{errors.name.message}</p>}
                   <Grid xs= "12" > <input placeholder = "Email"{...register("email")}/> </Grid>
                   {errors.email && <p className = "errors">{errors.email.message}</p>}
                   <Grid xs= "12" > <input placeholder = "Password (8 caracteres,letras, numeros e caracter)."{...register("password")}/> </Grid>
                   {errors.password && <p className = "errors">{errors.password.message}</p>}
                   <Grid xs= "12" > <input placeholder = "Password comfirmation"{...register("passawordComfirmation")}/> </Grid>
                   {errors.passawordComfirmation && <p className = "errors">{errors.passawordComfirmation.message}</p>}
    
                    <Button variant="contained" type ="submit">Enviar</Button>
                </form>
            </Grid>
             {isLogin ? <Redirect to = "/logado"/> : <h1></h1>}

       
    </div>
} 

export default Login;