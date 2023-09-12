
import imagesrc from '../assets/images/1686929814813-01.jpeg'

const Header = () => {
    return (
        <div>

            <div className='flex justify-between items-center'>
            <img className='w-24 h-24 rounded-full' src={imagesrc} alt="" />

              <h1 className='text-3xl font-bold text-gray-400 '>Knowledge <span className='text-red-500'>Cafe</span></h1>
            <ul style={{ display:'flex',listStyle:'none',gap:20, textDecoration:'none' }}>
                <li><a style={{ textDecoration:'none'}} href="#">Home</a></li>
                <li><a style={{ textDecoration:'none'}} href="#">About</a></li>
                <li><a style={{ textDecoration:'none'}} href="#">Contact</a></li>
               
            </ul>

            </div>
          
            
        </div>
    );
};

export default Header;