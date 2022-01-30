import styled from "styled-components/macro";
import Lottie from "lottie-react";
import disk from "../../assets/animations/spinning-disk.json";

const AnimationWrapper = styled.div`
  max-width: 150px;
  max-height: 150px;
  margin: auto;
`;

const LoadingDisk = () => {
  return (
    <AnimationWrapper>
      <Lottie loop animationData={disk} style={{ maxWidth: "100%" }} />
    </AnimationWrapper>
  );
};

export default LoadingDisk;
