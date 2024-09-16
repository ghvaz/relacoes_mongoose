import conn from "./conect.js";

const Schema = conn.Schema

const prisioneiroSchema = new Schema({
    nome:{
        type: Schema.Types.String,
        required: true
    }
})

const celaSchema = new Schema({
    altura:{
        type: Schema.Types.Number,
        required: true
    },
    comprimento:{
        type: Schema.Types.Number,
        required: true
    },
    largura:{
        type: Schema.Types.Number,
        required: true
    },
    prisioneiro: [prisioneiroSchema]
    
})

const cadeiaSchema = new Schema ({
    CodigoPostal: {
        type: Schema.Types.String,
        required: true
    },
    tipo:{
        type: Schema.Types.String,
        enum: ["MUNICIPAL", "ESTADUAL","FEDERAL"],
        default: "MUNICIPAL"
    },

    celas: [celaSchema]
})


const Cadeia = conn.model('Cadeia', cadeiaSchema)

Cadeia.create({
    CodigoPostal: "12345678",
    tipo: "FEDERAL",
    celas: [
        {
            altura: 10,
            comprimento: 10,
            largura: 10,
            prisioneiro: [
                {nome: "Joaquim X09"},
                {nome: "Joaquim x10"},
                {nome: "Joaquim x11"},
                {nome: "Joaquim x12"},
                {nome: "Joaquim x13"}
            ]
        },

        {
            altura: 2,
            comprimento: 2,
            largura: 2,
            prisioneiro: [
                {nome: "jhaisson X09"},
                {nome: "jhaisson x10"},
                {nome: "jhaisson x11"},
                {nome: "jhaisson x12"},
                {nome: "jhaisson x13"},
                {nome: "jhaisson x14"},
                {nome: "jhaisson x15"},
                {nome: "jhaisson x16"},
                {nome: "jhaisson x17"},
            ]
        }
    ]
})

export default Cadeia