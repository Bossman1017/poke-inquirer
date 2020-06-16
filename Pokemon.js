const userLogin = (ms) => new Promise((resolve) => setTimeout (resolve , ms));

userLogin(3000)
    .then(() => console.log(`You've been logged in big homie`));


let loadSite = () => {
    console.log(`loging into the site now`)
};

loadSite();