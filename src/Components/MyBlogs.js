import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const MyBlogs = () => {

    return (

        <section class="about-me" id="blogs">
            <h2 class="section__title section__title--about">My Blogs</h2>
            <p class="section__subtitle section__subtitle--about"></p>

            <div class="about-me__body">
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/blogs" class="btn">Read Blogs</Link>
            </div>

            <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1' alt="" class="about-me__img" />
        </section>
    );
};

export default MyBlogs;