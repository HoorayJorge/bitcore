import { BTCStateProvider } from '../btc/btc';

export class GRLCStateProvider extends BTCStateProvider {
  constructor(chain: string = 'GRLC') {
    super(chain);
  }
}