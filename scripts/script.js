const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        'avg-rating': 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        'avg-rating': 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        'avg-rating': 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        'avg-rating': 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        'avg-rating': 5.0
    }
];

window.onload = function() {
    const select = document.getElementById('product');
    products.forEach(function(product) {
        const option = document.createElement('option');
        option.value = product.id;
        option.text = product.name;
        select.appendChild(option);
    });
};

document.querySelector('form').addEventListener('submit', function() {
    let count = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', ++count);
});
