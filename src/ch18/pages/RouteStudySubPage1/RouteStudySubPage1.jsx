/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import * as s from "./style";

function RouteStudySubPage1() {
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path="name" element={<h1>kom</h1>} />
                        <Route path="age" element={<h1>asdas</h1>} />
                        <Route path="address" element={<h1>fsdfsd</h1>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage1;