import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Topbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(true);             // Assuming user is logged in if token exists
    } else {
      setUser(false);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/authform');
  }



  return (
    <div className='topbar  flex flex-row justify-between p-4 mx-4 items-center'>
      <div className='logo flex gap-2 items-center'>
        <img src='src\assets\logo.svg' alt='logo' className='w-6' />
        <h1>Ai Recipe Finder</h1>
      </div>

      <div className='user flex items-center'>

        {user ?
          <div className="rounded-2xl mx-5">
            <button className='hover:bg-amber-50 border px-2 rounded' onClick={toggleDropdown}>Menu</button>

            {isOpen &&
              <div ref={dropdownRef} className='dropdown absolute shadow-lg p-2 rounded gap-2'>
                <ul className='flex flex-col px-2 rounded '>
                  <li className='bg-white hover:bg-[#a4a5a6]-50'><button onClick={() => navigate('/profile')}>Profile</button></li>
                    
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            }
          </div>
          :
          <button className='bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600'
            onClick={() => navigate('/authform')}> Login</button>
        }
      </div>

    </div>
  )
}

export default Topbar