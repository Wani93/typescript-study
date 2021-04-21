{
    /**
     * Tyep Alias
     */
    type Text = string;
    const name: Text = 'byeongwan';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'byeongwan',
        age: 20
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let firstName: Name;
    firstName = 'name';
    type JSON = 'json';
    const json:JSON = "json";
}