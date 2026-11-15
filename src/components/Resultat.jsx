import "./Resultat.css";

function Resultat() {
    const moyenne = 14;
    const classe = moyenne >= 10 ? "admis" : "refuse";

    return (
        <div className={classe}>
            <h2>{moyenne >= 10 ? "Admis" : "Refusé"}</h2>
            <p>Moyenne : {moyenne}</p>
        </div>
    );
}

export default Resultat;