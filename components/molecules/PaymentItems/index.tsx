import Image from "next/image";

interface PaymentItemProps {
  type: string;
  name: string;
  bankID: string;
  onChange: () => void;
}

export default function PaymentItem(props: PaymentItemProps) {
  const { type, name, bankID, onChange } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankID}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={bankID}
        name="paymentMethod"
        defaultValue="transfer"
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <Image
            src="/icon/icon-check.svg"
            width={20}
            height={20}
            alt=""
            id="icon-check"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{name}</p>
      </div>
    </label>
  );
}
