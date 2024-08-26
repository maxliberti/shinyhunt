const { DataTypes } = require('sequelize');
const sequelize = require('./config/db');

const hunt = sequelize.define('hunt', {
    hunt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    pokemon_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    encounters: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    shiny_found: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    method_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    date_started: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    date_completed: {
        type: DataTypes.DATE,
        allowNull: true
    }

})

module.exports = hunt;