import * as rtconnect from '@aktivco/rutoken-connect';

function setStatus(message) {
    if (document.readyState !== 'complete') {
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('status').textContent = message;
        }, { once: true });
    } else {
        document.getElementById('status').textContent = message;
    }
}

rtconnect.getStatus()
    .then((status) => {
        let message = '';
        switch (status) {
        case rtconnect.Status.ready:
            message = 'Готово к работе';
            break;
        case rtconnect.Status.noExtension:
            message = 'Расширение не установлено';
            break;
        case rtconnect.Status.noNative:
            message = 'Приложение не установлено';
            break;
        case rtconnect.Status.oldNative:
            message = 'Приложение необходимо обновить';
            break;
        case rtconnect.Status.oldExtension:
            message = 'Расширение необходимо обновить';
            break;
        case rtconnect.Status.error:
            message = 'Произошла ошибка, обратитесь в техническую поддержку';
            break;
        default:
            throw status;
        }
        setStatus(message);
    })
    .catch((error) => {
        const message = 'Неизвестен';
        console.warn(error);
        setStatus(message);
    });
