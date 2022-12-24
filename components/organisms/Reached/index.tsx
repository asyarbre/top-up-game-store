import React from "react";
import ReachedItem from "../../molecules/ReachedItems";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
              290M+
            </p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">
              Players Top Up
            </p>
          </div>
          <ReachedItem title="12.500" desc="Games Available" />
          <ReachedItem title="99.9%" desc="Happy Players" />
          <ReachedItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
