import React from 'react';
import SingleCategories from './SingleCategories';

const Categories = () => {
    return (
      <div className="categories-shop">
        <div className="container">
          <div className="row">
            <SingleCategories img="images/categories_img_01.jpg"></SingleCategories>
            <SingleCategories img="images/categories_img_02.jpg"></SingleCategories>

            <SingleCategories img="images/categories_img_03.jpg"></SingleCategories>
          </div>
        </div>
      </div>
    );
};

export default Categories;