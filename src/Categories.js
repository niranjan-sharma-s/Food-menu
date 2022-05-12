import React from "react";

//Manual approach to filtering Items
// const Categories = ({filterItems}) => {
//   return <section className='btn-container'>
//     <button className='filter-btn' onClick={() => filterItems('all')}>All</button>
//     <button className='filter-btn'onClick={()=> filterItems('breakfast')}>Breakfast</button>
//     <button className='filter-btn'onClick={()=> filterItems('lunch')}>Lunch</button>
//     <button className='filter-btn'onClick={()=> filterItems('shakes')}>Shakes</button>
//   </section>;
// };

//Dynamic approach to filtering Items

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
