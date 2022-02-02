import '@scssFolder/'

// document.querySelector('.async-loader__cta').addEventListener('click', () => {
//     let jsModule = './async/test.js';
//     import( /* webpackChunkName:`jsmodule-[request]` */ /* webpackMode: "lazy" */ `${jsModule}` )
//         .then(({default: layout}) => {
//             console.log(`imported ${jsModule}`);
//         })
//         .catch(error => {
//             console.error('Failed to load async js');
//             console.dir(error, error.stack);
//         });
// });

const whichPage = () => {
    return document.querySelector("html").dataset.page;
}

const importModule = (jsModule) => {
    import( /* webpackChunkName:`jsmodule-[request]` */ /* webpackMode: "lazy" */ `./async/${jsModule}.js` )
                .then(({default: layout}) => {
                    console.log(`imported ${jsModule}`);
                })
                .catch(error => {
                    console.error('Failed to load async js');
                    console.dir(error, error.stack);
                });
}

const switchPage = (page) => {
    switch (page) {
        case "accordions":
            importModule('accordions');
            break;
        case "test":
            importModule('test');
            break;
        default:
            console.log("no page data detected");    
    }
}

// SCRIPT
switchPage(whichPage());


