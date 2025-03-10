import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import placeholderImage from '../../public/images/placeholder.webp';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className="relative h-48 w-full">
                <Image
                    src={post.coverImage || placeholderImage.src}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-[var(--ashanti-blue-light)] text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                    </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--ashanti-blue-dark)] mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[var(--ashanti-blue)]">
                        {post.title}
                    </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4 mt-auto">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                </div>
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[var(--ashanti-blue)] font-medium hover:text-[var(--ashanti-blue-dark)]"
                >
                    Read More
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard; 