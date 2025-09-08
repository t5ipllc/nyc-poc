import { Head } from '@inertiajs/react';

// @ts-expect-error domain, host, and message all implicitly allow any type
export default function LandingPage({ domain, host, message }) {
    return (
        <>
            <Head title="Coming Soon - The Independent Restaurant Directory" />
            <div className="min-h-screen bg-gray-50 text-gray-800 leading-relaxed">
                <header className="bg-gray-900 text-white py-16 px-5 text-center">
                    <h1 className="text-4xl mb-3">🍽️ Arriving Soon!</h1>
                    <p className="text-xl">The Independent Restaurant Directory for Local Flavor</p>
                </header>

                <section className="max-w-4xl mx-auto py-10 px-5">
                    <h2 className="text-2xl font-semibold mb-4">Support Local. Get Discovered.</h2>
                    <p className="mb-4">
                        We're building a new kind of restaurant directory — no corporate chains, no order fees.
                        Just a powerful place for neighborhood restaurants to get discovered.
                        Whether you're a taco truck, a soul food kitchen, or the best pizza in town — we've got your back.
                    </p>

                    <p className="mb-8">
                        Secure your spot now by pre-registering for one of our limited banner ad spaces:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                        <div className="border-2 border-yellow-400 rounded-lg p-5 text-center">
                            <h3 className="text-lg font-semibold mb-2">🥇 Gold</h3>
                            <p className="font-bold text-lg">$500/month</p>
                            <p>10 Available</p>
                        </div>
                        <div className="border-2 border-gray-400 rounded-lg p-5 text-center">
                            <h3 className="text-lg font-semibold mb-2">🥈 Silver</h3>
                            <p className="font-bold text-lg">$350/month</p>
                            <p>20 Available</p>
                        </div>
                        <div className="border-2 border-orange-600 rounded-lg p-5 text-center">
                            <h3 className="text-lg font-semibold mb-2">🥉 Bronze</h3>
                            <p className="font-bold text-lg">$200/month</p>
                            <p>30 Available</p>
                        </div>
                        <div className="border-2 border-amber-800 rounded-lg p-5 text-center">
                            <h3 className="text-lg font-semibold mb-2">🏅 Copper</h3>
                            <p className="font-bold text-lg">$50/month</p>
                            <p>50 Available</p>
                        </div>
                    </div>

                    <form
                        className="bg-white p-8 rounded-lg shadow-lg"
                        method="POST"
                        action="#" // Placeholder for Pat's API endpoint
                    >
                        <h2 className="text-xl font-semibold mb-6">Pre-Register Your Spot</h2>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 font-medium">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="business" className="block mb-2 font-medium">
                                Restaurant / Business Name *
                            </label>
                            <input
                                type="text"
                                id="business"
                                name="business"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="website" className="block mb-2 font-medium">
                                Restaurant Website or Social Link
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="tier" className="block mb-2 font-medium">
                                Tier of Interest *
                            </label>
                            <select
                                id="tier"
                                name="tier"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            >
                                <option value="">Choose one...</option>
                                <option value="Gold">Gold - $500/mo</option>
                                <option value="Silver">Silver - $350/mo</option>
                                <option value="Bronze">Bronze - $200/mo</option>
                                <option value="Copper">Copper - $50/mo</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="comments" className="block mb-2 font-medium">
                                Questions / Comments
                            </label>
                            <textarea
                                id="comments"
                                name="comments"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gray-900 text-white py-3 px-5 rounded-md text-base cursor-pointer hover:bg-gray-700 transition-colors"
                        >
                            Submit Interest
                        </button>
                        <p className="text-sm text-gray-600 mt-3">
                            * This form does not collect payment. We will contact you to confirm your spot.
                        </p>
                    </form>
                </section>

                <footer className="text-center py-8 px-5 bg-gray-900 text-white mt-10">
                    <p>&copy; 2025 {host} — Supporting Local Restaurants Only.</p>
                </footer>
            </div>
        </>
    );
}
