module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'icon-arrow-down': "url('/public/img/icon-arrow-down.svg')",
                'icon-arrow-up': "url('/public/img/icon-arrow-up.svg')",
                'image-hero-mobile': "url('/public/img/image-hero-mobile.png')",
                'image-hero-desktop': "url('/public/img/image-hero-desktop.png')",
            },
            width: {
                '116': '7.25rem',
                '153': '9.563rem',
                '136': '8.5rem',
                '375': '23.438rem'
            },
            height: {
                '128': '8rem',
                '160': '10rem',
                '282': '17.625rem',
            }
        },
        colors: {
            'almost-white': 'hsl(0, 0%, 98%)',
            'medium-gray': 'hsl(0, 0%, 41%)',
            'almost-black': 'hsl(0, 0%, 8%)',
            'white': '#fff',
        }
    },
    variants: {
        display:['group-hover']
    },
    plugins: [],
}
