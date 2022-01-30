import styled from "styled-components/macro";

interface AvatarProps {
  source?: string;
  size: "large" | "small";
}

const Avatar = ({ source, size = "small" }: AvatarProps) => {
  const avatarSize = size === "small" ? 40 : 80;
  return <AvatarImage src={source} size={avatarSize} />;
};

const AvatarImage = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
`;

export default Avatar;
