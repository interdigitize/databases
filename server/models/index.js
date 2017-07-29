var db = require('../db').connection;

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.text, users.username FROM messages, users', function(error, results, field) {
        if (error) { throw error; }
        callback(results); 
      });
    },
    post: function (body, callback) {
      // if (error) { throw error; }
      db.query(`insert into users (username) values('${body.username}')`, function(error, results, field) {
        if (error) { throw error; }
        db.query(`insert into rooms (roomname) values('${body.roomname}')`, function(error, results, field) {
          if (error) { throw error; }
          db.query(`SELECT users.id FROM users WHERE username='${body.username}'`, 
          function(error, results, field) {
            var userId = results[0].id;
            db.query(`SELECT rooms.id FROM rooms WHERE roomname='${body.roomname}'`, 
            function(error, results, field) {
              var roomId = results[0].id;
              db.query(`insert into messages (text, user_id, room_id) 
                values (
                  '${body.text}', 
                  '${userId}', 
                  '${roomId}'
                )`, 
              function(error, results, field) {
                if (error) { throw error; }
                callback();
              });
            });
          });
        });
      });   
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

