import React from 'react'
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes'


function ThemeBtn() {
    const { theme, setTheme } = useTheme();

    return (
        <div className='flex w-[180px] bg-gray-200 h-[50px] p-1 rounded-full rounded'>
            <button onClick={() => setTheme('dark')} id="fimoon" className='rounded w-[120px] rounded-full items-center flex flex-row justify-center'>
                <FiMoon size={30} color='white' />
            </button>
            <button onClick={() => setTheme('light')} id="bisun" className='rounded w-[120px] rounded-full p-2 items-center flex flex-row justify-center'>
                <BiSun size={30} color='white' />
            </button>
        </div>
    )
}

export default ThemeBtn;