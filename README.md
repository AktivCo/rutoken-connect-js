# Модуль для Рутокен Коннект

Модуль позволяет получить статус приложения Рутокен Коннект. Использование возможно в формате [ES модуля](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), а также в виде [UMD модуля](https://github.com/umdjs/umd).

## Установка

### npm

```sh
npm install @aktivco/rutoken-connect
```

### Releases

Архивы с модулем находятся в разделе [releases](https://github.com/AktivCo/rutoken-connect-js/releases/).

### Github Pages

Последняя версия:
* https://aktivco.github.io/rutoken-connect-js/lib/latest/rtconnect.es.js -- ES модуль;
* https://aktivco.github.io/rutoken-connect-js/lib/latest/rtconnect.es.min.js -- минифицированный ES модуль;
* https://aktivco.github.io/rutoken-connect-js/lib/latest/rtconnect.umd.js -- UMD модуль;
* https://aktivco.github.io/rutoken-connect-js/lib/latest/rtconnect.umd.min.js -- минифицированный UMD модуль.

Для использования конкретной версии необходимо указать ее номер в URL. Пример:
https://aktivco.github.io/rutoken-connect-js/lib/0.2.0/rtconnect.es.js

## Примеры использования

Примеры использования находятся в директории [examples](examples):
* [webpack](examples/webpack) -- демонстрирует работу с ES модулем при сборке проекта с помощью webpack;
* [plain](examples/plain) -- демонстрирует работу без использования системы сборки и внешних библиотек.

## API

### Функции

Модуль содержит следующие функции:

* getStatus -> Promise(Status)

Функция позволяет узнать состояние Рутокен Коннект. Возвращает promise, который будет разрешен статусом приложения.
Возможные статусы:
* Status.ready - Рутокен Коннект готов к работе (Пользователь может начинать работу с Рутокен Коннект)
* Status.noExtension - расширение Рутокен Коннект не установлено  (Пользователь должен установить расширение Рутокен Коннект для своего браузера)
* Status.oldExtension - расширение Рутокен Коннект устарело (Пользователь должен обновить расширение Рутокен Коннект для своего браузера)
* Status.noNative - приложение Рутокен Коннект не установлено (Пользователь должен установить приложение Рутокен Коннект на свой компьютер)
* Status.oldNative - приложение Рутокен Коннект устарело (Пользователь должен обновить приложение Рутокен Коннект на своем компьютере)
* Status.error - возникла проблема в работе Рутокен Коннект (Пользователь должен обратиться в техническую поддержку компании Актив)

## Лицензия

Исходный код распространяется под лицензией Simplified BSD. См. файл [LICENSE](LICENSE) в корневой директории проекта.
