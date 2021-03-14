import React from 'react';

const Introduction = () => {
    


    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Someone</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src='https://images.unsplash.com/photo-1495874418447-4a9bab856d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1' alt="Me smiling" className="intro__img" />
        </section>
    );
};

export default Introduction;