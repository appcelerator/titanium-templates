'use strict';

const path = require('path');
const { spawn } = require('child_process');

exports.id = 'ti.typescript';

exports.init = (logger, config, cli) => {
	cli.on('build.pre.compile', (builder, callback) => {
		const tscPath = path.resolve(__dirname, '..', 'node_modules', '.bin', 'tsc')
		const args = [ tscPath, '-p', 'tsconfig.json', '--listEmittedFiles' ];

        logger.info('Compiling TypeScript files');
		logger.trace(`Executing: node ${args.join(' ')}`);

        const child = spawn('node', args, {
			stdio: 'inherit',
			cwd: cli.argv['project-dir']
		});

        child.on('close', code => {
			if (code === 0) {
				callback();
			} else {
				const error = new Error(`TypeScript compiler with non-zero exit code ${code}`);
				error.code = code;
				callback(error);
			}
		});
	});
};
