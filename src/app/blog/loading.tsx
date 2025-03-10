export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section Skeleton */}
            <section className="bg-[var(--ashanti-blue-dark)] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="h-10 w-48 bg-white/20 rounded animate-pulse mx-auto mb-6"></div>
                    <div className="h-6 w-96 bg-white/20 rounded animate-pulse mx-auto"></div>
                </div>
            </section>

            {/* Blog Content Skeleton */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Generate 6 blog card skeletons */}
                                {Array(6).fill(0).map((_, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                        <div className="h-48 bg-gray-200 animate-pulse"></div>
                                        <div className="p-6">
                                            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                                            <div className="h-8 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                                            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                                            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-2"></div>
                                            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse mb-4"></div>
                                            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                            </div>

                            {/* Categories */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="space-y-2">
                                    {Array(6).fill(0).map((_, index) => (
                                        <div key={index} className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="space-y-4">
                                    {Array(3).fill(0).map((_, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                            <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 