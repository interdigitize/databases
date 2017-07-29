var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((results) => { 
        res.send(results);
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, () => {
        res.send();
      });
    }
  },

  // users: {
  //   // Ditto as above
  //   get: function (req, res) {},
  //   post: function (req, res) {}
  // }
};

