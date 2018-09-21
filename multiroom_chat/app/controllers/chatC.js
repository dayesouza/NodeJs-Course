module.exports.startChat = function (app, req, res) {

  var params = req.body;

  req.assert("nickname", 'Nickname is mandatory').notEmpty();
  req.assert("nickname", 'Nickname shoud have more than 3 characters').len(3);

  var errors = req.validationErrors();
  if (errors) {
    res.render("index",{validation: errors, nickname: params.nickname});
    return;
  }

  res.render("chat");
} 