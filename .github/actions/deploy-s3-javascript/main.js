const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.notice("This is a custom action that deploys files to AWS S3 bucket.");
}

run();
