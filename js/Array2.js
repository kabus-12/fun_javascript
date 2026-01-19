//array2.js
//1.회의용품 카테고리명 중 첫번째 상품명과 가격
fetch("js/data3.json")
  .then((reap) => reap.json())
  .then((data) => {
    let category = data.find((e) => {
      return e.상품카테고리 == "회의용품";
    });
    console.log(category.상품명, category.가격);
  })
  .catch((err) => {
    console.log(err);
  });

//2.판매자명이 펜스토어인 상품의 가격이 1000원 이상인지 판별
fetch("js/data3.json")
  .then((reap) => reap.json())
  .then((data) => {
    // let pan = data.forEach(({ 상품명, 가격, 판매자정보 }) => {
    //   if (가격 > 1000 && 판매자정보.판매자명 == "펜스토어") {
    //     console.log(`1000원이 넘는 펜스토어 제품은 ${상품명}가 있습니다. `);
    //   }
    // });
    // console.log(pan);
    const result = data
      .filter((elem) => elem.판매자정보.판매자명 == "펜스토어")
      .every((elem) => elem.가격 >= 1000);
    if (result) {
      console.log("전부 1000원이상입니다.");
    } else {
      console.log("1000원이하의 제품도 있습니다");
    }
  })
  .catch((err) => {
    console.log(err);
  });
//3.상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별
fetch("js/data3.json")
  .then((reap) => reap.json())
  .then((data) => {
    const result = data
      .reduce((acc, elem) => {
        if (elem.상품카테고리 == "필기구") {
          acc.push(elem);
        }
        return acc;
      }, [])
      .some((elem) => elem.평점 >= 4);
    if (result) {
      console.log("4점이 넘는 상품이 있습니다.");
    } else {
      console.log("4점이 넘는 상품이 없습니다.");
    }
  })
  .catch((err) => {
    console.log(err);
  });
