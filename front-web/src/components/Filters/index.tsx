import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    linkText: string;
    link: string;
}

const Filters = ({linkText, link}: Props) => {
    return (
        <div className="filters-container records-actions">
            <Link to={link}>
                <button className="action-filters">
                    {linkText}
                </button>
            </Link>
        </div>
    );
}

export default Filters;