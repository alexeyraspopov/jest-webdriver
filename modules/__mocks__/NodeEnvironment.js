function NodeEnvironment() {
  this.global = {};
}

NodeEnvironment.prototype.setup = jest.fn();
NodeEnvironment.prototype.teardown = jest.fn();

module.exports = NodeEnvironment;
