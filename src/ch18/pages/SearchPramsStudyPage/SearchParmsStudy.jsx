import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParmsStudy() {
    const [ searchParmas, setSearchParams ] = useSearchParams();

    console.log(searchParmas.get("a"));
    console.log(searchParmas.get("b"));
    // setSearchParams({...searchParmas, c: 30});

    const handleClick = () => {
        const keys = searchParmas.keys();

        let newParams = {

        };
        for(let i= 0; i < searchParmas.size; i++){
            const key = keys.next().value;
            const value = searchParmas.get(key);
            newParams = {
                ...newParams,
                [key]: value
            };
        }
        setSearchParams({ ...newParams, c: 30 });
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParmsStudy;