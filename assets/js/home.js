$(document).ready(function () {
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
        a.setAttribute("class", "dropdown-trigger nav-header");
        a.setAttribute("data-target", `dropdown-${navNum}`);
        a.innerText = header;
        li.appendChild(a);
        navLinksEle.appendChild(li);

        // add to mobile nav
        const mobileNavLinksEle = document.getElementById("mobile-demo");
        let liMobile = document.createElement("li");
        let aMobile = document.createElement("a");
        aMobile.setAttribute("class", "dropdown-trigger nav-header");
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

    const sponsors = [
        {
            img: "https://images.unsplash.com/photo-1575356891535-a79c0bc6bffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            name: "Sponsor 1"
        },
        {
            img: "https://images.unsplash.com/photo-1576826631426-7af71963b72d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            name: "Sponsor 2"
        },
        {
            img: "https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1277&q=80",
            name: "Sponsor 3"
        },
        {
            img: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
            name: "Sponsor 4"
        },
        {
            img: "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
            name: "Sponsor 5"
        },
        {
            img: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
            name: "Sponsor 6"
        },
        {
            img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
            name: "Sponsor 7"
        },
        {
            img: "https://images.unsplash.com/photo-1573496267526-08a69e46a409?ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80",
            name: "Sponsor 8"
        },
    ]

    let isFinalSponsorRow = false;
    let remainingCols = 0;
    let extraColSpace = 0;

    function getColSize(index, length) {
        let colSize = "col s6 m2";

        // determine if current column is in a row with 5 others
        const isInFullRow = length - index >= 6 - (index % 6);
        if (!isInFullRow) {
            console.log(index, "not full row")
            if (!isFinalSponsorRow) {
                isFinalSponsorRow = true;
                remainingCols = length - index;
                extraColSpace = 12 - (2 * remainingCols);
            }
            const offset = Math.ceil((extraColSpace / remainingCols) / 2);
            colSize = `col s6 m2 offset-m${offset} push-m${offset / 2}`;
        }
        return colSize
        // if it is, set column width to m2
        // if it isn't divide 12 by the amount left
        // round to nearest number
        // set column width
    }

    function generateSponsor({ img, name }, colSize = "col s6 m2") {
        // console.log(colSize)
        if (!img || !name) return new Error("Sponsor image and name are required");
        const sponsorSection = document.getElementById("sponsor-section");
        const col = document.createElement("div");
        col.setAttribute("class", colSize);
        const sponsorEle = document.createElement("section");
        sponsorEle.setAttribute("class", "sponsor hoverable shadow main-bg border-radius");
        const sponsorImg = document.createElement("img");
        sponsorImg.setAttribute("class", "sponsor-img");
        sponsorImg.setAttribute("src", img);
        sponsorImg.setAttribute("alt", name);
        const sponsorTitleDiv = document.createElement("div");
        sponsorTitleDiv.setAttribute("class", "sponsor-header center-align  white-text");
        sponsorTitleP = document.createElement("p");
        sponsorTitleP.innerText = name;
        sponsorEle.appendChild(sponsorImg);
        sponsorTitleDiv.appendChild(sponsorTitleP);
        sponsorEle.appendChild(sponsorTitleDiv);
        col.appendChild(sponsorEle);
        sponsorSection.appendChild(col);
    }

    sponsors.forEach((sponsor, index) => {
        generateSponsor(sponsor, getColSize(index, sponsors.length));
    });
});

