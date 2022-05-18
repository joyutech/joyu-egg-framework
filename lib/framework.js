'use strict';

const fs = require('fs');
const path = require('path');
const egg = require('egg');
const EGG_PATH = Symbol.for('egg#eggPath');
const EGG_LOADER = Symbol.for('egg#loader');

function loadScope(baseDir) {
  let serverScope;

  const scopePath = path.join(baseDir, 'config/scope');
  if(fs.existsSync(scopePath)) {
    serverScope = fs.readFileSync(scopePath, 'utf8');
    if(serverScope) serverScope.trim();
  }
  if (!serverScope) {
    serverScope = process.env.EGG_SERVER_SCOPE;
    if(serverScope) serverScope.trim();
  }

  return serverScope || '';
}

class AppWorkerLoader extends egg.AppWorkerLoader {

  getServerScope() {
    return loadScope(this.options.baseDir);
  }

}

class AgentWorkerLoader extends egg.AgentWorkerLoader {

  getServerScope() {
    return loadScope(this.options.baseDir);
  }

}

class Application extends egg.Application {
  get [EGG_PATH]() {
    // 返回 framework 路径
    return path.dirname(__dirname);
  }
  // 覆盖 Egg 的 Loader，启动时使用这个 Loader
  get [EGG_LOADER]() {
    return AppWorkerLoader;
  }
}

class Agent extends egg.Agent {
  get [EGG_PATH]() {
    // 返回 framework 路径
    return path.dirname(__dirname);
  }
  // 覆盖 Egg 的 Loader，启动时使用这个 Loader
  get [EGG_LOADER]() {
    return AgentWorkerLoader;
  }
}

module.exports = Object.assign(egg, {
  Application,
  Agent,
  AppWorkerLoader,
  AgentWorkerLoader,
});
