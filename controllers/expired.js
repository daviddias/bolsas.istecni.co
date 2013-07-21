var expiredHandler = function (request) {
    request.reply('EXPIRED')
};

module.exports = expiredHandler;