'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const { ctx } = this;
    return ctx.model.User.find({ account: 'test' });
  }

  async add() {
    const { ctx } = this;
    return ctx.model.User.create({
      account: 'test',
      password: '123',
    }).then(res => {
      return {
        success: true,
        mag: res,
        code: 0,
      };
    }).catch(err => {
      return {
        success: false,
        err,
      };
    });
  }
}

module.exports = UserService;
