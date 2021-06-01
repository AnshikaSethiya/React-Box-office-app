import React,{useState, useCallback} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import {apiGet} from '../misc/config'
import ActorGrid from "../Components/actor/ActorGrid";
import ShowGrid from "../Components/show/ShowGrid";
import { useLastQuery } from '../misc/custom-hook';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from '../Components/Home.styled';
import CustomRadio from '../Components/CustomRadio';


const renderResults = (results) => {
    if(results && results.length ===0 ){
        return <div>No results</div>
    }
    if (results && results.length > 0){
        // return results[0].show ?
        //  results.map((item) => (
        //     <div key={item.show.id}>{item.show.name}</div>
        //    )) : results.map((item) => (
        //     <div key={item.person.id}>{item.person.name}</div>
        //    ))

        return results[0].show ? (
        <ShowGrid data={results} /> 
        ): (
        <ActorGrid data={results}/>
        )}  
           return null 
    }

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setsearchOption] = useState('shows')

    const isShowSearch = searchOption === 'shows';

    const onInputChange = useCallback( ev => {
        setInput(ev.target.value);
    },[setInput]) 

    const onSearch = () => {

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
            })
       
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13){
            onSearch()
        }
    }

    const onRadioChange = useCallback (ev => {
        setsearchOption(ev.target.value);
    }, []);
    
    return (
        <MainPageLayout>
        <SearchInput 
        type="text"
        placeholder="Search for something"
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}/>

        <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        </RadioInputsWrapper>

        <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
            Search
        </button>
            {renderResults(results)}
        </SearchButtonWrapper>
        </MainPageLayout>
    )

}

export default Home;
