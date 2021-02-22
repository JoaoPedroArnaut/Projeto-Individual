module.exports = {
  production: {
    username: 'ursernameazure',
    password: 'sua senha',
    database: 'Projeto-individual',
    host: 'localhost:3000',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
