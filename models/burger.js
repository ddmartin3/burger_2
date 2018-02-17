var orm = require("../config/orm.js");


var burger ={

        //selects All of the burgers
    all: cb => {
        orm.selectAll("burgers", res =>{
            cb(res);
        });
    },
        // adds a new burger in the table with a devoured status of false
    add: (newBurger,cb)=>{ 
        orm.insertOne(newBurger, res =>{
            cb(res);
        });
    },
        //changes the devoured status of a particular burger to boolean true or false
    eat: (status,whatIsEaten,cb)=>{
        orm.updateOne(status, whatIsEaten, res =>{
            cb(res);
        });
    }
};

module.exports = burger;
