import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shopacolIcon from '../assets/shopacol-icon.png'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-darkblue">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 h-30 flex gap-3">
        <img src={shopacolIcon} alt="Shopacol Icon" className='h-[100%] hover:cursor-pointer'/>
        <form className='flex-1'>
          <div className='flex bg-white rounded'>
            <input type="text" className='w-full h-10 rounded px-3 flex-1'/>
            <div className='flex text-center p-1 mr-3'>
              <button type="submit" className="bg-darkblue h-full aspect-square text-white hover:cursor-pointer"><FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;