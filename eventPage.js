var myAudio = new Audio("./assets/notification.mp3");

chrome.alarms.onAlarm.addListener(function (alarm) {
  myAudio.play();
});

chrome.alarms.offAlarm.addListener(function (alarm) {
  myAudio.pause();
});
