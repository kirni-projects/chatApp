import { IoSearchOutline  } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full placeholder:text-gray-600' />
        <button type='submit' className='btn btn-circle bg-lime-400 text-black'>
        <IoSearchOutline  className='w-6 h-6 outline-none'/>

        </button>
    </form>
  )
}

export default SearchInput