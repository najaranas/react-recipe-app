export default function MainContent({ data }) {
  return (
    <div className="main-content">
      {data.map((item, index) => {
        return (
          <div key={index} className="meal-item">
            <img alt="" src={item.imgSrc} />
            <div className="meal-item-data">
              <div className="top">
                <h3>{item.mealTitle}</h3>
                <h3 className="price">{item.price}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
