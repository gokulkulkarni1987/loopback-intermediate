'use strict';

module.exports = function(Review) {
    Review.beforeRemote('create', function(context, user, next) {
        console.log('*************************** before remote function called');
        context.args.data.date = Date.now();
        context.args.data.publisherId = context.req.accessToken.userId;
        next();
    });
};
