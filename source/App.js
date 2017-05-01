import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardList = [
    {
        id: 1,
        title: "Read the book",
        description: "I should read the entire book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along witht the samples in the book",
        status: "todo",
        tasks: [
            {
            id: 1,
            name: "ContactList Example",
            },
            {
            id: 2,
            name: "Kanban Example",
            done: false
            },
            {
            id: 3,
            name: "My own experiments",
            done: false
            }
        ]
    }
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));