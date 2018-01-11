const preList = require('../../package.json');

const path = require('path');

const exec = require('child_process').exec;

const execPath = path.resolve('../');

const obj = preList.devDependenciesGlobal;

let script = `npm install -d --prefix ${execPath} -S`;

Object.keys(obj).forEach(function (name, index) {
  script = `${script} ${name}@${obj[name]}`;
});

console.log('start install public package for neo-antd');

console.log(`will install in ${execPath}`);

console.log('please wait some minutes.....');

exec(script, function (err, stdout, stderr) {
  console.log(stdout);
  if (err) {
    console.log('error:' + stderr);
  } else {
    console.log(stdout);
    console.log('package init success');
    console.log(`The global install in ${execPath}`);
  }
});


// console.log(preList.devDependencies);
