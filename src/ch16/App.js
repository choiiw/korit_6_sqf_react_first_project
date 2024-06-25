import { useEffect, useState } from "react";
import "./App.css";
;

function App() {

    const emptyUser = {
        name: "",
        email: ""
    }

    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({ ...emptyUser });
    const [ imgSrc, setImgSrc ] = useState("");

    useEffect(() => {
        const lsUser = localStorage.getItem("user");
        setUser(!lsUser ? [] : JSON.parse(lsUser));
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const handleImgClick = () => {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();        
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }        
                    fileReader.readAsDataURL(file);
                }
            };

    const handleInputChange = (e) => {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        })
    )}
    
    const handleOkClick = (e) => {
        setUser(inputData);
    };

    
    return ( 
        <>
            <div className="out-box">
                <div className="container">
                    <div className="logo-box">
                        <h1>프로필</h1>
                    </div>                   
                    <div className="img-box" onClick={handleImgClick}>
                        <img src={imgSrc} />
                    </div>   
                    <div className="input-box">
                        <h3>이름</h3>
                       <input type="text" name="name" onChange={handleInputChange} value={inputData.name}/>
                    </div>
                    <div className="input-box">
                        <h3>이메일</h3>
                        <input type="text" name="email" onChange={handleInputChange} value={inputData.email}/>
                    </div>
                    <div className="bt-box">
                    <button onClick={handleOkClick}>저장</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default App;