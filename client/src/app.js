// client/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        axios.get('/api/boards')
            .then(response => setBoards(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Meine Boards</h1>
            <ul>
                {boards.map(board => (
                    <li key={board._id}>
                        {board.title}
                        <ul>
                            {board.lists.map(list => (
                                <li key={list._id}>
                                    {list.title}
                                    <ul>
                                        {list.cards.map(card => (
                                            <li key={card._id}>{card.title}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
