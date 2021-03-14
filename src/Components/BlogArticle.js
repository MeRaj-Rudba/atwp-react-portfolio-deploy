import React from 'react';
import { useParams } from 'react-router-dom';


const BlogArticle = () => {
    let { id } = useParams();

    const blog = {

        blogID: 'b0003',
        title: 'Blog3',
        img1: 'https://images.unsplash.com/photo-1537346439163-eafb59bdc400?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
        img2: 'https://images.unsplash.com/photo-1536008758366-72fbc5b16911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
        date: '01-01-2021',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi accusamus fuga, ipsa asperiores ipsam ratione, distinctio autem laboriosam accusantium maxime sapiente. Animi sunt, enim quasi reprehenderit quod voluptas sed.',
    }


    return (
        <div>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    <strong>{blog.title}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Blog ID: {id}</p>
                <img src={blog.img1} alt="" class="intro__img" />
            </section>

            <div class="portfolio-item-individual">
                <p><strong>Date: </strong> {blog.date}</p>

                <img src={blog.img2} alt="" />
                <p className="section_paragraph">{blog.details}</p>

            </div>
        </div>
    );
};

export default BlogArticle;