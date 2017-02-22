export default function (win) {
    return function (url) {
        if (!!(win.history && history.pushState)){
            // 支持History API
            history.pushState(null, null, url);
        } else {
            // 不支持
        }
    }
}