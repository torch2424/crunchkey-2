import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  svelte({
    // enable run-time checks when not in production
    dev: !production,
    // we'll extract any component CSS out into
    // a separate file — better for performance
    css: css => {
      css.write('dist/bundle.css');
    }
  }),

  copy({
    targets: [{ src: 'src/index.html', dest: 'dist' }]
  }),

  // If you have external dependencies installed from
  // npm, you'll most likely need these plugins. In
  // some cases you'll need additional configuration —
  // consult the documentation for details:
  // https://github.com/rollup/rollup-plugin-commonjs
  resolve({
    browser: true,
    dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
  }),
  commonjs(),

  // In dev mode, call `npm run start` once
  // the bundle has been generated
  !production && serve(),

  // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !production && livereload('dist'),

  // If we're building for production (npm run build
  // instead of npm run dev), minify
  production && terser()
];


export default {
  input: 'src/js/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'dist/bundle.js'
	},
	plugins,
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
        started = true;

        const childProcess = require('child_process');

        // Serve the site
				childProcess.spawn('npm', ['run', 'start'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
        });

        // Watch for wasm changes
        childProcess.spawn('npm', ['run', 'wasm:dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });

			}
		}
	};
}
