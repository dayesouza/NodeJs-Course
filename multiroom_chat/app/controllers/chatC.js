module.exports.startChat = function (app, req, res) {

  var params = req.body;

  req.assert("nickname", 'Nickname is mandatory').notEmpty();
  req.assert("nickname", 'Nickname shoud have more than 3 characters').len(3);

  var errors = req.validationErrors();
  if (errors) {
    res.render("index",{validation: errors, nickname: params.nickname});
    return;
  }

  app.get('io').emit(
    'msgToClient',
    {nickname: params.nickname, message: ' joined the chat'}
  );

  res.render("chat");
} 