import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Post Not Found</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        We couldn&apos;t find the blog post you were looking for.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white flex-grow">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-[var(--ashanti-blue-dark)] mb-4">
                            The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Check the URL or try browsing our latest articles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/blog"
                                className="bg-[var(--ashanti-blue)] text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-[var(--ashanti-blue-dark)] transition-colors"
                            >
                                Browse All Articles
                            </Link>
                            <Link
                                href="/"
                                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                                Go to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 