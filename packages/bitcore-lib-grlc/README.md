Garlicore Library
=======

[![NPM Package](https://img.shields.io/npm/v/bitcore-lib-grlc.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-lib-grlc)

**A pure and powerful JavaScript Garlicoin library.**

## Principles

Garlicoin is a garlic-themed decentralized cryptocurrency, with an ASIC-mining resistant proof of work and rapid difficulty readjustment, intended to be mined on consumer-grade hardware. The decentralized nature of the Garlicoin network allows for highly resilient Garlicoin infrastructure, and the developer community needs reliable, open-source tools to implement Garlicoin apps and services.

## Get Started

```sh
npm install bitcore-lib-grlc
```

```sh
bower install bitcore-lib-grlc
```

## Documentation (bitcore, not grlc)

- Tests have not been modified for Garlicoin

The complete docs are hosted here: [bitcore documentation](https://github.com/bitpay/bitcore). There's also a [bitcore API reference](https://github.com/bitpay/bitcore/blob/master/packages/bitcore-node/docs/api-documentation.md) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

## Examples

- [Generate a random address](docs/examples.md#generate-a-random-address)
- [Generate a address from a SHA256 hash](docs/examples.md#generate-a-address-from-a-sha256-hash)
- [Import an address via WIF](docs/examples.md#import-an-address-via-wif)
- [Create a Transaction](docs/examples.md#create-a-transaction)
- [Sign a Bitcoin message](docs/examples.md#sign-a-bitcoin-message)
- [Verify a Bitcoin message](docs/examples.md#verify-a-bitcoin-message)
- [Create an OP RETURN transaction](docs/examples.md#create-an-op-return-transaction)
- [Create a P2SH address](docs/examples.md#create-a-p2sh-address)
- [Create a 2-of-3 multisig P2SH address](docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
- [Spend from a 2-of-2 multisig P2SH address](docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Building the Browser Bundle

To build a bitcore-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `bitcore-lib-grlc.js` and `bitcore-lib-grlc.min.js`.


## Development & Tests

```sh
git clone https://github.com/MaxPuig/bitcore-lib-grlc.git
cd bitcore-lib-grlc
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser` or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## Security

We're using Bitcore in production, as are many others, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

See [CONTRIBUTING.md](https://github.com/MaxPuig/bitcore-lib-grlc/blob/master/Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Litecoin Core Developers
Copyright 2018-2022 The Garlicoin Core Developers
