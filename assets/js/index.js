import Home from "./views/Home.js";
import NotFound from "./views/NotFound.js";
import Loans from "./views/Loans.js";
import Onboarding from "./views/Onboarding.js";
import Onboarding2 from "./views/Onboarding2.js";
import Onboarding3 from "./views/Onboarding3.js";
import Signin from "./views/SignIn.js";
import Privacy from "./views/Privacy.js";
import Contact from "./views/Contact.js";
import About from "./views/About.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path:"/", view: Home},
        {path:"/404", view: NotFound},
        {path:"/loans" , view: Loans },
        {path:"/onboarding" , view: Onboarding },
        {path:"/onboarding-2" , view: Onboarding2 },
        {path:"/onboarding-3" , view: Onboarding3 },
        {path:"/privacy" , view: Privacy },
        {path:"/contactus" , view: Contact },
        {path:"/aboutus" , view: About },
        {path:"/sign-in" , view: Signin }
    ]

    //check each route for a potential match and redirect
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
    //if match is not found
    if(!match)
    {
        match = {
            route: routes[1],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    // AOS.init();

    document.querySelector('#app').innerHTML = await view.getHtml();

    //console.log(match.route.view());
}

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', ()=> {
    document.body.addEventListener("click", e=> {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

