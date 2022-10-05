module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p')
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash')
  },
  GRLC: {
    lib: require('bitcore-lib-grlc'),
    p2p: require('bitcore-p2p-grlc')
  }
};
