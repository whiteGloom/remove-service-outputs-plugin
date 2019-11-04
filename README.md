# Languages
* **[Русский](#шо-ита-ru "Русский")**


------------


# Шо ита? [RU]

[↓ К навигации](#навигация "↓ К навигации") | **[↑ To languages](#languages "↑ To languages")**

**Remove-service-outputs-plugin** — это плагин для [Webpack](https://webpack.js.org/ "Webpack"), который позволяет удалять служебные файлы, которые получаются после сборки проекта.

## Навигация

* **[Шо ита? [RU]](#шо-ита-ru "Шо ита? [RU]")**
	+ **Навигация**
	+ **[Инструкция](#инструкция "Инструкция")**
		- **[Установка](#установка "Установка")**
		- **[Использование](#использование "Использование")**
			* **[Импорт](#импорт "Импорт")**
			* **[Подключение к конфигу](#подключение-к-конфигу "Подключение к конфигу")**
	+ **[Всё.](#всё "Всё.")**

## Инструкция

### Установка
Для установки плагина в проект выполните команду:

```
npm i -D whiteGloom/remove-service-outputs-plugin
```

[↑ К навигации](#навигация "↑ К навигации")

### Использование

#### Импорт
Для импорта используйте:

```
var removeServiceOutputsPlugin = require("remove-service-outputs-plugin").default;
```
Или, если вы используете **ES6+**:
```
import removeServiceOutputsPlugin from "remove-service-outputs-plugin";
```

[↑ К навигации](#навигация "↑ К навигации")

#### Подключение к конфигу
Для подключения плагина к Webpack, в **конфиге для webpack**, в разделе **`plugins`** напишите:


```
new removeServiceOutputsPlugin(...[chunkName, regexp]);
```

*Arguments:*
* **chunkName** - type: string. Название чанка, из которого нужно убирать файл.
* **regexp** - type: regexp. Регулярное выражение, по которому определяется, какой файл удалять.

*Пример:*

```
{
	entry: {
		first: "first.js",
		second: "second.js"
	},
	output: {
		path: "./",
		filename: [name].js
	},
	plugins: [
		new removeServiceOutputsPlugin(["main", /.*\.js$/], ["second", /.*\.js$/]);
	]
}
```

[↑ К навигации](#навигация "↑ К навигации")

## Всё.

**-whiteGloom**