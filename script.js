#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
fs.appendFileSync(
  process.env["GITHUB_OUTPUT"],
  `foo=bar${os.EOL}`
);