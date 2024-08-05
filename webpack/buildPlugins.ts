import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { Configuration } from 'webpack'
import { BuildOptions } from './types/types'

export const buildPlugins = ({ mode, paths}: BuildOptions): Configuration['plugins'] => {
	const isDev = mode === 'development'
	const isProd = mode === 'production'

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({template: paths.html}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		})
	]

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin())
		plugins.push(new ForkTsCheckerWebpackPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	return plugins
}