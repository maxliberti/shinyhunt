const { DataTypes } = require('sequelize');
const sequelize = require('./config/db');

const user = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

});

module.exports = user;