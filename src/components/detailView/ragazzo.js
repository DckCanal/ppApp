import "./detail-ragazzo.css";
export function HeaderRagazzo(props) {
    return (
        <header className="Header-ragazzo">
            <h2>
                {props.ragazzo.nome} {props.ragazzo.cognome}
            </h2>
            <div className="info-unita">
                <h3>
                    {props.ragazzo.unita.divisione?.nome} -{" "}
                    {props.ragazzo.unita.branca} {props.ragazzo.unita.nome}
                </h3>
                <h4>
                    {props.ragazzo.tappe?.responsabilita
                        ? "Responsabilità"
                        : props.ragazzo.tappe?.competenza
                        ? "Competenza"
                        : "Scoperta"}
                </h4>
            </div>
        </header>
    );
}
