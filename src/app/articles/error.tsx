// error page has static name return automatically when error happened
'use client';
import Link from "next/link";

interface ErrorPageProps {
    error: Error; // error class from js .any place when you make threw new Error("") 
    reset: () => void; // from nextjs  return void  make rerender 
}

const ArticlesErrorPage = ({ error, reset }: ErrorPageProps) => {
    return (
        <div className="fix-height pt-7 text-center">
            <p className="mb-2">This is custom error page for articles route/page</p>
            <div className="text-3xl text-red-600 font-semibold">
                Something went wrong
            </div>
            <h2 className="text-gray-700 my-3 text-xl">
                Error Message: {error.message}
            </h2>
             {/* call reset func make rerender  */}
            <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Try again
            </button>
            <Link className="text-xl underline text-blue-700 block mt-6" href='/'>
                Go to home page
            </Link>
        </div>
    )
}

export default ArticlesErrorPage