con = require('../env/conMySql.js');


module.exports = {
    getById: (req, res, next) => {
        let id = req.params.id;
        res.status(200).send(`Rota GET com ID! ${id}`);
    },
    lista_eventos: (req, res, next) => {
        res.status(200).send('lista_eventos');
    },
    cadastra_evento: (req, res, next) => {
        
    
        // con.connect(function(err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        //     var sql = "INSERT INTO EVENTOS (nome, data, valor, email) VALUES ()";
        //     con.query(sql, function (err, result) {
        //       if (err) throw err;
        //       console.log("inserted");
        //     });
        //   });
        
        
        res.status(201).send('cadastra_evento');
    }
}