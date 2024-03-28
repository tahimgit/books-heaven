import { NavLink } from 'react-router-dom'
import one from '../../../public/images/one.jpg'

export default function Banner() {
    return (
        <div>
            <div className="hero max-w-[90%] mt-8 m-auto h-[600px] bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={one} className="max-w-sm rounded-lg shadow-2xl" alt="Banner" />
                    <div className='mr-32'>
                        <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                        <NavLink to={'/listedBook'} className="btn bg-green-500 text-white mt-12 w-48">View The List </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
