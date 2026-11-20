'use client';

import { useState, useEffect } from 'react';

export default function StorePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Store</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt={product.title} width="80" /></td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
