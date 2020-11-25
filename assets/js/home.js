$(document).ready(function () {
    $(document).ready(function () {
        $('.sidenav').sidenav();
    });
    // $(document).ready(function () {
    //     $('.parallax').parallax();
    // });

    const navLinks = [
        {
            header: "Resource One",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                },
                {
                    title: "Sub Resource Three",
                    link: ""
                }
            ]
        },
        {
            header: "Resource Two",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                }
            ]
        },
        {
            header: "Resource Three",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                },
                {
                    title: "Sub Resource Three",
                    link: ""
                },
                {
                    title: "Sub Resource Four",
                    link: ""
                },
                {
                    title: "Sub Resource Five",
                    link: ""
                }
            ]
        },
        {
            header: "Resource Four",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                },
                {
                    title: "Sub Resource Three",
                    link: ""
                },
                {
                    title: "Sub Resource Four",
                    link: ""
                },
                {
                    title: "Sub Resource Five",
                    link: ""
                },
                {
                    title: "Sub Resource Six",
                    link: ""
                },
                {
                    title: "Sub Resource Seven",
                    link: ""
                },
                {
                    title: "Sub Resource Eight",
                    link: ""
                },
                {
                    title: "Sub Resource Nine",
                    link: ""
                },
            ]
        },
        {
            header: "Resource Five",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                },
                {
                    title: "Sub Resource Three",
                    link: ""
                },
                {
                    title: "Sub Resource Four",
                    link: ""
                }
            ]
        },
        {
            header: "Resource Six",
            subCategories: [
                {
                    title: "Sub Resource One",
                    link: ""
                },
                {
                    title: "Sub Resource Two",
                    link: ""
                },
                {
                    title: "Sub Resource Three",
                    link: ""
                },
                {
                    title: "Sub Resource Four",
                    link: ""
                },
                {
                    title: "Sub Resource Five",
                    link: ""
                },
                {
                    title: "Sub Resource Six",
                    link: ""
                },
                {
                    title: "Sub Resource Seven",
                    link: ""
                }
            ]
        }
    ]


    function createNavDropdown(header = String, navNum = Number, subCategories = Array) {
        if (!header || !subCategories.length) {
            return new Error("Nav header and sub categories required");
        }
        // add to desktop nav
        const navLinksEle = document.getElementById("nav-links");
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("class", "dropdown-trigger cyan-text nav-header");
        a.setAttribute("data-target", `dropdown-${navNum}`);
        a.innerText = header;
        li.appendChild(a);
        navLinksEle.appendChild(li);

        // add to mobile nav
        const mobileNavLinksEle = document.getElementById("mobile-demo");
        let liMobile = document.createElement("li");
        let aMobile = document.createElement("a");
        aMobile.setAttribute("class", "dropdown-trigger cyan-text nav-header");
        aMobile.setAttribute("data-target", `dropdown-${navNum}`);
        aMobile.innerText = header;
        liMobile.appendChild(aMobile);
        mobileNavLinksEle.appendChild(liMobile);

        // create dropdown for sub categories
        const subCategoriesEle = document.getElementById("subcategories");
        let ul = document.createElement("ul");
        ul.setAttribute("id", `dropdown-${navNum}`);
        ul.setAttribute("class", "dropdown-content");
        subCategories.forEach(sub => {
            let li2 = document.createElement("li");
            let a2 = document.createElement("a");
            a2.setAttribute("href", sub.link);
            a2.innerText = sub.title;
            li2.appendChild(a2);
            ul.appendChild(li2);
        });
        subCategoriesEle.appendChild(ul);
    }

    for (let i = 0; i < navLinks.length; i++) {
        let currLink = navLinks[i];
        createNavDropdown(currLink.header, i, currLink.subCategories);
    }

    $(".dropdown-trigger").dropdown();
    $('.pushpin').pushpin();
});

