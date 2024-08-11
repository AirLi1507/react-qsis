export function warnTextRemove() {
    document.querySelectorAll('.warnText').forEach(function(element) {
        element.remove();
    });
}