const esConfig = require('./config/es.config');
const config = require('./config/config');

const TYPE = process.env.TYPE === 'es'; // es 打包

module.exports = TYPE ? esConfig : config;
