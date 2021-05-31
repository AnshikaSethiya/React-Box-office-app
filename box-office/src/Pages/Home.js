import React,{useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import {apiGet} from '../misc/config'
import ActorGrid from "../Components/actor/ActorGrid";
import ShowGrid from "../Components/show/ShowGrid";
import { useLastQuery } from '../misc/custom-hook';

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setsearchOption] = useState('shows')

    const isShowSearch = searchOption === 'shows';

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    }

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

    const onRadioChange = (ev) => {
        setsearchOption(ev.target.value)
    }

    const renderResults = () => {
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


    return (
        <MainPageLayout>
        <input type="text"
         placeholder="Search for something"
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}/>

        <div>
            <label htmlFor="shows-search">
            Shows
            <input id="shows-search"
             type="radio" value="shows"
             onChange={onRadioChange}
             checked={isShowSearch}
             />
            </label>

            <label htmlFor="actors-search">
            Actors
            <input id="actors-search"
             type="radio" value="people" 
             onChange={onRadioChange}
             checked={!isShowSearch}
             />
            </label>
        </div>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
        </MainPageLayout>
    )

}

export default Home;
