import {Address} from 'wagmi';

export interface UserInfo {
  token: number;
  user: Address;
  expires: number;
  size: number;
  expired: boolean;
}

export interface FileEntry {
  id?: string;
  name: string;
  size?: number;
  type: string;
}

export type ContractWriteStatus = undefined | 'loading' | 'pending' | 'success' | 'error';
