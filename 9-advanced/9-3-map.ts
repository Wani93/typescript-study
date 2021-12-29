{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    // T에 정의된 모든 속성들을 optional화
    [P in keyof T]?: T[P]; // for ... in
  };
  type VideoOptional = Optional<Video>; // 이렇게 구현하면 Video가 변경되어도 반영 됨

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };

  const video: ReadOnly<Video> = {
    title: 'test',
    author: 'wani',
  };

  // video.title = 'test2'; readonly여서 에러 발생

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    // 기존 타입을 proxy 타입으로 한번 더 감쌀 수도 있음
    [P in keyof T]: Proxy<T[P]>;
  };
}
