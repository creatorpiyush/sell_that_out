const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/content.db'
})

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
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = {
    db,
    Products
}