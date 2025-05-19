const homeRoutes = require("./home.route");
const loginRoutes = require("./auth.route");

// Route Api
const postsApiRoute = require("./api/post.route");


module.exports = (app) => {
    app.use("/", homeRoutes);
    
    app.use("/user", loginRoutes);

    app.use("/api/posts", postsApiRoute);
}
