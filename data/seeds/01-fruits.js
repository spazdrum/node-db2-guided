
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'dragon fruit', avgWeightOz: 16.7, color: 'red' },
        { name: 'durian', avgWeightOz: 52.9, delicious: false, color: 'yellow' },
        { name: 'rambutan', avgWeightOz: 1.1, color: 'pink'},
        { name: 'lingonberry', avgWeightOz: 0.01, color: 'red' },
        { name: 'golden gooseberries', avgWeightOz: 0.02, delicious: false, color: 'yellow' }
      ]);
    });
};
