//요약. 어딘가에서 새로 사용이 될 때 함수 안에서의 자기 자신의 변수를 this로 사용하려면 람다, 바깥의 
// 바깥의 것을 사용하려면 객체이면 그냥 함수를 호출 후 this, 함수이면 람다함수를 이용한 후 그냥 호출?.

//=============================
// 함수
// let myFunction = () => {
//     return this;
// }

// function myFunction1(){
//     return this;
// }

// console.log(myFunction());
// console.log(myFunction1());

//=============================
// 메소드
// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//       return this.firstName + ' ' + this.lastName;
//     },
//   };

//   console.log(person.fullName());

//   var person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: ()=>{
//       return this.firstName + ' ' + this.lastName;
//     },
//   };

//   console.log(person1.fullName());



//=============================

// let a = 200;

// showNum =()=>{
//     console.log(this.a);
//     console.log(this.num)
//   console.log(this);
// }
// showNum(); //0

// var obj = {
//   num: 200,
//   func: showNum,
// };

// obj.func(); //200




 
// function showNum1() {
// console.log(this.a);
// console.log(this.num)
//   console.log(this);
// }
 
// showNum1(); //0
 
// var obj1 = {
//   num: 200,
//   func: showNum1,
// };
 
// obj1.func(); //200



//   //=============================
//     //여기서 부터는 하나씩 풀면서
//     //람다 함수는 애초에 생성자함수가 될 수 없다.
//     //대신 이 방식을 써보자
//     Person = (name)=>{
//     this.name = name;
//     return this;
//     }
   
//     var kim = Person('kim');
//     var lee = Person('lee');
   
//     console.log(kim.name); 
//     console.log(lee.name); 
//     // 가능하다. 람다는 정적 콘텍스트이기 때문에 자기 자신을 반환.. 즉 둘다 lee를 출력


//   function Person(name) {
//     this.name = name;
//   }
   
//   var kim = new Person('kim');
//   var lee = new Person('lee');
   
//   console.log(kim.name); //kim
//   console.log(lee.name); //lee
  


  //=============================



  function whoisThis() {
    console.log(this);
  }
   
  whoisThis(); //window
   
  var obj = {
    x: 123,
  };
   
  whoisThis.call(obj); //{x:123}
  


  //=============================




  //=============================




  //=============================




  //=============================



  //=============================




  //=============================

  
  //**  함수형 리액트는 람다로 선언이 되었으므로 this를 이용하면 자기 자신이 되는 것이었던 것이다!
  //**  함수형은 정의되지않고 실행되는 함수에서 this를 사용하기 위해서는 람다함수 클래스 같이 정의된 다음 사용하는 모음집에는 그냥 함수 정의문에 this를 사용.
  //**  만약 바깥 함수문에서 객체 안에 없이 사용할 거면 bind를 하던가 애초에 람다함수를 사용(단 객체형 같은 경우는 {a:b , c:() => this.a}에서 자기 자신만 사용하므로 람다 자체가 사용 불가능. 이럴 때는 함수 정의문으로 사용해서 이 객체를 지정해야한다.)
  //**  즉 요약하면 함수 정의문의 this는 자신을 정의시키는 클래스를 가르키고 람다의 this는 자기 자신이나 자신을 포함하는 실행하는 함수를 생각한다.