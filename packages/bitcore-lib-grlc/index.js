'use strict';

var garlicore = module.exports;

// module information
garlicore.version = 'v' + require('./package.json').version;
garlicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of garlicore-lib found. ' +
      'Please make sure to require garlicore-lib and check that submodules do' +
      ' not also include their own garlicore-lib dependency.';
    throw new Error(message);
  }
};
garlicore.versionGuard(global._garlicore);
global._garlicore = garlicore.version;

// crypto
garlicore.crypto = {};
garlicore.crypto.BN = require('./lib/crypto/bn');
garlicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
garlicore.crypto.Hash = require('./lib/crypto/hash');
garlicore.crypto.Random = require('./lib/crypto/random');
garlicore.crypto.Point = require('./lib/crypto/point');
garlicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
garlicore.encoding = {};
garlicore.encoding.Base58 = require('./lib/encoding/base58');
garlicore.encoding.Base58Check = require('./lib/encoding/base58check');
garlicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
garlicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
garlicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
garlicore.util = {};
garlicore.util.buffer = require('./lib/util/buffer');
garlicore.util.js = require('./lib/util/js');
garlicore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
garlicore.errors = require('./lib/errors');

// main bitcoin library
garlicore.Address = require('./lib/address');
garlicore.Block = require('./lib/block');
garlicore.MerkleBlock = require('./lib/block/merkleblock');
garlicore.BlockHeader = require('./lib/block/blockheader');
garlicore.HDPrivateKey = require('./lib/hdprivatekey.js');
garlicore.HDPublicKey = require('./lib/hdpublickey.js');
garlicore.Networks = require('./lib/networks');
garlicore.Opcode = require('./lib/opcode');
garlicore.PrivateKey = require('./lib/privatekey');
garlicore.PublicKey = require('./lib/publickey');
garlicore.Script = require('./lib/script');
garlicore.Transaction = require('./lib/transaction');
garlicore.URI = require('./lib/uri');
garlicore.Unit = require('./lib/unit');

// dependencies, subject to change
garlicore.deps = {};
garlicore.deps.bnjs = require('bn.js');
garlicore.deps.bs58 = require('bs58');
garlicore.deps.Buffer = Buffer;
garlicore.deps.elliptic = require('elliptic');
garlicore.deps.scryptsy = require('scryptsy');
garlicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
garlicore.Transaction.sighash = require('./lib/transaction/sighash');
