import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/blog';
import placeholderImage from '../../../../public/images/placeholder.webp';

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = await getPostData(slug);

    return {
        title: `${post.title} | Ashanti Technologies Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostData(slug);
    const allPosts = getSortedPostsData();

    const relatedPosts = allPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white hover:text-[var(--ashanti-blue-light)]"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap items-center text-sm">
                        <div className="flex items-center mr-6 mb-2">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <Tag className="h-4 w-4 mr-1" />
                            <Link
                                href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="hover:text-[var(--ashanti-blue-light)]"
                            >
                                {post.category}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="relative h-80 w-full">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Blog Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                    </article>

                    {/* Share Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-[var(--ashanti-blue-dark)] mb-4">Share this article</h3>
                        <div className="flex space-x-4">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://ashantitech.com/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90"
                                aria-label="Share on Twitter"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ashantitech.com/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#4267B2] text-white p-2 rounded-full hover:opacity-90"
                                aria-label="Share on Facebook"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://ashantitech.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90"
                                aria-label="Share on LinkedIn"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-[var(--ashanti-blue-dark)] mb-6">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <div key={relatedPost.slug} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                                        <div className="relative h-40 w-full">
                                            <Image
                                                src={relatedPost.coverImage || placeholderImage.src}
                                                alt={relatedPost.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-bold text-[var(--ashanti-blue-dark)] mb-2 line-clamp-2">
                                                <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[var(--ashanti-blue)]">
                                                    {relatedPost.title}
                                                </Link>
                                            </h4>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>{new Date(relatedPost.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[var(--ashanti-blue-dark)] mb-6">Need IT Solutions for Your Business?</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Ashanti Technologies offers comprehensive IT services tailored to your business needs. Contact us today to learn how we can help you.
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