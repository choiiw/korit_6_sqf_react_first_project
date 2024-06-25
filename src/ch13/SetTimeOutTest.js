function SetTimeOutTest() {
    /**
     * 비동기 
     */

    setTimeout(() => {
        print(count);
    }, 2000);  //callback 함수

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {   
        console.log(1);
        console.log(2);
        console.log(3);
    }

    function test(fx) {
        console.log("테스트 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출")
    }

    test(add);
    
    return ( 
        <>
            
        </>
     );
}

export default SetTimeOutTest;