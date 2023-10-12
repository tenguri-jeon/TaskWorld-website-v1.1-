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

function setCursorStyle() {
  const list = document.querySelector('.kanban-columns');
  if (list.scrollWidth > list.clientWidth) {
    list.style.cursor = 'grabbing'; // 스크롤이 있는 경우
  } else {
    list.style.cursor = 'auto'; // 스크롤이 없는 경우
    list.style.transform = 'translateX(0px)';
  }
}

// 페이지 로드될 때 실행
window.addEventListener('load', setCursorStyle);
window.addEventListener('resize', setCursorStyle);

const list = document.querySelector('.kanban-columns');
let isDragging = false;
let startX = 0;
let listX = 0;

list.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'P' || e.target.tagName === 'SPAN') {
    e.preventDefault(); // 드래그를 시작하지 않도록 차단
    return;
  }
  isDragging = true;
  startX = e.clientX;
  list.style.transition = 'none';
  list.classList.add('panning'); // CSS 클래스 추가
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  listX += deltaX;
  
  // 최대 이동 제한
  const maxListX = list.clientWidth - list.scrollWidth - 62;
  if (listX > 0) {
    listX = 0;
  } else if (listX < maxListX) {
    listX = maxListX;
  }

  list.style.transform = `translateX(${listX}px)`;
  startX = e.clientX;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;

  isDragging = false;
  list.style.transition = 'all 0.3s ease';
  list.classList.remove('panning'); // CSS 클래스 제거

  // 마우스를 놓았을 때 움직임이 멈추며, 원하는 추가 동작을 이곳에 추가하세요.
});

