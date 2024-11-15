const {
  // SQLDB_URL,
  ENVIRONMENT,
  
} = require("../../config/envConfig");


console.log({
  ENVIRONMENT,
  // SQLDB_URL, 
  
})

module.exports = {

  development: {
    url:"postgresql://barron:ZatzN79vCxT5Nv8KfeyghUMiDNvP37rU@dpg-cs7u30bv2p9s73fat7a0-a.oregon-postgres.render.com/ricisdb",
    dialect: "postgres",
    dialectOptions:
      // ENVIRONMENT === "production" || ENVIRONMENT === "staging"
        // ? 
        {
            ssl: {
              rejectUnauthorized: false,
            },
          }
        // : {},
  }, 
  // test: {
  //   username: "root",
  //   password: null,
  //   database: "database_test",
  //   host: "127.0.0.1",
  //   dialect: "postgres",
  // },
  // production: {
  //   url: "127.0.0.1",
  //   dialect: "postgres",
  // },
};
