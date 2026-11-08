const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const sass = require( 'sass' );
const path = require( 'path' );
const { fileURLToPath } = require( 'url' );

class StylesPlugin {
	apply( compiler ) {
		compiler.hooks.thisCompilation.tap( 'StylesPlugin', ( compilation ) => {
			compilation.hooks.processAssets.tap(
				{
					name: 'StylesPlugin',
					stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
				},
				() => {
					for ( const name of [ 'styles', 'styles-rtl' ] ) {
						const result = sass.compile( path.resolve( __dirname, 'src/styles', `${ name }.scss` ), { style: 'compressed' } );
						for ( const url of result.loadedUrls ) {
							if ( url.protocol === 'file:' ) {
								compilation.fileDependencies.add( fileURLToPath( url ) );
							}
						}
						compilation.emitAsset( `${ name }.css`, new compiler.webpack.sources.RawSource( result.css ) );
					}
				}
			);
		} );
	}
}

module.exports = {
	...defaultConfig,
	plugins: [ ...defaultConfig.plugins, new StylesPlugin() ],
};
