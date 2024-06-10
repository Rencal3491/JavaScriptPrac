// callback 은 함수 파라미터로 함수를 전달하여, 
// 비동기 처리가 끝났을 때 전달된 함수를 실행.
// 가독성이 좋지 못하여 디버깅 및 유지보수가 힘들다

const DB = [];

// 회원가입 api 함수
// 1. 가입 api를 호출하며 데이터베이스에 저장
// 2. 유저 정보를 보내고
// 3. 성공메시지를 보여주게 처리

function register(user) {                       // 회원 처리
    return saveDB(user,function(user) {         // 데이터베이스에 저장 콜백
        return sendEmail(user,function(user) {  // 메일 발송 콜백
            return getResult(user);             // 결과 콜백
        })       
    }) 
}