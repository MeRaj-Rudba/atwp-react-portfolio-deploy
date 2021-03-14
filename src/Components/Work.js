import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Work = (props) => {
    const { img, id } = props;
    
    const link = `/project/${id}`;
    
    return (
        <Link to={link} class="portfolio__item">
            <img src={img} alt="" class="portfolio__img" />
        </Link>
    );
};

export default Work;