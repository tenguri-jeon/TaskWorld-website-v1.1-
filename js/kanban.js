// 드래그 앤 드롭 이벤트 리스너 등록
document.addEventListener("dragstart", function (e) {
  if (e.target.classList.contains("task__outer")) {
    e.target.classList.add("is-dragging");
  }
});

document.addEventListener("dragend", function (e) {
  if (e.target.classList.contains("task__outer")) {
    e.target.classList.remove("is-dragging");
  }
});

// .tasklist__inner-container 요소에 대한 이벤트 위임 설정
document.addEventListener("dragover", function (e) {
  e.preventDefault();
  const curTask = document.querySelector(".is-dragging");

  if (curTask) {
    const zone = e.target.closest(".tasklist__inner-container");

    if (zone) {
      const bottomTask = insertAboveTask(zone, e.clientY);

      if (!bottomTask) {
        if (curTask.parentElement !== zone) {
          // 새로운 부모 노드로 이동
          zone.appendChild(curTask);
        }
      } else {
        if (bottomTask !== curTask.previousSibling) {
          // 같은 부모 노드 내에서 위치 변경
          zone.insertBefore(curTask, bottomTask);
        }
      }
    }
  }
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
