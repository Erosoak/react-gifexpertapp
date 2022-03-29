import React, { useState } from 'react';
import { Fragment } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertAdd = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <Fragment>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                { categories.map( category => <GifGrid key={ category } category={ category } /> ) }
            </ol>
        </Fragment>
    );
}