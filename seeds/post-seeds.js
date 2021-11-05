const { Post } = require('../models');

const postdata = [
    {	
    title:	"road work ahead",
    post_content:	"yeah i sure hope it does?",
    user_id:	7
    },
    {	
    title:	"Yee Haw",
    post_content:	"i wanna be a cowboy baby",
    user_id:	4
    },	
    {	
    title:	"you are my dad",
    post_content:	"ur my dad. boogie woogie woogie",
    user_id:	1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
