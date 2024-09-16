import {conn} from "./conect";

const Schema = conn.Schema

const americanoMedioSchema = new Schema({
    nome:{
        type: Schema.Types.String,
        required: true
    },
    dataNascimento: {
        type: Schema.Types.Date,
        required: true
    },
    
})

const AmericanoMedio = conn.model("americano" , americanoMedioSchema)

export default AmericanoMedio