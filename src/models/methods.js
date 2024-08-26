const { DataTypes } = require('sequelize');
const sequelize = require('./config/db');

const method = sequelize.define('method', {
    method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    method: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    base_odds_numerator: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    base_odds_denominator: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

});

module.exports = method;