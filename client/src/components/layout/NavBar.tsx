import {CustomWalletButton} from "../CustomWalletButton.tsx";
import {UserInfo} from "../../utils/definitions.ts";
import Timer from "../common/Timer.tsx";

interface Props {
  userInfo: UserInfo;
  signature: string;
  manageAccount: () => void;
}

export function Navbar({userInfo, signature, manageAccount}: Props) {


  return (
      <div className="z-50 px-10 py-3">
        <nav className="layout flex container mx-auto">
          <div className="flex-1">
            Subscription ends in <Timer end={userInfo.expires} expired={userInfo.expired}/>
          </div>
          <div>
            Using {1} GB of {userInfo.size} GB
          </div>
          <button onClick={manageAccount}>Manage Account</button>
          <div className="">
            <CustomWalletButton/>
          </div>
        </nav>
      </div>
  );
}
