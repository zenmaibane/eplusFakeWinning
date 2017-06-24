const failureNotifications = document.getElementsByClassName("win-failure")
Array.prototype.slice.call(failureNotifications).forEach(function(failureNotification) {
    failureNotification.children[2].innerHTML = "チケットをご用意いたしました。<br>発券に必要な払込票番号は、発券期間開始後にご案内します。"
    failureNotification.className = "win-situation"
});