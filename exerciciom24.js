//classe construtora
function Roupa(peça){
    this.peça = peça
}

//herança 1
function Casual(peça, valor, cor){
    this.valor = `R$ ${valor},00`
    this.cor = cor
    this.pagar = function(){
        console.log(`A ${peça} ${cor} custa R$ ${valor},00 reais`)
    }

    Roupa.call(this, peça, valor, cor)
}

//herança 2
function Social(peça, valor, cor, marca){
    this.valor = `R$ ${valor},00`
    this.cor = cor
    this.marca = marca
    this.pagar = function(){
        console.log(`A ${peça} ${cor}, da marca ${marca}, custa R$ ${valor},00 reais`)
    }

    Roupa.call(this, peça)
}

//instâncias de Casual
const camiseta = new Casual('camiseta', 39, 'vermelha')
const moletom = new Casual('moletom', 49, 'cinza')
const bermuda = new Casual('bermuda', 29, 'preta')

//instâncias de Social
const camisa = new Social('camisa', 149, 'azul', 'Dudalina')
const blazer = new Social('blazer', 349, 'marrom', 'Ralph Lauren')
const calça = new Social ('calça', 259, 'bege', 'Gucci')

camiseta.pagar()
moletom.pagar()
bermuda.pagar()

camisa.pagar()
blazer.pagar()
calça.pagar()