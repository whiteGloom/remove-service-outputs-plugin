class removeServiceOutputsPlugin {
  constructor(...configsList) {
    this.configsList = configsList;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "removeServiceOutputsPlugin",
      (compilation, callback) => {
        this.configsList.forEach((config) => {
          const [name, regexp] = config;
          const chunk = compilation.chunks.find((chunk) => chunk.name === name) || [];

          chunk.files.forEach((file) => {
            if (file.match(regexp)) delete compilation.assets[file];
          });
        });

        callback();
      }
    );
  }
}

export default removeServiceOutputsPlugin;
