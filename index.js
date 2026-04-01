//Criando variaies constant(nao alteram valor)
const express = require('express');
const app = express();
const porta = 8080;
app.get('/', (req, res) => {
    res.send("helloword");
});

app.get('/pedido', (res, req) => {
    //Criando variaveis Let
    let precoCafe = 15.00;
    let total = 0;
    for (i=0;i<=3;i++){
        total=precoCafe + precoCafe;
    }
    //Se o total for maior que 30 {aplique o desconto}
    if(total > 30){
        total - 5;
        console.log("Desconto aplicado!!")
    }else{
        console.log("desconto nao aplicado")
    }
    
   



        res.send("pedir cafe");
});
app.listen(porta, () => {

});
