{
    // login 함수 작성: success, fail 리턴
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'faile';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            result: "success",
            response: {
                body: 'logged in!'
            }
        }
    }

    // Quiz
    // state가 SuccessState면 body 내용을 출력하고
    // state가 FailState면 reason 내용을 출력하라.
    function printLoginState(state: LoginState) {
        if(state.result === 'success') {    // 1-5 방법 보다 이 방법이 더 좋다! 공통적인 property를 가져서 분기를 나누기 쉽게~
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😂 ${state.reason}`);
        }
}