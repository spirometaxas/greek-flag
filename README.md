# greek-flag
Print the Greek flag to the console using unicode box characters and ANSI-256 colors!

## Usage
### Via `npx`:
```
$ npx greek-flag
$ npx greek-flag --border
$ npx greek-flag --scale=<scale-number>
$ npx greek-flag --color=<light|classic|dark>
```

### Via Global Install
```
$ npm install --global greek-flag
$ greek-flag
$ greek-flag --border
$ greek-flag --scale=<scale-number>
$ greek-flag --color=<light|classic|dark>
```

### Via Import
```
$ npm install greek-flag
```
then:
```
const greek_flag = require('greek-flag');
console.log(greek_flag.create(<scale-number>, <border-boolean>, "<light|classic|dark>"));
```