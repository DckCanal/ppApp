import "./meta.css";
export function ElencoMete(props) {
    let mete = [];
    props.elencoMete.forEach((meta) => {
        mete.push(<Meta meta={meta}></Meta>);
    });
    return (
        <section className="row">
            <h3>Mete</h3>
            {mete}
        </section>
    );
}
export function Meta(props) {
    let className =
        (!props.meta.esito
            ? "meta-in-corso"
            : `meta-${props.meta.esito.stato}`) + " row meta";
    const esito = props.meta.esito ? <p>{props.meta.esito.commento}</p> : null;
    console.log(esito);
    return (
        <div className={className}>
            <header className="meta-header">
                <h4>{props.meta.testo}</h4>
            </header>
            <section className="meta-section">
                <h4>Esito:</h4> <p>{esito}</p>
            </section>
            <MetaNote note={props.meta.note}></MetaNote>
        </div>
    );
}

export function MetaNote(props) {
    const note = [];
    props.note.forEach((nota) => {
        note.push(
            <div className="meta-nota col-s-1-of-3">
                <h5>Nota</h5>
                {nota.testo ? (
                    <p className="meta-nota-testo">{nota.testo}</p>
                ) : null}
                {nota.data ? (
                    <p className="meta-nota-data">{nota.data}</p>
                ) : null}
            </div>
        );
    });
    return <section className="meta-section row">{note}</section>;
}

export function MetaImpegno(props) {}
