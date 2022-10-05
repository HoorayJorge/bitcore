import { BaseModule } from '..';
import { GRLCStateProvider } from '../../providers/chain-state/grlc/grlc';
import { VerificationPeer } from '../bitcoin/VerificationPeer';
import { GarlicoinP2PWorker } from './p2p';

export default class GRLCModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('GRLC', 'bitcore-lib-grlc', 'bitcore-p2p');
    services.P2P.register('GRLC', GarlicoinP2PWorker);
    services.CSP.registerService('GRLC', new GRLCStateProvider());
    services.Verification.register('GRLC', VerificationPeer);
  }
}