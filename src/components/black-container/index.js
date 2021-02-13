import './black-container.css'

export default function BlackContainer(props) {
    return (
    <section>
            <h1>{props.dados.secao.titulo}</h1>
            <p>{props.dados.secao.texto1} <br/>
                {props.dados.secao.texto2}
            </p>
    </section>
    )
}