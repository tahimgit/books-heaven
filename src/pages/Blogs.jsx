

const Blogs = () => {
    return (
        <div className="mx-auto px-8 py-6">
            <div className="bg-blue-300	py-4 rounded-lg	my-6">
                <h2 className="text-center text-black	 text-xl	font-medium">Our Blogs</h2>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Blog For Fiction
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>Bag Full of Books</li>
                        <li>Kath Reads</li>
                        <li> Miranda Notebook </li>
                        <li>The Bibliofile</li>
                        <li>The Book Satchel</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Blog For Novels
                </div>
                <div className="collapse-content">
                    <ul>

                        <li>Crime By the Book</li>
                        <li>She Reads Romance Books</li>
                        <li>The Espresso Edition</li>
                        <li>The Literary Lifestyle</li>
                        <li>Never Enough Novels</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Blog For General Books
                </div>
                <div className="collapse-content">
                    <ul>

                        <li>What’s Hot?</li>
                        <li>Juliet’s Library</li>
                        <li>The Ardent Biblio</li>
                        <li>The Literary Edit</li>
                        <li>Books and Bao</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;