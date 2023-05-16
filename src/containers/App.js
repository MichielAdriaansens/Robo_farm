import { useEffect, useState } from 'react';
import GenerateRobots from '../components/GenerateRobots';
import SearchBox from '../components/SearchBox';
import './App.css';
import roboSeedList from '../components/roboList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [robotList, setRobotList] = useState([]);

    async function loadrobotList() {
        try {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then(result => result.json())
                .then(users => {
                    setRobotList(users);
                });
        }
        catch (err) {
            console.log('Error: Loading roboSeedList!', err);
            setRobotList(roboSeedList);
        }
    }

    useEffect(() => {
        loadrobotList();
    }, []);

    return (
        <>
            <div className='center tc bg-light-green o-90 w-80 ma3 pa3 br3 bw2 ba b--light-silver'>
                <h1 className='f1 tc mt0'>ROBO FARM</h1>
                {robotList.length > 0 && <SearchBox setUserInput={setUserInput} />}
            </div>
            {!robotList.length > 0 ?
                <h1 className='tc mt6 dark-red'>!LOADING!</h1>
                :
                (<Scroll>
                    <ErrorBoundry>
                        <GenerateRobots robotList={robotList} search={userInput} />
                    </ErrorBoundry>
                </Scroll>
                )
            }
        </>
    );
}

export default App;