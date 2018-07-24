const mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

let data = [
    {
        name: "Clouds Rest",
        image:
            "https://www.yosemite.com/wp-content/uploads/2016/04/westlake-campground.png",
        description:
            "Shank kielbasa chicken short ribs filet mignon ball tip kevin pastrami bresaola. Shank pastrami doner buffalo. Pork loin kielbasa meatball turkey beef. Beef tongue bacon, t-bone shankle tenderloin corned beef pig kevin spare ribs tri-tip biltong."
    },
    {
        name: "Clouds Peak",
        image:
            "https://res.cloudinary.com/simpleview/image/upload/c_limit,f_auto,h_1200,q_75,w_1200/v1/clients/poconos/Campgrounds_Tent_Sites_Woman_Hemlock_Campground_4_PoconoMtns_06f196d5-8814-4803-a132-8a4daae1755e.jpg",
        description:
            "Bacon ipsum dolor amet meatball brisket pig spare ribs shankle shank. Doner cow picanha tail pork belly frankfurter landjaeger ribeye shank pork loin. Chuck rump pork landjaeger kevin sausage, spare ribs short loin turducken andouille picanha burgdoggen hamburger. Meatloaf pastrami drumstick pork loin shank salami rump capicola."
    },
    {
        name: "Clouds Trumpet",
        image:
            "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg",
        description:
            "Salami meatloaf corned beef pork loin shankle prosciutto shank turkey picanha alcatra turducken hamburger. Bresaola ham hock salami, capicola andouille pork chop chicken picanha sirloin burgdoggen doner shoulder kielbasa. Burgdoggen rump ribeye ball tip, chicken filet mignon leberkas tri-tip alcatra picanha ground round. Alcatra short loin biltong cow shank beef shoulder sirloin filet mignon beef ribs salami swine. Ribeye buffalo capicola rump leberkas prosciutto corned beef t-bone bresaola tongue cupim turkey landjaeger fatback. Cow leberkas kielbasa doner. Pork loin kielbasa buffalo salami, swine short loin jowl fatback turkey pork belly."
    }
];

seedDB = () => {
    Campground.remove({}, err => {
        err ? console.log(err) : console.log("Removed Campgrounds");
        data.forEach(seed => {
            Campground.create(
                seed,
                (err, campground) =>
                    err
                        ? console.log(err)
                        : Comment.create(
                              { text: "Great! but no internet", author: "Joe" },
                              (err, comment) => {
                                  err
                                      ? console.log(err)
                                      : campground.comments.push(comment);
                                  campground.save();
                                  console.log("Created new comment");
                              }
                          )
            );
        });
    });
};

module.exports = seedDB;
