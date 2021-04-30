const Section = ({ title, subtitle, id, color }) => {
  return (
    <div className={`section section-${color}`} id={id}>
      <div className='section-content'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
