import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) =>{
    res.json({name: 'teste'})
})

app.get('/tabuada/:numero',(req,res)=>{
    const numero = Number(req.params.numero)
    let textoResposta = `Tabuada<br>`
    for(let i = 1; i <= 10; i++){
        textoResposta += `${numero}X${i}=${numero*i}<br>`
        // textoResposta = textoResposta + ''
    }
    res.send(textoResposta)
})

app.get('/test',(req,res)=>{
    res.send('Teste!')
})
app.post('/test',(req,res)=>{
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const idade = req.body.idade
    console.log(req.body)
    res.send(`Olá ${nome} ${sobrenome} - ${idade}`)
})

app.listen(port,() => {
    console.log(`server rodando em http://localhost:${port}`)
})

// npm i -D nodemon
// npx nodemon index.js