const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreat = core.getInput("who-to-great");
  console.log(`Hello , ${nameToGreat}`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload : ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
