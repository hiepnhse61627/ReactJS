import { useState } from "react";
import { BillInput } from "./BillInput";
import { Output } from "./Output";
import { Reset } from "./Reset";
import { SelectPercentage } from "./SelectPercentage";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  const [selfPercentage, setSelfPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tip = bill * ((selfPercentage + friendPercentage) / 2 / 100);

  function handleReset() {
    setBill("");
    setSelfPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={selfPercentage}
        onSelect={setSelfPercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSelect={setFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
