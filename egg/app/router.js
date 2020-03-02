'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router
    .get('/', controller.home.index)
    .get('/user', controller.user.list)
    .post('/user', controller.user.add);
};
