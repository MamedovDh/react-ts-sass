import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './webpack/buildWebpack'
import { BuildMode, BuildPlatform } from './webpack/types/types'

interface EnvVariable {
	mode : BuildMode
	port : number
	analyzer ?: boolean
	platform : BuildPlatform
}

export default (env : EnvVariable) => {
	const config : webpack.Configuration = buildWebpack({
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		paths: {
			entry : path.resolve(__dirname, 'src', 'index.tsx'),
			html : path.resolve(__dirname, 'public', 'index.html'),
			output : path.resolve(__dirname, 'build'),
			src : path.resolve(__dirname, 'src'),
		}
	})

	return config
}