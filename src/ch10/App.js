import { useRef, useState } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ inputValue, setInputValue] = useState({...emptyUser});
    const [ users, setUsers ] = useState([]);


    const handleInputChange = (e) => {
        setInputValue(inputValue => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            
            };
        });
    };

    const handleInputKeyDown = (e) => {
       
        if(e.keyCode === 13){
            if(e.target.name === "username" ){
                inputRef.b.current.focus();
            }   

            if(e.target.name === "password" ){       
            inputRef.c.current.focus();
            }

            if(e.target.name === "name" ){
                inputRef.a.current.focus();
                setUsers([...users, { ...inputValue }]);
                setInputValue({...emptyUser});
            }
        }
    };
    
    return <>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동 
            2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value들 초기화 
        */ } 
        <input name="username" placeholder="사용자명" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.a} value={inputValue.username}/>
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.b} value={inputValue.password}/>
        <input name="name" placeholder="이름" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.c} value={inputValue.name}/>
        {/*
            3. tbody -> tr 묶음을  userList에서 map통해 렌더링
            4. table 디자인 -> border:1px solid #dbdbdb;
        */ } 

        <table style={{border: "1px solid #dbdbdb"}}>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>  
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
}

export default App;