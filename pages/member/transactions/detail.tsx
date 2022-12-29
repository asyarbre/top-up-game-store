import React from "react";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";

function detail_transaction() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}

export default detail_transaction;
