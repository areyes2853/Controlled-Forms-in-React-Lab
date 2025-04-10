import { useState } from 'react';

const Bookshelf = () => {
    // 2. Define the initial state
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    // Correctly initialize newBook as an object with empty strings
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    // 3a. handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Get name ('title' or 'author') and value from the input
        // Update the newBook state object
        setNewBook((prevNewBook) => ({
            ...prevNewBook, // Copy existing properties
            [name]: value    // Update the specific property that changed
                           // [name] uses the variable 'name' as the key
        }));
    };

    // 3b. handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault(); // Stop default form submission behavior
        // Add the current newBook object to the books array
        setBooks((prevBooks) => [...prevBooks, // Copy the existing books array
            newBook       // Add the new book object
        ]);
        // Reset the newBook state (and the form fields) to empty
        setNewBook({ title: '', author: '' });
    };

    // 1. & 4. & 5. Component structure, Form creation, and Mapping Books
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* 4. Form Creation */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            name="title" // name attribute matches the key in newBook state
                            type="text"
                            value={newBook.title} // Controlled input: value comes from state
                            onChange={handleInputChange} // Update state on change
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author"
                            name="author" // name attribute matches the key in newBook state
                            type="text"
                            value={newBook.author} // Controlled input: value comes from state
                            onChange={handleInputChange} // Update state on change
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>

            <div className="bookCardsDiv">
                {/* 5. Map through your books */}
                {books.map((book, index) => (
                    // Use parentheses () for implicit return, or add `return` inside {}
                    // Add a unique key prop
                    <div key={index} className="bookCard"> {/* Added a key and a class for potential styling */}
                        <h4>{book.title}</h4> {/* Correctly access book.title */}
                        <p>by {book.author}</p> {/* Correctly access book.author */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;