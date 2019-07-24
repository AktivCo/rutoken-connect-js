# Модуль для Рутокен Коннект

Модуль позволяет получить статус приложения Рутокен Коннект.

## Установка

```sh
npm install @aktivco/rutoken-connect
```

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

Исходный код распространяется под лицензией Simplified BSD. См. файл LICENSE в корневой директории проекта.
