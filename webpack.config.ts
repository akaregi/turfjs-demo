import { RuleSetRule, ModuleOptions, Configuration } from 'webpack'
import { resolve } from 'path'

const rules: RuleSetRule[] = [
    {
        test: /\.ts$/,
        use: 'ts-loader',
    }
]

const module: ModuleOptions = {
    rules: rules
}

const config: Configuration = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: resolve(process.cwd() + '/dist')
    },
    module: module
}

export default config
