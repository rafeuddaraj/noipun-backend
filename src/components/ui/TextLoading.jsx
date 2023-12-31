
export default function TextLoading() {
    return (
        <div className="container mx-auto p-4">
            <div className="skeleton bg-gray-300 animate-pulse h-6 w-10/12 mb-4"></div>
            <div className="skeleton bg-gray-300 animate-pulse h-8 w-11/12 mb-4"></div>
            <div className="skeleton bg-gray-300 animate-pulse h-5 w-10/12"></div>
            <div className="skeleton bg-gray-300 animate-pulse h-6 w-10/12 mb-4"></div>
            <div className="skeleton bg-gray-300 animate-pulse h-8 w-11/12 mb-4"></div>
            <div className="skeleton bg-gray-300 animate-pulse h-5 w-10/12"></div>
        </div>
    );
}
