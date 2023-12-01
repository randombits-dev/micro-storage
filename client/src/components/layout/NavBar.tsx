import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useReduceSubscription} from "../../hooks/useReduceSubscription.ts";
import {useConsumerTest} from "../../hooks/useConsumerTest.ts";

export function Navbar() {
  const {execute} = useReduceSubscription(1, 1);
  const {runs} = useConsumerTest();

  return (
    <div className="z-50 px-10 py-3">
      <nav className="layout flex container mx-auto">
        <div className="flex-1">
          <div>{runs}</div>
          <button onClick={() => execute()}>Reduce</button>
        </div>


        <div className="">
          <ConnectButton/>
        </div>
      </nav>
    </div>
  );
}
