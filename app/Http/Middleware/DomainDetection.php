<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DomainDetection
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $host = $request->getHost();

        // Define your domains and their aliases
        $domains = [
            // production domains
            'dogtoys.nyc' => 'dogtoys',
            'menus.nyc' => 'menus',
            'pet-stores.nyc' => 'pet-stores',
            'petStores.nyc' => 'pet-stores', // alias
            'wedding-gowns.nyc' => 'wedding-gowns',
            'weddinggowns.nyc' => 'wedding-gowns', // alias
            'health-food-stores.nyc' => 'health-food-stores',
            'healthfoodstores.nyc' => 'health-food-stores', // alias
            'mafia.nyc' => 'mafia',

            // development domains
            'dogtoys.test' => 'dogtoys',
            'menus.test' => 'menus',
            'pet-stores.test' => 'pet-stores',
            'petStores.test' => 'pet-stores', // alias
            'wedding-gowns.test' => 'wedding-gowns',
            'weddinggowns.test' => 'wedding-gowns', // alias
            'health-food-stores.test' => 'health-food-stores',
            'healthfoodstores.test' => 'health-food-stores', // alias
            'mafia.test' => 'mafia',
            'localhost' => 'development', // for local development
        ];

        // Get the domain key
        $domainKey = $domains[$host] ?? 'unknown';

        // Share domain info with the application
        $request->merge(['current_domain' => $domainKey]);
        view()->share('currentDomain', $domainKey);

        // Make it available in Inertia
        app()->instance('current.domain', $domainKey);

        return $next($request);
    }
}
