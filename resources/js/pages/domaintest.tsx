import { Head } from '@inertiajs/react';

// @ts-expect-error domain, host, and message all implicitly allow any type
export default function Welcome({ domain, host, message }) {
    const getDomainConfig = (domainKey: string) => {
        const configs = {
            'dogtoys': {
                title: 'NYC Dog Toys',
                color: 'bg-blue-500',
                description: 'Find the best dog toys in New York City',
                url: 'dogtoys.nyc'
            },
            'menus': {
                title: 'NYC Menus',
                color: 'bg-green-500',
                description: 'Restaurant menus across NYC',
                url: 'menus.nyc'
            },
            'pet-stores': {
                title: 'NYC Pet Stores',
                color: 'bg-purple-500',
                description: 'Your local pet store directory',
                url: 'pet-stores.nyc'
            },
            'wedding-gowns': {
                title: 'NYC Wedding Gowns',
                color: 'bg-pink-500',
                description: 'Beautiful wedding dresses in NYC',
                url: 'wedding-gowns.nyc'
            },
            'health-food-stores': {
                title: 'NYC Health Food Stores',
                color: 'bg-orange-500',
                description: 'Healthy eating starts here',
                url: 'health-food-stores.nyc'
            },
            'mafia': {
                title: 'NYC Mafia',
                color: 'bg-red-500',
                description: 'The history of organized crime in NYC',
                url: 'mafia.nyc'
            },
            'development': {
                title: 'Development Mode',
                color: 'bg-gray-500',
                description: 'Local development environment',
                url: 'localhost'
            }
        };

        return configs[domainKey] || {
            title: 'Unknown Domain',
            color: 'bg-gray-400',
            description: 'Domain not configured',
            url: host
        };
    };

    const config = getDomainConfig(domain);

    // Get all domain configs except the current one
    const allDomains = ['dogtoys', 'menus', 'pet-stores', 'wedding-gowns', 'health-food-stores', 'mafia'];
    const otherDomains = allDomains.filter(domainKey => domainKey !== domain);

    return (
        <>
            <Head title={config.title} />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className={`${config.color} p-6`}>
                        <h1 className="text-2xl font-bold text-white">
                            {config.title}
                        </h1>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-600 mb-4">
                            {config.description}
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">
                                Debug Information:
                            </h3>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div><strong>Host:</strong> {host}</div>
                                <div><strong>Domain Key:</strong> {domain}</div>
                                <div><strong>Message:</strong> {message}</div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                            <h5 className='text-center font-bold text-gray-800 mb-3'>
                                More NYC Awesomeness:
                            </h5>
                            <ul className='list-disc list-inside space-y-1'>
                                {otherDomains.map(domainKey => {
                                    const domainConfig = getDomainConfig(domainKey);
                                    return (
                                        <li key={domainKey}>
                                            <a
                                                href={`https://${domainConfig.url}`}
                                                className="text-blue-600 hover:text-blue-800 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {domainConfig.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <button
                                className={`w-full ${config.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity`}
                                onClick={() => alert('Multi-domain setup working!')}
                            >
                                Test Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
