export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section Skeleton */}
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <div className="h-6 w-32 bg-white/20 rounded animate-pulse"></div>
                    </div>
                    <div className="h-10 w-3/4 bg-white/20 rounded animate-pulse mb-4"></div>
                    <div className="flex flex-wrap items-center">
                        <div className="h-6 w-32 bg-white/20 rounded animate-pulse mr-6 mb-2"></div>
                        <div className="h-6 w-48 bg-white/20 rounded animate-pulse mr-6 mb-2"></div>
                        <div className="h-6 w-24 bg-white/20 rounded animate-pulse mb-2"></div>
                    </div>
                </div>
            </section>

            {/* Featured Image Skeleton */}
            <div className="h-80 w-full bg-gray-200 animate-pulse"></div>

            {/* Content Skeleton */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-4/6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </section>
        </div>
    );
} 