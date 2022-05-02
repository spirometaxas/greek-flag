# greek-flag
Print the Greek flag to the console using unicode block characters and ANSI-256 colors!

![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-1.png)

Minimum Dimensions: 9 rows x 27 columns (ratio: 2:3)

## Usage
### Via `npx`:
```
$ npx greek-flag
```

### Via Global Install
```
$ npm install --global greek-flag
$ greek-flag
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

## Options
#### Standard Greek Flag
```
$ greek-flag
```
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-1.png)

#### Add a Border
To add a border, add the `--border` flag:
```
$ greek-flag --border
```
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-2.png)

#### Make it Bigger
To increase the scale, add the `--scale=<positive-number>` flag.  The value can be any integer greater than or equal to 1.  (Default scale is 1).  Can also use `--scale=full` to fit the flag to the closest terminal dimensions.  
```
$ greek-flag --scale=<positive-number>
```
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-3.png)

#### Change the Colors
The flag can be displayed with a lighter or a darker shade of blue using the `--color=<light|classic|dark>` flag.  The default value is `classic`.
##### Lighter Blue
```
$ greek-flag --color=light
```
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-4.png)

##### Darker Blue
```
$ greek-flag --color=dark
```
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-5.png)

#### Putting it All Together
Parameters can be mixed together to display your preferred version
![What greek-flag prints to the console](https://raw.githubusercontent.com/spirometaxas/greek-flag/main/img/greek-flag-6.png)

##### Ζητώ η Ελλάς!

## Related
- [euro-flags](https://www.npmjs.com/package/euro-flags) - Print the flags of 28 European countries to the console!
- [usa-flag](https://www.npmjs.com/package/usa-flag) - Print the flag of the United States of America to the console!