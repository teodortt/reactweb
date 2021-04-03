module.exports = ({
    future: {
        webpack5: true,
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contacts': { page: '/contacts' },
            '/services': { page: '/services' },

        };
    },
});

// module.exports = (phase, { defaultConfig }) => {
//     // const paths = { '/': { page: '/' }, '/about': { page: '/about' } };

//     return {
//         /* config options here */
//         paths: { '/': { page: '/' }, '/about': { page: '/about' } }


//     }
// }
