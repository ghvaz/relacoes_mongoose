import {conn} from "./conect";
import americano from "./americano-medio-ref.js"
const Schema = conn.Schema

const cadeira_eletrica = new Schema ({
    voltagem: {
        type: Schema.Types.Number,
        required: true
    },
    americano: {
        type: Schema.Types.ObjectId,
        ref: "americano"
    }
})

const Cadeira_eletrica = conn.model('Cadeira_eletrica', cadeira_eletrica)


const inserir = async () => {
    try {
        const americano = await AmericanoMedio.create({
            nome: "John Peterson",
            dataNascimento: "2000/10/05",
        })
    
        const cadeira = await CadeiraEletricaRef.create({
            americano: americano._id,
            voltagem: 380,
        });
    
        console.log(americano, cadeira);
    
        const content = await CadeiraEletricaRef.find().exec()
    
        console.log(content)
    
        const contentPopulate = await CadeiraEletricaRef
            .find()
            .populate("americano")
            .exec()
    
        console.log(contentPopulate)
    
        } catch (error) {
        console.log(error);
        }
    };

inserir()