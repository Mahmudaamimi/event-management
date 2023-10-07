import children from '../assets/children.png'

const Courses = () => {
  return (
    <div className='flex flex-col md:flex-row gap-7'>
      {/* <h1>Join our Educare Academy today</h1> */}
      <div className='flex-1'>
        <img src={children} alt="Sample 1" />
      </div>  
      <div className='flex-1'>
        <h1 className='md:text-3xl md:font-bold mb-5'>Every child deserves the chance to learn.</h1>
        <p className='md:leading-9 md:text-xl'>
          Across the globe, 617 million children are missing basic math and
          reading skills. We’re a nonprofit delivering the education they need,
          and we need your help. You can change the course of a child’s life.
        </p>
      </div>
    </div>
  );
};

export default Courses;
