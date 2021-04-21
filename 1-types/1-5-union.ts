{
    /**
     * Union Type: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(dir: Direction) {
        console.log(dir);           
    }
    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 32;

    // login 함수 작성: success, fail 리턴
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!',
            }
        }
    }

    // Quiz
    // state가 SuccessState면 body 내용을 출력하고
    // state가 FailState면 reason 내용을 출력하라.
    function printLoginState(state: LoginState) {
        if('response' in state) {   // 이렇게 하면 구분 지을수 있지만 그닥 좋은 방법은 아니라고 한다..
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😂 ${state.reason}`);
        }
    }
}