// 영화정보 객체 JS - JS4-1.object.js

// 탐쌤의 오브젝트!
// -> 변경가능하게 let으로 선언한다!
let ssgObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
kmjObj.title = "위키드";
// 2. 감독
kmjObj.director = "존추";
// 3. 배우
kmjObj.actor = "신시아 에리보, 아리아나 그란데";
// 4. 장르
kmjObj.genre =
  " 판타지";
// 5. 관람가
kmjObj.ratings = "전체 관람가";
// 6. 예고편
kmjObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("eblQHvJTHcc");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", kmjObj);

<iframe width="1280" height="720" src="https://www.youtube.com/embed/eblQHvJTHcc" title="[위키드] 대한민국 단독 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>