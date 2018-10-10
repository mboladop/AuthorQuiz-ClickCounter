import React from 'react';
import'./AddAuthorForm.css';

class AuthorForm extends React.Component {
    render () {
       return <form>
            <div className='AddAuthorForm_input'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name'/>
            </div>
            <div className='AddAuthorForm_input'>
                <label htmlFor='imageUrl'>Image Url</label>
                <input type='text' name='imageUrl'/>
            </div>
        </form>
    }
}


function AddAuthorForm({match}) {
    return <div className='AddAuthorForm'>
        <h1>Add Author</h1>
        <AuthorForm/>
    </div>;
}

export default AddAuthorForm;