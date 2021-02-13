import './product-container.css'

export default function ProductContainer(props) {
    return (
        <div className="product-container">
                <img src={props.dados.img} alt="orus-tower" className="product-image" />
                <div className="product-presentation orus-tower">
                    <h2>{props.dados.nome}</h2>
                    <h3>{props.dados.descricao}</h3>
                    <button><a href="./orus-tower.html">Buy now</a></button>
                </div>
        </div>
    )
}