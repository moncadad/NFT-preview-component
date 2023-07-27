// import { useState } from "react";
export default function NftImage() {
  return (
    <div className="image-container">
      {" "}
      <div className="icon-view">
        <img src="/images/icon-view.svg" alt="" className="icon" />
      </div>
      <img
        src="/images/image-equilibrium.jpg"
        alt="NFT image"
        className="nft-img"
      />{" "}
    </div>
  );
}
