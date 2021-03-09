import "./specialita.css";
export function ElencoSpecialita(props) {
    let specs = [];
    props.elencoSpecialita.forEach((spec) => {
        specs.push(<Specialita specialita={spec}></Specialita>);
    });
    return (
        <section className="row">
            <h3>Specialità</h3>
            {specs}
        </section>
    );
}

export function Specialita(props) {
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
