var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput,cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err){ 
                throw err;
            }
            cb(result);
        });
    },


    insertOne: function(newBurger,cb){
        var query = connection.query(
            "INSERT INTO burgers SET ?",
            {
                burger_name: newBurger,
                devoured: 0,
            },
            function(err, res) {
                if (err){
                    throw err;
                }
                console.log(res.affectedRows + " burger inserted!\n");
                cb(res);
            });
    },

    updateOne: function(status,whatIsEaten,cb) {
        var query = connection.query(
          "UPDATE burgers SET ? WHERE ?",
          [
            {
              devoured: status
            },
            {
              id: whatIsEaten
            }
          ],
        function(err, res) {
            if (err){
                throw err;
            }
            console.log("burger eaten!\n");
            cb(res);
        });
    }



    // First attemp at insertOne
    // insertOne: function(tableInput,column,otherColumn,value,otherValue) {
    //     var queryString = "INSERT INTO ??"; 
    //     queryString += "(??, ??) ";
    //     queryString += "VALUES(??, ??)";
    //     connection.query(queryString, [tableInput,column,otherColumn,value,otherValue], function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // },

};

module.exports = orm;

//tests
// orm.insertOne("Lettuce");
// orm.updateOne(1,"Lettuce");
// orm.selectAll("burgers");