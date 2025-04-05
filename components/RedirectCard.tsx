'use client';

interface RedirectCardProps {
    title: string;
    description?: string;
    imageUrl: string;
    linkUrl: string;
    linkText: string;
}

export default function RedirectCard({
    title,
    description,
    imageUrl,
    linkUrl,
    linkText,
}: RedirectCardProps) {
    return (
        <div className="  w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px]  bg-white rounded-lg shadow-md p-3 text-center 
       border-t-4 border-pink-500  ">
            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
            >
                <div className="bg-slate-100 rounded-md p-3 mb-3">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-14 w-14 mx-auto object-contain"
                    />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">{title}</h3>
                {description && (
                    <p className="text-xs text-gray-600 mb-2">{description}</p>
                )}
                <div className="bg-cyan-700 hover:bg-cyan-800 text-white text-xs px-3 py-1 rounded-md shadow">
                    {linkText}
                </div>
            </a>
        </div>
    );
}

