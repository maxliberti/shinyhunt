const sequelize = require('./config/db');
const hunt = require('./hunts');
const method = require('./methods');
const user = require('./users');

// associations

hunt.belongsTo(method, {
    foreignKey: "method_id",
    targetKey: 'method_id',
    as: "hunt_method"
});

method.hasMany(hunt, {
    foreignKey: "method_id",
    targetKey: 'method_id',
    as: "hunt_method"
});

hunt.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: 'user_id',
    as: "hunt_user"
});

user.hasMany(Hunt, {
    foreignKey: 'user_id',
    targetKey: 'user_id',
    as: "user_hunts"
});

module.exports = {
    sequelize,
    hunt,
    method,
    user
};