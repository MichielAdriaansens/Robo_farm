import React from 'react';
import Card from './Card';

const GenerateRobots = ({ robotList, search }) => {

    let robots = [];

    if (search.length > 0) {
        //use filtered list 
        let filteredRoboList = robotList.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase());
        });

        robots = filteredRoboList.map((robot, i) => {
            return <Card name={robot.name} email={robot.email} id={robot.id} key={i} />
        });
    } else {
        //use default list
        robots = robotList.map((robot, i) => {
            return <Card name={robot.name} email={robot.email} id={robot.id} key={i} />
        });
    }

    return (
        <div className='tc'>{robots}</div>
    );
};

export default GenerateRobots;