
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-[#5391cb]">
      <div className="rounded-lg bg-[#5391cb] p-16 text-center pb-44">
        <h1 className="text-[7rem] text-white font-bold mb-4">404</h1>
        <p className="text-gray-800 text-3xl font-bold mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <a href="/" className="mt-4 inline-block rounded bg-[#373030] px-5 py-3 font-semibold text-white hover:bg-[#302a2a]">
          Go back to Home
        </a>
      </div>
    </div>
  )
}

export default PageNotFound