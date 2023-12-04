import {CustomWalletButton} from "../CustomWalletButton.tsx";
import {UserInfo} from "../../utils/definitions.ts";
import Timer from "../common/Timer.tsx";
import {useAccountContext} from "../../providers/AccountProvider.tsx";

interface Props {
  userInfo: UserInfo;
  signature: string;
  manageAccount: () => void;
}

export function Navbar({userInfo, signature, manageAccount}: Props) {
  const {usage} = useAccountContext();

  return (
    <div className="z-50 px-10 border-b">
      <nav className="layout flex items-center container mx-auto">
        <div className="border-r px-5 py-3">
          Subscription ends in <Timer end={userInfo.expires} expired={userInfo.expired}/>
        </div>
        <div className="border-r px-5 py-3">
          Using {usage} of {userInfo.size} GB
        </div>
        <div className="border-r px-5 py-3 ">
          <button onClick={manageAccount} className="underline">Manage Account</button>
        </div>
        <div className="px-5 py-3">
          <CustomWalletButton/>
        </div>
      </nav>
    </div>
  );
}
