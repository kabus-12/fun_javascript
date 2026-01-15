//회원가입.js

//4글자 이상 15자리 이하 값이 아니면 알림창으로 메시지를 보내고
//다시입력할 수 있도록 입력된 값을 선택해주세요
document.querySelector('button[class *= "a"').addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector("#user-id").value;
  const pwd = document.querySelector("#user-pw1").value;
  const pwdck = document.querySelector("#user-pw2").value;

  if (id.length < 4 || id.length > 15) {
    alert("아이디를 다시 입력해주세요");
    document.querySelector("#user-id").focus();
    return;
  }

  if (pwd.length < 8) {
    alert("비밀번호를 다시입력해주세요");
    document.querySelector("#user-pw1").focus();
    document.querySelector("#user-pw1").value = "";
    return;
  }

  if (pwdck != pwd) {
    alert("비밀번호와 일치하지 않습니다.");
    document.querySelector("#user-pw2").focus();
    document.querySelector("#user-pw2").value = "";
    return;
  }
  alert("회원가입완료");
});
