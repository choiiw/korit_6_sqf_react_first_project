/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainContainer from "../MainContainer/MainContainer";
import { FaBars } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { mainSidebarShowAtom } from "../../atoms/mainSidebarShowAtom";

function MainHeader() {

    const [ mainSidebarShow, setMainSidebarShow ] = useRecoilState(mainSidebarShowAtom)

    const handleMainMunuToggleClick = () => {
        setMainSidebarShow(true);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
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

export default MainHeader;