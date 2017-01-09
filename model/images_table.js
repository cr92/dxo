'use strict';
module.exports = function(sequelize, DataTypes) {
    var images_table = sequelize.define('images_table', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        album_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stringified_src: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'images_table',
        freezeTableName: true,
        timestamps: true,
        underscored: true
    });
    user_info.sync();
    return user_info;
};
