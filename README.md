## 프로젝트 생성 
- $ npm create-react-app 프로젝트명 

## 라이브러리 설치 
- $ npm i react-router-dom
- Emotion > $ npm i @emotion/react
- Recoil > $ npm i recoil
- React Icons > $ npm i react-icons
- sweetalert2 > $ npm i sweetalert2

## JSX 자동완성
- Ctrl + Shift + p
- user.setting (JSON) vscode 사용자 설정 
- 설정 추가

```JSON
    "emmet.syntaxProfiles": {
      "javascript": "jsx" 
     },
    
     "emmet.includeLanguages": {
       "javascript": "html"
    }
```

## 확장기능(Exrension)
- reactjs code snippets
- vscode-color-picker
- vscode-styled-components

## 터미널 선택
- Ctrl + Shift + p
- terminal: Select Default Profile 선택
- git bash 선택 

## 폴더 구조 
- components
- pages
- constants
- styles
- hooks
- configs
- utils
- atoms
- assets (이미지, 외부 파일 )
- apis (services)
- store

## 주요 Hook 함수 
- useState(기본값)
- useEffect(() => {}, [])
- useRef(기본값)
- useMemo(() => 리턴, [])
- useCallback(() => {} , [])
- useRecoil(atom)
- useNavigate()
- useLocation()
- useParams()
- useSearchParams()

## 명명규칙
- Component 이름은 대문자로 시작
- 하나의 Component폴더에는 하나의 Component.jsx파일, style.js파일로 구성
- constants폴더에 들어가는 상수들은 대문자와 스네이크 표기법을 작성
- 이벤트 함수명은 handle로 시작해서 이벤트명으로 끝낸다.