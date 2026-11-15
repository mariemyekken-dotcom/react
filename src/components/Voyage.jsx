
function Voyage() {
    const budget = 1500;

    return (
        <div>
            <h2>Agence de voyages</h2>

            <p>Budget : {budget} DT</p>

            <h3>
                {budget >= 2000
                    ? "Voyage premium"
                    : budget >= 1000
                    ? "Voyage économique"
                    : "Budget insuffisant"}
            </h3>
        </div>
    );
}

export default Voyage;
