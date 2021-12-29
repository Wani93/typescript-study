{
  type NetworkErrorState = {
    result: 'false';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
      // tryConnect(): ResultState {
      // throw new Error('No network!'); 예상 가능한 에러에서 throw new Error를 처리하는 건 좋지 않음
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      // 로그인을 하면 연결 실패 Error 발생!
      // 여기서 try를 사용하는 것이 좋을까?
      // 아니다. 여기서 try를 해도 유의미한 에러 처리를 할 수 없기 때문
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      // Error Handling은 어느 부분에서 처리하는게 유의미한지 생각하고 짜야함
      // 여기서 로그인 Error Handling을 한다면
      // dialog를 보여주는 처리가 가능
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }
}
