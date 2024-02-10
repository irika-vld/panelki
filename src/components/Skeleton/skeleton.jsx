import React from "react";
import ContentLoader from "react-content-loader";
import s from "./skeleton.module.css";

const Skeleton = (props) => (
  <ContentLoader
    className={s.skeleton}
    speed={2}
    width={400}
    height={265}
    viewBox="0 0 400 265"
    backgroundColor="#555ff7"
    foregroundColor="#7e9ff1"
    {...props}
  >
    <rect x="198" y="296" rx="0" ry="0" width="1" height="0" />
    <rect x="143" y="292" rx="0" ry="0" width="6" height="1" />
    <rect x="235" y="179" rx="0" ry="0" width="0" height="1" />
    <rect x="42" y="45" rx="10" ry="10" width="350" height="200" />
    <rect x="219" y="119" rx="0" ry="0" width="15" height="33" />
  </ContentLoader>
);

export default Skeleton;
