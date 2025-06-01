import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
