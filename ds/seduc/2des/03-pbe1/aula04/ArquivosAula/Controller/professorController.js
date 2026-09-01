function listarProfessores(req, res) {
    const professores = [
        {id: 1, nome: "Luis"},
        {id: 2, nome: "Reenye"},
        {id: 3, nome: "Jansen" },
        {id: 4, nome: "Welligton"},
        {id: 5, nome: "Robson"}
    ];

    res.json(professores);
}

module.exports = {
    listarProfessores
}