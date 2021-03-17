//const auth = require('./auth');
const {ConfigService, HookConfig} = require('sails-redbox-config-utils');
const config = require('./hook.json');

module.exports = function (sails) {
  return {
    initialize: async function (cb) {
      const name = require('./package').name;
      try {
        const hook = HookConfig.base(name, config);
        ConfigService.mergeHookConfig(name, sails.config);
        cb();
      } catch (e) {
        sails.log.error(`Hook::${name} had problems initialising`);
        sails.log.error(e);
        cb();
      }
    },
    //If each route middleware do not exist sails.lift will fail during hook.load()
    routes: {
      before: {},
      after: {}
    },
    configure: function () {
    }
  }
};
