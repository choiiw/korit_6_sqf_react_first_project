/** @jsxImportSource @emotion/react */
import { FaBars, FaBook } from "react-icons/fa";
import MainContainer from "../../MainContainer/MainContainer";
import * as s from "./style";

function MainSidebarHeader({ setMainSidebarShow }) {
    
    const handleMainMunuToggleClick = () => {
        setMainSidebarShow(false);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button 
                         css={s.menuToggleButton} 
                         onClick={handleMainMunuToggleClick}
                    >
                            <FaBars />
                    </button>                
                </div>
            </MainContainer>
        </div>
    );
}

export default MainSidebarHeader;