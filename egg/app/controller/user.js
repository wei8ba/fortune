'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async list() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.list();
    ctx.body = userInfo;
  }

  async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.add();
  }
}

module.exports = UserController;
