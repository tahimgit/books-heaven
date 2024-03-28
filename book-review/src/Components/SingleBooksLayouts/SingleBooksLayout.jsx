

export default function SingleBooksLayout() {
    return (
        <div>
            <div className="flex gap-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    
                </div>
                <div>
                    <h1>The Catcher in the Rye</h1>
                    <h2>By : Awlad Hossain</h2>
                    <div >
                        <p>hashtags</p>
                        <p>ha shtags</p>
                        <p>location</p>
                        <p>tags </p>
                    </div>
                    <div>
                        <p>publisher: scribner</p>
                        <p>
                            page
                        </p>
                    </div>
                    <div>
                        <button>catagory </button>
                        <button> rating</button>
                        <button>view details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
