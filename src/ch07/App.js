
import { useState } from "react";

function App() {
    const emptyUser = {
        name: "",
        password: "",
        email: ""
    };

    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser})

    const handleInput = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    };
    const handleOkClick = () => {
        setUser(inputData);
    };
    // 리액트에서의 value는 상태로 만들어야 함.  상태를 분리시켜 어느 시점에 렌더링을 할 것인가  
    return <>
        <input  onChange={handleInput} placeholder="사용자이름" name="name" value={inputData.name}/>    
        <input  onChange={handleInput} placeholder="비밀번호" name="password" value={inputData.password}/>
        <input  onChange={handleInput} placeholder="이메일" name="email" value={inputData.email}/>
        <button onClick={handleOkClick}>확인</button>

        <ul>
            <li>사용자이름: {user.name}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>

}

export default App;

// 입력 하고 확인 누르면 밑에 뜨게 