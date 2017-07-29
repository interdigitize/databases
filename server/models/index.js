var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT messages.text, users.username FROM messages, users', function(error, results, field) {
        if (error) { throw error; }
        callback(results); 
      });
    },
    post: function (body, callback) {
      // db.connection.query(`insert into users (username) values('${body.username}')`, function(error, results, field) {
      //   if (error) { throw error; }
      // });
      db.connection.query(`insert into messages (text) values('${body.text}')`, function(error, results, field) {
        if (error) { throw error; }
        callback();
      });
            
      // db.connection.query(`insert into messages 
      //   (text, user_id, room_id) 
      //   values('${body.text}', select id from users where username='${body.username}', select id from rooms where roomname='${body.roomname}')`, 
      // function(error, results, field) {
      //   if (error) { throw error; }
      // });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }, 
  
  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

