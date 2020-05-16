<h1 id='languages'>Languages</h1>

* **[English](#what-is-it-en 'English')**

***

<h1 id='what-is-it-en'>What is it? [EN]</h1>

[↓ To navigation](#navigation-en '↓ To navigation') | **[↑ To languages](#languages '↑ To languages')**

**Remove-service-outputs-plugin** — [Webpack &#10150;](https://webpack.js.org/ 'Webpack') plugin, that allows deleting service files generated after build.

<h2 id='navigation-en'>Navigation</h2>

* **[What is it? [EN]](#what-is-it-en 'What is it? [EN]')**
    * **Navigation**
    * **Instruction:**
        * **[Installation](#installation-en 'Installation')**
        * **[Import](#import-en 'Import')**
        * **[Usage](#usage-en 'Usage')**
    * **[Examples](#examples-en 'Examples')**

<h2 id='instruction-en'>Instruction</h2>

<h3 id='installation-en'>Installation</h3>

To install the plugin, use command:

```
npm i -D whiteGloom/remove-service-outputs-plugin
```

[↑ To navigation](#navigation-en '↑ To navigation')

***

<h3 id='import-en'>Import</h3>

**Common JS:**

```
var removeServiceOutputsPlugin = require('remove-service-outputs-plugin').default;
```

**ES6+:**

```
import removeServiceOutputsPlugin from 'remove-service-outputs-plugin';
```

[↑ To navigation](#navigation-en '↑ To navigation')

***

<h3 id='usage-en'>Usage</h3>

Creating of the plugin instance:  

```
new removeServiceOutputsPlugin(...[chunkName, regexp]);
```

*Arguments:*
* **chunkName** - _type: string._ To of the chunk to process.
* **regexp** - _type: RegExp._ Selecting criteria.

[↑ To navigation](#navigation-en '↑ To navigation')

***

<h3 id='examples'>Examples</h3>

**Will remove js output files of "second" and "third" entries.** 

Webpack config object:

```
{
    entry: {
        first: 'first.js',
        second: 'second.js',
        third: 'third.js'
    },
    output: {
        path: './',
        filename: [name].js
    },
    plugins: [
        new removeServiceOutputsPlugin(['second', /.*\.js$/], ['third', /.*\.js$/]);
    ]
}
```

[↑ To navigation](#navigation-en '↑ To navigation')

<h2 id='end-en'>End.</h2>