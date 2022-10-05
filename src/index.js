const Status = Object.freeze({
    noExtension: -1,
    ready: 0,
    noNative: 1,
    oldExtension: 2,
    oldNative: 3,
    error: 4,
});
const lastStatus = Status.error;

const isFirefox = (function checkIsFirefox() {
    const ua = window.navigator.userAgent;
    return !!ua.match(/firefox/i) && !ua.match(/seamonkey/i);
}());

let status;
let statusPromise;

function getStatus() {
    if (status !== undefined && status !== null) return Promise.resolve(status);
    if (statusPromise !== undefined) return statusPromise;

    let resolve;
    let reject;
    statusPromise = new Promise((resolveCallback, rejectCallback) => {
        resolve = (value) => {
            if (statusPromise !== undefined && status !== null) {
                resolveCallback(value);
            }
            status = value;
            statusPromise = undefined;
        };

        reject = (reason) => {
            if (statusPromise !== undefined && status !== null) {
                rejectCallback(reason);
            }
            status = null;
            statusPromise = Promise.reject(reason);
        };
    });

    const onMessage = (event) => {
        if (event.source !== window || event.data === undefined || event.data.rutoken === undefined
            || event.data.rutoken.uuid !== 'EE4F9C58-64D8-4FCD-AB45-0E3040EEB37D') {
            return;
        }

        const { status: newStatus } = event.data.rutoken;
        if (newStatus !== undefined && newStatus >= 0 && newStatus <= lastStatus) {
            resolve(newStatus);
        } else {
            reject(new Error(`Couldn't parse extension status: ${newStatus}`));
        }
    };

    window.addEventListener('message', onMessage);

    let url = 'chrome-extension://acbchkahfmndkenefkcklofjmipghjjp/check_rtconnect_extension';
    const options = {};

    if (isFirefox) {
        url = 'https://qbwjg564lyt1tdfo23xz5l3udvdfe0ux.rutoken.ru/api/v1/check_rtconnect_extension';
        options.mode = 'no-cors';
    }

    return fetch(url, options).then(() => {
        // request in firefox is not canceled - no extension
        // request in chrome is successful - extension will send status
        if (isFirefox) {
            resolve(Status.noExtension);
        }
    }).catch((reason) => {
        // request in firefox is canceled - extension is present
        // request in chrome failed - no extension
        if (isFirefox) {
            setTimeout(() => {
                if (status === undefined) {
                    window.removeEventListener('message', onMessage);
                    reject(reason);
                }
            }, 2000);
        } else {
            resolve(Status.noExtension);
        }
    }).then(() => {
        if (status !== undefined && status !== null) {
            return status;
        }
        return statusPromise;
    });
}

export { Status, getStatus };
