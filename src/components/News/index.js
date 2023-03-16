import './News.css'

const News = () => {
    return (
        <section className="news">
            <div className="news__card">
                <div className="news__card__title">
                    <label>Novo:</label>
                </div>
                <div className="news__card__new">
                    <label>-Adicionada a funcionalidade do mural.</label>
                </div>
                <div className="news__card__title">
                    <label>Proximas etapas:</label>
                </div>
                <div className="news__card__new">
                    <label>-Adicionar o teste de interação social na aba testes. </label>
                    <label>-Integrar backend Node.js para manipular e armazenar as informações em um banco de dados.</label>
                </div>
            </div>
        </section>
    )
}


export default News
