//프로퍼티는 a.b = ~ 로 추가가 가능하다.

// 함수형 컴포넌트

// render가 필요가 없다.
// return만 있으면 된다.

// 1. usestate와 그 리턴 값 set~

// 2. useEffect()

// 3. useRef



// JS 생성자와 프로토타입에 대하여.

// const nameInput = useRef(); 이걸 보면 알겠지만 리턴 값이 생성자 함수(프로토타입)이므로
// 새로운 nameInput이라는 함수가 생긴 것이 아닐까?

// this 는 원래 생성자 함수나 클래스에 사용하는 것이잖아?

// 왜 {a:b}형식에는 람다가 this사용불가에 일반 함수가 가능하고 그 외에는 그 반대일까? 그 외에 상황에서는 왜 bind를 사용해야할 까 일반함수는?

// 클래스는 생성자에서 변수를 만드므로 let은 지역 변수를 만드는 것이고 또한 let 을 쓰지 않고 하는 경우는 어디에선가 선언되었다고 생각하는 것일까?
// 아 애초에 안되어서 완전히 밖에다가 선언을 했구나.