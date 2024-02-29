import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/signin'>Signin</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
