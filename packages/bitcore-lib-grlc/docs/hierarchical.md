# HDKeys
Create and derive extended public and private keys according to the BIP32 standard for Hierarchical Deterministic (HD) keys.

## Hierarchically Derived Keys
Litecore provides full support for [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki), allowing for many key management schemas that benefit from this property. Please be sure to read and understand the basic concepts and the warnings on that BIP before using these classes.

Garlicore example (because the ones below don't work)
```javascript
const garlicore = require('bitcore-lib-grlc');
const hdPrivateKey = new garlicore.HDPrivateKey();
const hdPublicKey = hdPrivateKey.hdPublicKey;
// hdPrivateKey uses .deriveChild()
// hdPublicKey uses .derive()
const address1 = hdPrivateKey.deriveChild(100).privateKey.toAddress();
const address2 = hdPublicKey.derive(100).publicKey.toAddress();
console.log(address1.toString()); // Same address
console.log(address2.toString()); // Same address
```

## HDPrivateKey
An instance of a [PrivateKey](privatekey.md) that also contains information required to derive child keys.

Sample usage:

```javascript
var litecore = require('litecore');
var HDPrivateKey = litecore.HDPrivateKey;

var hdPrivateKey = new HDPrivateKey();
var retrieved = new HDPrivateKey('xpriv...');
var derived = hdPrivateKey.derive("m/0'");
var derivedByNumber = hdPrivateKey.derive(1).derive(2, true);
var derivedByArgument = hdPrivateKey.derive("m/1/2'");
assert(derivedByNumber.xprivkey === derivedByArgument.xprivkey);

var address = derived.privateKey.toAddress();

// obtain HDPublicKey
var hdPublicKey = hdPrivateKey.hdPublicKey;
```

## HDPublicKey
An instance of a PublicKey that can be derived to build extended public keys. Note that hardened paths are not available when deriving an HDPublicKey.

```javascript
var hdPrivateKey = new HDPrivateKey();
var hdPublicKey = hdPrivateKey.hdPublicKey;
try {
  new HDPublicKey();
} catch(e) {
  console.log("Can't generate a public key without a private key");
}

var address = new Address(hdPublicKey.publicKey, Networks.livenet);
var derivedAddress = new Address(hdPublicKey.derive(100).publicKey, Networks.testnet);
```
