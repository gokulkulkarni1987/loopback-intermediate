'use strict';

module.exports = function(Reviewer) {
    Reviewer.alive = function(cb) {
        cb(null, 'This is success');
    };

    Reviewer.remoteMethod(
        'alive', {
            http: {
                path: '/alive',
                verb: 'get',
            },
            returns: {
                arg: 'alive',
                type: 'string',
            }
        }
    );
};
