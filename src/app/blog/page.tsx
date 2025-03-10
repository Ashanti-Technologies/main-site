import Link from "next/link";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { getSortedPostsData, getCategories } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
    const blogPosts = getSortedPostsData();
    const categories = getCategories();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Stay updated with the latest tech news, insights, and company updates.
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {blogPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>

                            {/* Pagination - Only show if we have more than 6 posts */}
                            {blogPosts.length > 6 && (
                                <div className="mt-12 flex justify-center">
                                    <nav className="flex items-center space-x-2">
                                        <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            Previous
                                        </a>
                                        <a href="#" className="px-4 py-2 border border-[var(--ashanti-blue)] bg-[var(--ashanti-blue)] rounded-md text-white">
                                            1
                                        </a>
                                        <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            2
                                        </a>
                                        <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            3
                                        </a>
                                        <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            Next
                                        </a>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                <h3 className="text-xl font-bold text-[var(--ashanti-blue-dark)] mb-4">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--ashanti-blue)]"
                                    />
                                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                <h3 className="text-xl font-bold text-[var(--ashanti-blue-dark)] mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((category, index) => (
                                        <li key={index}>
                                            <Link
                                                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-gray-700 hover:text-[var(--ashanti-blue)] flex items-center"
                                            >
                                                <ArrowRight className="h-4 w-4 mr-2" />
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-[var(--ashanti-blue-dark)] mb-4">Recent Posts</h3>
                                <ul className="space-y-4">
                                    {blogPosts.slice(0, 3).map((post) => (
                                        <li key={post.slug} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                            <Link href={`/blog/${post.slug}`} className="hover:text-[var(--ashanti-blue)]">
                                                <h4 className="font-medium text-gray-800 mb-1">{post.title}</h4>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-[var(--ashanti-blue-dark)] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                        <p className="text-lg mb-8">
                            Stay updated with our latest articles, news, and tech insights. We promise not to spam your inbox!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--ashanti-blue-light)] text-gray-800 w-full sm:w-auto sm:flex-1 max-w-md"
                            />
                            <button className="bg-white text-[var(--ashanti-blue-dark)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 