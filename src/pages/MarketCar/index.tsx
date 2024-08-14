'use client'
import React, { useState } from 'react'
import '../MarketCar/marketcar.css'


interface IProdutos {
    id: number,
    titulo: string,
    preco: number
}

interface IShoppingItem{
    produto : IProdutos,
    quantidade: number
}

const produtos: IProdutos[] = [
    {id:1, titulo:'Dipirona', preco:5.00},
    {id:2, titulo:'Clear Man', preco:20.00},
    {id:3, titulo:'Curativo', preco:2.00},
    {id:4, titulo:'Chocolate', preco:10.00},
]

const formatPreco = (preco: number) : string => preco.toFixed(2);





const MarketCarPages = () => {
const[shoppingFarmacia, setShoppingFarmacia] = useState<IShoppingItem[]>([])
 


 //  Lógica para o botão funcionar
 const handleAddFarmacia = (id:number) => {
 const produto = produtos.find((produto) => produto.id === id)
 const produtoExisteShopping = shoppingFarmacia.find(item => item.produto.id===id)
 
// Se o curso existir no carrinho
 if(produtoExisteShopping) {
    const newShoppingProduto:IShoppingItem[]= shoppingFarmacia.map(item => {
   if(item.produto.id === id)({
    ...item,
    quantidade:item.quantidade++
   })

   return item
    })
    setShoppingFarmacia(newShoppingProduto)
    return
 }


 const carItem:IShoppingItem ={
    produto:produto!,
    quantidade:1
 }
 const newShoppingProduto:IShoppingItem[] = [...shoppingFarmacia, carItem]
 setShoppingFarmacia(newShoppingProduto)
 }
//


// Logica para o botão "Remover" funcionar
 const handleRemoveFarmacia = (id:number) => {
 const existeprodutoShopping = shoppingFarmacia.find((item) => item.produto.id === id)

 if(existeprodutoShopping!.quantidade>1) {
    const newShoppingProduto:IShoppingItem[]= shoppingFarmacia.map(item => {
   if(item.produto.id === id)({
    ...item,
    quantidade:item.quantidade--
   })

   return item
    })

    setShoppingFarmacia(newShoppingProduto)
    return

 }

 const newShoppingProduto:IShoppingItem[] = shoppingFarmacia.filter(item => item.produto.id !== id)
 setShoppingFarmacia(newShoppingProduto)
 
}
//

const totalproduto = shoppingFarmacia.reduce((total, item) => {
    return total + (item.produto.preco * item.quantidade);
},0);

    return (
    <div className='conteiner'>

       <h1 className='Titulo'>Farmacia</h1>

        <ul>
            {produtos.map(produto =>(<li key={produto.id}>
           
<div className="card">
    <div className="card-img"><div className="img"><img src="" alt="" /></div></div>
    <div className="card-title"><p>{produto.titulo}</p></div>
    <div className="card-footer">
        <div className="card-price"><span>R${formatPreco(produto.preco)}</span></div>
        <button className="card-btn" onClick={() => handleAddFarmacia(produto.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
            </button>
    </div>
</div>
            </li>))}
        
        </ul>

        <h1 className='Carrinho de Compras'>Carrinhos de Compras: (R$ {formatPreco(totalproduto)})</h1>

        <ul>
            {shoppingFarmacia.map(item =>(<li key={item.produto.id}>
            <p>Titulo: {item.produto.titulo}</p>
            <p>Preço: R$ {formatPreco(item.produto.preco)}</p>
            <p>Quantidade: {item.quantidade}</p>
            <p>Total: R$ {formatPreco(item.produto.preco * item.quantidade)}</p>
            <button onClick={() => handleRemoveFarmacia(item.produto.id)}>Remover</button> 
            </li>))}
        </ul>
    </div>
  )
}

export default MarketCarPages