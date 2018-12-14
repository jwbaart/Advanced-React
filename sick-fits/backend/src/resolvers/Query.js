const { forwardTo } = require("prisma-binding");

const Query = {
    items: forwardTo('db'),
};

// const Query = {
//   async items(parent, args, ctx, info) {
//     const item = await ctx.db.query.items();

//     return item;
//   }

//   //   dogs(parent, args, ctx) {
//   //     return [{ name: "Snickers" }, { name: "Summy" }];
//   //   }
// };

module.exports = Query;
