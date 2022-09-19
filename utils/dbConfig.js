function getDBConfig() {
    return {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: '123',
        database: 'personinfo',
        connectionLimit: 1 //创建一个连接池
    }
}
module.exports = getDBConfig