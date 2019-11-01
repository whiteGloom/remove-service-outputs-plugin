class removeServiceOutputsPlugin {
	constructor(options) {
		if (!Array.isArray(options)) {
			this.options = [];
			console.log("RemoveServiceOutputsPlugin requires an array, but gets: " + typeof options);
		} else { this.options = options; }
	}

	apply(compiler) {
		compiler.hooks.emit.tapAsync(
			'removeServiceOutputsPlugin',
			(compilation, callback) => {
				if (this.options.length < 1) { callback(); return }
				compilation.chunks.forEach(chunk => {
					this.options.forEach(option => {
						if (chunk.name === option[0]) {
							chunk.files.forEach(file => {
								if (file.match(option[1])) {
									delete compilation.assets[file];
								}
							});
						}
					});
				});

				callback();
			}
		);
	}
}

export default removeServiceOutputsPlugin;