const Sequelize = require('sequelize');

let db
db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/content.db'
})

// if (process.env.DATABASE_URL) {
//     db = new Sequelize(process.env.DATABASE_URL)
// } else {
//     db = new Sequelize({
//         dialect: 'sqlite',
//         storage: __dirname + '/content.db'
//     })
// }

// or
// const db = new Sequelize({
//     dialect: 'postgess',
//     database: 'd83d1m6unuhcvj',
//     username: 'pmanbxcodxtbcg',
//     password: 'e028930f57f18177bf496074da352c2b9b65c1ee71cdaaf30674c6fac3aee39c',
//     host: 'ec2-34-195-169-25.compute-1.amazonaws.com',

//     // 

// })

// connection test command
// db.authenticate()
//     .then(() => {
//         console.log('Connected');
//     }).catch((err) => {
//         console.error();
//     });

const Products = db.define('product', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    itemimg: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    itemname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    contact: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

})

module.exports = {
    db,
    Products
}