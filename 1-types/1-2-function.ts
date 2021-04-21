{
    // // JavaScript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript 😎
    // function Add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavsScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript 😎
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // Optional Parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName); 
        console.log(lastName);  // 전달하지 않으면 undefined가 됨.          
    }
    printName('Steve', 'Jobs');
    printName('Byeongwan');
    printName('test', undefined);

    // Default Parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((previous, current) => {
            return previous + current;
        });
    }
    addNumbers(1,2,3);
    addNumbers(1,2,3,4,5);
    addNumbers(1,2,3,4,5,6,7);
}