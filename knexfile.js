// create this file with: knex init
// be sure you are in the root of your repo! or use --knexfile ...
// don't do what i did lol (create knexfile.js in the ./data folder... made
//  all sortsa prolems.).

module.exports = {

  // the initial template file also has staging: and production: values...
  // you can remove those for this exersie.
  development: {
    // what kind of database knex should work with... 
    // the sqlite3 module must be installed for this to work...
    // knex will use the sqlite3 module.
    client: 'sqlite3',

    // tell knex how to tell sqlite3 module where our database file is
    connection: {
      filename: './data/produce.db3'
    }, 

    // a setting that prevents certain errors in knex with sqlite3 because
    // of how sqlite3 manages default column values
    useNullAsDefault: true,

    // tell knex where the migrations files should be created and found
    migrations: {
      directory: './data/migrations'
    },

    // tell knex where the seeds files should be created and found
    seeds: {
      directory: './data/seeds'
    }
  }

};
