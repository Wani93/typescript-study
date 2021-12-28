// Exception: 예상하지 못한 에러
// Error State: 예상할 수 있는 에러
// Error State와 Exception을 구분해서 사용할 필요가 있음!

// Java: Exception
// JavaScript: Error

// const array = new Array(10000000000000000000000); Range Error 발생!

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! File name: ${fileName}`);
  }
  return 'file contents✅';
}

function closeFile(fileName: string) {}

const fileName = 'not exist!';

// 에러가 발생할 수 있는 코드만 try문으로 실행것이 좋음
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log('catched!');
} finally {
  // finally에서 작성하면 에러가 발생되어도 실행을 보장
  closeFile(fileName);
  console.log('finally!');
}
