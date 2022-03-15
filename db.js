// categories
const categories = [
    {
        id:"9h3n6gf-987l-6547-665756656vt89023h4",
        name:"IT",
    },
    {
        id:"20ate6j-987l-6fa7-gf56h4551vt89023h4",
        name:"Public",
    },
    {
        id:"t564083-er7l-8098-k7475665n40126723h",
        name:"Banking"
    },
    {
        id:"t564082-er7l-8096-k7475665n40126723e",
        name:"Engineering"
    },
]
// Jobs
const jobs = [
    {
        id:"646gfgf-t65i-7bv7-665756656vt29hf48",
        title:"Software Engineer",
        company:"Tranferano Nig. Resouces",
        description:"We are looking for dynamic, energetic interns who are eager  to join FlexiSAF where they will be fully immersed into the world of software development.",
        role: "Junior",
        amount:500000,
        location:"Lagos, Nigeria",
        categoryId: "9h3n6gf-987l-6547-665756656vt89023h4"
    },
    {
        id:"646gfgf-t65i-7bv7-665756656vt656fv7",
        title:"IT Support / Graphics Design Officer",
        company:"MEG Consults",
        description:"IT Support Officer ResponsibilitiesMainly responsible for the smooth running of computer systems, routers, switches, internet and ensure users get maximum benefits from them.",
        role: "Training",
        amount:50000,
        location:"Lagos, Nigeria",
        categoryId: "9h3n6gf-987l-6547-665756656vt89023h4"
    },
    {
        id:"646gfgf-t65i-7bv7-6657-56656vt09gd84",
        title:"Banking And Finance",
        company:"gtBank",
        description:"This job aims to help the employer in personal, professional, and spiritual areas.",
        role: "Training",
        amount:75000,
        location:"Lagos, Nigeria",
        categoryId:"t564083-er7l-8098-k7475665n40126723h"
    },
    {
        id:"6473gh5-t65i-7bv7-6657-56656vt29hf43",
        title:"Mechanical Engineer",
        company:"Osh-Auto",
        description:"To oversee all mechanical engineering operation and activities consisting of installation etc",
        role:"Technician",
        amount:120000,
        location:"Lagos, Nigeria",
        categoryId:"t564082-er7l-8096-k7475665n40126723e"
    },
    {
        id:"646gfgf-t65i-7bv7-66575hd65kt29hf42",
        title:"Civil Service",
        company:"Federal Government",
        description:"Lagos satet waste management .",
        role: "training",
        amount:65000,
        location:"Lagos, Nigeria",
        categoryId:"20ate6j-987l-6fa7-gf56h4551vt89023h4"
    },
]

exports.db= {
    jobs,
    categories
}