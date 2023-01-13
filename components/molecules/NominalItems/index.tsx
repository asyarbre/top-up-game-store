import Image from "next/image";

interface NominalItemProps {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: string;
}

export default function NominalItem(props: NominalItemProps) {
  const { _id, coinQuantity, coinName, price } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={_id}
    >
      <input
        className="d-none"
        type="radio"
        id={_id}
        name="topup"
        defaultValue={_id}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{coinQuantity}</span>
            {coinName}
          </p>
          <Image
            src="/icon/icon-check.svg"
            width="20"
            height="20"
            alt=""
            id="icon-check"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{price}</p>
      </div>
    </label>
  );
}
