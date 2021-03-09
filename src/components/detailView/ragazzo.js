import "./detail-ragazzo.css";
export function DettaglioRagazzo(props) {
    return (
        <div className="row">
            <HeaderRagazzo ragazzo={props.ragazzo}></HeaderRagazzo>
            <MainRagazzo ragazzo={props.ragazzo}></MainRagazzo>
        </div>
    );
}
function HeaderRagazzo(props) {
    return (
        <header className="Header-ragazzo row">
            <div className="nome-ragazzo col-s-left">
                <h2>
                    {props.ragazzo.nome} {props.ragazzo.cognome}
                </h2>
            </div>
            <div className="info-unita col-s-right">
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
function MainRagazzo(props) {
    return (
        <main className="Main-ragazzo">
            <ElencoSpecialita
                elencoSpecialita={props.ragazzo.specialita}
            ></ElencoSpecialita>
            <ElencoMete elencoMete={props.ragazzo.mete}></ElencoMete>
        </main>
    );
}

function ElencoSpecialita(props) {
    let specs = [];
    props.elencoSpecialita.forEach((spec) => {
        specs.push(<Specialita specialita={spec}></Specialita>);
    });
    return (
        <section className="row">
            <h5>Specialità</h5>
            {specs}
        </section>
    );
}

function Specialita(props) {
    let className =
        props.specialita.stato.toLowerCase() === "completata"
            ? "specialita-completata"
            : "specialita-in-corso";
    className += " col-s-1-of-8 specialita";
    return (
        <div className={className}>
            <h5>{props.specialita.nome}</h5>
        </div>
    );
}

function ElencoMete(props) {
    let mete = [];
    props.elencoMete.forEach((meta) => {
        mete.push(<Meta meta={meta}></Meta>);
    });
    return (
        <section className="row">
            <h5>Mete</h5>
            {mete}
        </section>
    );
}
function Meta(props) {
    let className =
        (!props.meta.esito
            ? "meta-in-corso"
            : `meta-${props.meta.esito.stato}`) + " row meta";
    const esito = props.meta.esito ? <p>{props.meta.esito.commento}</p> : null;
    console.log(esito);
    return (
        <div className={className}>
            <p>{props.meta.testo}</p>
            {esito}
        </div>
    );
}
