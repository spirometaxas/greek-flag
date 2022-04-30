#!/usr/bin/env node
const greek_flag = require('./index.js');

const getScale = function(params, border) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].startsWith('--scale=')) {
            const scaleString = params[i].replace('--scale=', '').trim();
            if (scaleString.toLowerCase() === 'full') {
                const flagW = 27;
                const flagH = 9;
                const terminalW = process.stdout.columns - 4 - (border ? 2 : 0);
                const terminalH = process.stdout.rows - 2 - (border ? 2 : 0);
                if (terminalW < flagW || terminalH < flagH) {
                    return 1;
                }
                return Math.min(parseInt(terminalW / flagW), parseInt(terminalH / flagH));
            } else if (scaleString.length > 0 && !isNaN(scaleString)) {
                const scale = parseInt(scaleString);
                return scale >= 1 ? scale : 1;
            }
        }
    }
    return -1;
}

const getBorder = function(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].toLowerCase() === ('--border')) {
            return true;
        }
    }
    return false;
}

const getColor = function(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].startsWith('--color=')) {
            return params[i].replace('--color=', '').trim();
        }
    }
    return undefined;
}

const showHelp = function(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] && params[i].toLowerCase() === ('--help')) {
            return true;
        }
    }
    return false;
}

const printUsage = function() {
    console.log('\nUsage:');
    console.log('  $ greek-flag');
    console.log('  $ greek-flag --border');
    console.log('  $ greek-flag --scale=<scale-number>');
    console.log('  $ greek-flag --color=<light|classic|dark>\n');
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (showHelp(params)) {
        printUsage();
        return;
    }

    const border = getBorder(params);
    const scale = getScale(params, border);
    const color = getColor(params);
    console.log(greek_flag.create(scale, border, color));
} else {
    console.log(greek_flag.create(1, false, 'classic'));
}