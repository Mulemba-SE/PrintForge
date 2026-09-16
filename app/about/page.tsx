
export default function AboutPage() {
    return (
        <main>
            <section className="max-w-4xl px-4 py-12 mx-auto">
                <h1 className="mb-8 text-4xl font-bold text-center">
                    About PrintForge
                </h1>

                <div className="grid items-center gap-8 mb-12 md:grid-cols-2">

                    <div className="flex items-center justify-center w-full h-[300px]">
                       <img
                            src="hero-image 2.png"
                            alt="PrintForge community collaborating on 3D printing projects"
                            width={350}
                            className="w-full max-w-[350px] h-auto"
                        />
                    </div>

                    <div>
                        <p className="mb-4 text-sm text-gray-600 uppercase">
                            About PrintForge
                        </p>

                        <h2 className="mb-4 text-2xl font-semibold">
                            Empowering Makers Worldwide
                        </h2>

                        <p className="mb-4 text-gray-700">
                            Founded in 2023, PrintForge has quickly become the
                            go-to platform for 3D printing enthusiasts, makers,
                            and professional designers to share and discover
                            amazing STL files for 3D printing.
                        </p>

                        <p className="text-gray-700">
                            Our mission is to foster a vibrant community where
                            creativity meets technology, enabling anyone to
                            bring their ideas to life through 3D printing.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" />

            <section className="py-12">
                <div className="max-w-7xl px-6 mx-auto">

                    <h2 className="sr-only">
                        Key Features
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3 md:gap-0">

                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold">
                                100K+ Models
                            </h3>

                            <p className="text-gray-600">
                                Access our vast library of community-created
                                3D models, from practical tools to artistic
                                creations.
                            </p>
                        </article>

                        <article className="p-6 bg-white border-gray-400 md:border-x">
                            <h3 className="mb-3 text-xl font-semibold">
                                Active Community
                            </h3>

                            <p className="text-gray-600">
                                Join thousands of makers who share tips,
                                provide feedback, and collaborate on projects.
                            </p>
                        </article>

                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold">
                                Free to Use
                            </h3>

                            <p className="text-gray-600">
                                Most models are free to download, with optional
                                premium features for power users.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            <hr className="border-gray-200" />

            {/* Vision */}
            <section className="max-w-3xl px-4 py-12 mx-auto">
                <div>
                    <h2 className="mb-4 text-2xl font-semibold">
                        Our Vision
                    </h2>

                    <p className="mb-4 text-gray-700">
                        At PrintForge, we believe that 3D printing is
                        revolutionizing the way we create, prototype, and
                        manufacture. Our platform serves as a bridge between
                        designers and makers, enabling the sharing of knowledge
                        and creativity that pushes the boundaries of what's
                        possible with 3D printing.
                    </p>

                    <p className="text-gray-700">
                        Whether you're a hobbyist looking for your next weekend
                        project, an educator seeking teaching materials, or a
                        professional designer wanting to share your creations,
                        PrintForge provides the tools and community to support
                        your journey in 3D printing.
                    </p>
                </div>
            </section>
        </main>
    );
}