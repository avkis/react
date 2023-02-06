import path from 'path';
import webpack from 'webpack'; //to access built-in plugins
import { BuildPaths, BuildEnv } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	};

	const mode = env.mode || 'development';
	const port = env.port || 3007;
	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		port,
		paths,
		isDev,
	});
}