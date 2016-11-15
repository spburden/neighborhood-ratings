module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'neighborly-pdx',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
