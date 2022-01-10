module.exports = {
  HOST: "Your Host",
  USER: "your Username",
  PASSWORD: "Your Password",
  DB: "Your Database",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};