import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategories, getPostsByCategory } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((category) => ({
        category: category.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params

    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${categoryName} Articles | Ashanti Technologies Blog`,
        description: `Read our latest articles about ${categoryName.toLowerCase()} from Ashanti Technologies.`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params
    // Convert slug format back to category name
    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Get posts for this category
    const posts = getPostsByCategory(categoryName);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white hover:text-[var(--ashanti-blue-light)]"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Articles
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryName}</h1>
                    <p className="text-xl max-w-3xl">
                        Browse our latest articles and insights about {categoryName.toLowerCase()}.
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold text-gray-700 mb-4">No articles found</h2>
                            <p className="text-gray-600 mb-8">
                                We couldn&apos;t find any articles in this category. Check back later or browse our other categories.
                            </p>
                            <Link
                                href="/blog"
                                className="bg-[var(--ashanti-blue)] text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-[var(--ashanti-blue-dark)] transition-colors"
                            >
                                Browse All Articles
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[var(--ashanti-blue-dark)] mb-6">Want to Learn More?</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        Contact our team of experts to discuss how our {categoryName.toLowerCase()} solutions can help your business grow.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[var(--ashanti-blue)] text-white px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-[var(--ashanti-blue-dark)] transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
} 