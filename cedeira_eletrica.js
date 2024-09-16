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

const cadeira_eletrica = new Schema ({
    voltagem: {
        type: Schema.Types.Number,
        required: true
    },
    americano: americanoMedioSchema
})

const Cadeira_eletrica = conn.model('Cadeira_eletrica', cadeira_eletrica)


const inserir = async () => {
    try {
        Cadeira_eletrica.create({
            americano: {
                nome: 'Joaquim',
                dataNascimento: "2000/10/05"
            },
            voltagem: 380
        })
        
    } catch (error) {
        
    }
}

inserir()