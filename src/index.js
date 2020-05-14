class removeServiceOutputsPlugin {
  constructor(configsList) {
    this.configsList = [];

    this.setConfigsList(configsList);
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

  setConfigsList(configsList) {
    if (!Array.isArray(configsList)) {
      return console.log("Wrong type of configs list: " + typeof configsList);
    }

    if (typeof configsList[0] === 'string') configsList = [configsList];

    this.configsList = configsList;
  }
}

export default removeServiceOutputsPlugin;
