
import {React, useEffect, useState} from "react";
import './Topic.css'

export default function ComponentExample() {
    return(
        <div className="Topic">
            <h3>Component example</h3> 
            <p>I am a returned component</p>
        </div>
    );
}

export function PropsExample(props) {
    return(
        <div className="Topic">
            <h3>Props Example</h3>
            <p>Your name is : {props.name}</p>
            <p>and your age is: {props.age}</p>
        </div>
    )
}

export function UseStateExample() {
    const [myNumber, myNumberUpdater] = useState(0);
    const [myMessage, myMessageUpdater] = useState('unaltered Message');
    
    function alterNumber(num){
        myNumberUpdater(myNumber + num)
    }
    function handleMessageChange(event) {
        myMessageUpdater(event.target.value)
    }

    return (
        <div className="Topic">
            <h3>UseStateExample</h3>
            <p>{myNumber} cookies</p>
            <p>msg: {myMessage}</p>
            {/* <input type="number" name="number" id="numberId" /> */}
            {/* <button type="submit">Submit</button> */}
            <button onClick={()=> {myNumberUpdater(myNumber+1)}}>+1Cookie</button>
            <button onClick={()=> {myMessageUpdater('jam')}}>Update msg</button>
            <div>
                <label>
                    onChange update Message:
                    <input
                        value={myMessage}
                        onChange={handleMessageChange}>
                    </input>
                </label>
            </div>
        </div>
    )
}

//next is a use fetch example
export function UseEffectExample(){
    const items = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
        },
        {
            userId: 1,
            id: 3,
            title: "fugieat veniam minus",
            completed: false,
        },
    ];

    return (
        <div className="Topic">
            <h3>Items. UseEffectExample</h3>
            <ul>
                {items.map((item)=> (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export function UseEffectExampleWithFetch(){
    const [items, setItems] = useState([]);
    const [listLen, setListLen] = useState(20);


    useEffect(()=> {
        async function fetchData() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    function handleListLenChange(event){
        setListLen(event.target.value);
    }

    return (
        <div className="Topic">
            <h1>Items</h1>
            <p>Original len of items in obj:{items.length}</p>
            <p>current len of items in obj:{listLen}</p>
            <input type="number" name="listLen" onChange={handleListLenChange} />
            {/* The button stuff is event handling */}
            <button onClick={()=>setListLen(1+Number(listLen))}>+1</button>
            <button onClick={()=>setListLen(-1+Number(listLen))}>-1</button>
            <p onClick={()=>setListLen(-1+Number(listLen))}>
                I can also be clicked to do -1</p>
            <ul>
                {items.slice(0,listLen).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )

}

export function EventHandlingExample() {
    const [i,updateI] = useState(0);

    function incI(){ updateI(i+1); }

    return(
        <div className="Topic">
            <h3>Event Handling Example</h3>
            <p>{i}</p>
            <button onClick={()=>updateI(i+1)}>{i}</button>
        </div>
    );
}

export function ListAndKeysExample() {
    // map
    const numbers = [1,2,3,4,5];
    const doubledNumbers = numbers.map((number)=> number*2);
    // map iteration or keys
    const htmlItems = numbers.map((number)=><li key={number}>{number}</li>);

    return(
        <div className="Topic">
            <h3>List and Keys Example</h3>
            <div className="RenderingListsOfItems">
                <h4>Maps</h4>
                <p>numbers:{numbers.map((number)=>number+', ')}</p>
                <p>doubledNumbers:{doubledNumbers.map((number)=>number+', ')}</p>
                <p>Below we have mapped each number in numbers to a li tag</p>
            </div>
            <div className="Keys">
                <h4>Keys</h4>
                {/* inline map */}
                <ul>
                    <li>Inline map</li>
                    {numbers.map((number)=><li key={number}>{number}</li>)}</ul>
                {/* out of line map key */}
                <ul>
                    <li>Out of line map</li>
                    {htmlItems}</ul>
            </div>

        </div>
    )

}
