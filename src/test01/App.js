import "./App.css";


function App() {

    return (
        <>
            <div className="out-box">
                <div className="container">
                    <div className="logo-box">
                        <h1>회원정보 수정</h1>
                    </div>
                    <div className="input-box">
                        <h3>이름:</h3>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <h3>이메일:</h3>
                        <input type="text" />
                    </div>
                    <div className="input-box">
                        <h3>비밀번호:</h3>
                        <input type="text" />
                    </div>
                    <div className="bt-box">
                        <button>저장</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;